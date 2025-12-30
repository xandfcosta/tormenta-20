import {
	Ability,
	Attributes,
	Character,
	Effect,
	Expertise,
	Inventory,
	InventoryItem,
	type TInventoryItem,
} from "@/domain/Character";
import { characterResolver } from "@/domain/CharacterResolver";
import { prisma } from "@/prisma/prisma";
import { CharacterOverviewResponse } from "@/services/CharacterResponse";
import type { TCharacterCreate } from "@/services/CreateCharacter";

export class CharacterService {
	async create(data: TCharacterCreate) {
		const expertisiesCount = await prisma.expertise.count();

		return prisma.character.create({
			data: {
				...data,
				divinity: data.divinity || null,
				attributes: { create: {} },
				inventory: { create: {} },
				expertisies: {
					create: [...Array(expertisiesCount).keys()].map((_, index) => ({
						expertiseId: index + 1,
					})),
				},
			},
			select: { id: true },
		});
	}

	async getOverview(id: number) {
		const character = await prisma.character.findUnique({
			where: { id },
			select: {
				id: true,
				name: true,
				player: true,
				origin: true,
				races: true,
				classes: true,
				divinity: true,
				description: true,
				notes: true,
				level: true,
				experience: true,
				size: true,
				movement: true,
				defense: true,
				magicResistence: true,
				hp: true,
				hpMax: true,
				mp: true,
				mpMax: true,
				condition: true,
				effects: { include: { modifiers: { select: { modifier: true } } } },
				attributes: true,
			},
		});

		if (!character) throw new Error("Character not found");
		if (!character.attributes) throw new Error("Character dont't have attributes");

		const effects = Effect.array().parse(
			character.effects.map((e) => ({ ...e, modifiers: e.modifiers.map((mod) => mod.modifier) })),
		);

		return CharacterOverviewResponse.parse({
			...character,
			hp: characterResolver.resolveHP({ current: character.hp, max: character.hpMax }, effects),
			mp: characterResolver.resolveHP({ current: character.mp, max: character.mpMax }, effects),
			defense: characterResolver.resolveDefense(character.defense, effects),
			magicResistence: characterResolver.resolveMagicResistence(character.magicResistence, effects),
			attributes: characterResolver.resolveAttributes(character.attributes, effects),
		});
	}

	async getExpertisies(characterId: number) {
		const character = await prisma.character.findUnique({
			where: { id: characterId },
			select: {
				attributes: true,
				expertisies: { include: { expertise: true } },
				effects: { include: { modifiers: { select: { modifier: true } } } },
			},
		});

		if (!character) throw new Error("Character not found");

		console.log({ effects: JSON.stringify(character.effects, undefined, 2) });

		return characterResolver.resolveExpertisies(
			{
				expertisies: character.expertisies.map((e) =>
					Expertise.parse({ ...e, id: e.expertise.id, name: e.expertise.name, attribute: e.expertise.attribute }),
				),
				attributes: Attributes.parse(character.attributes),
			},
			Effect.array().parse(character.effects.map((e) => ({ ...e, modifiers: e.modifiers.map((mod) => mod.modifier) }))),
		);
	}

	async getInventory(characterId: number) {
		const inventory = await prisma.inventory.findUnique({
			where: { characterId },
			include: {
				items: { include: { modifiers: { select: { modifier: true } }, attacks: { select: { attack: true } } } },
			},
		});

		if (!inventory) throw new Error("There's no inventory on this character");

		const items: TInventoryItem[] = [];
		let loadUsed = 0;

		for (const i of inventory.items) {
			loadUsed += i.slot * i.quantity;

			items.push(
				InventoryItem.parse({
					...i,
					attacks: i.attacks.map((i) => i.attack),
					modifiers: i.modifiers.map((m) => m.modifier),
				}),
			);
		}

		return Inventory.parse({
			...inventory,
			load: { limit: inventory.limit, used: loadUsed },
			items: inventory.items.map((i) => ({
				...i,
				attacks: i.attacks.map((i) => i.attack),
				modifiers: i.modifiers.map((m) => m.modifier),
			})),
		});
	}

	async getAbilities(characterId: number) {
		const abilities = await prisma.ability.findMany({
			where: { characterId },
			include: { attacks: { select: { attack: true } }, modifiers: { select: { modifier: true } } },
		});

		return abilities.map((a) =>
			Ability.parse({
				...a,
				attacks: a.attacks.map((at) => at.attack),
				modifiers: a.modifiers.map((m) => m.modifier),
			}),
		);
	}

	async getById(id: number) {
		const character = await prisma.character.findUnique({
			where: { id },
			include: {
				inventory: {
					include: {
						items: {
							include: {
								modifiers: { select: { modifier: true } },
								attacks: { select: { attack: true } },
							},
						},
					},
				},
				abilities: {
					include: {
						modifiers: { select: { modifier: true } },
						attacks: { select: { attack: true } },
					},
				},
				effects: { include: { modifiers: { select: { modifier: true } } } },
				attributes: true,
				expertisies: { include: { expertise: true } },
			},
		});

		if (!character) throw new Error("Character not found");

		return characterResolver.resolve(
			Character.parse({
				...character,
				hp: { current: character.hp, max: character.hpMax },
				mp: { current: character.mp, max: character.mpMax },
				inventory: {
					...character.inventory,
					load: {
						limit: character.inventory?.limit,
						used: character.inventory?.items.reduce((total, i) => total + i.slot * i.quantity, 0),
					},
					items: character.inventory?.items.map((i) => ({
						...i,
						modifiers: i.modifiers.map((mod) => mod.modifier),
						attacks: i.attacks.map((at) => at.attack),
					})),
				},
				expertisies: character.expertisies.map((e) => ({
					...e,
					id: e.characterId,
					name: e.expertise.name,
					attribute: e.expertise.attribute,
				})),
				abilities: character.abilities.map((a) => ({
					...a,
					modifiers: a.modifiers.map((mod) => mod.modifier),
					attacks: a.attacks.map((at) => at.attack),
				})),
				effects: character.effects.map((e) => ({ ...e, modifiers: e.modifiers.map((mod) => mod.modifier) })),
			}),
		);
	}

	async list() {
		const characters = await prisma.character.findMany({
			orderBy: { name: "asc" },
			include: {
				inventory: { include: { items: true } },
				abilities: true,
				effects: true,
				attributes: true,
				expertisies: { include: { expertise: true } },
			},
		});

		return characters.map((c) => {
			return characterResolver.resolve(
				Character.parse({
					...c,
					hp: { current: c.hp, max: c.hpMax },
					mp: { current: c.mp, max: c.mpMax },
					inventory: {
						...c.inventory,
						load: {
							limit: c.inventory?.limit,
							used: c.inventory?.items.reduce((total, i) => total + i.slot * i.quantity, 0),
						},
					},
					expertisies: c.expertisies.map((e) => ({
						...e,
						id: e.expertise.id,
						name: e.expertise.name,
						attribute: e.expertise.attribute,
					})),
				}),
			);
		});
	}

	async listOverviews() {
		const characters = await prisma.character.findMany({ select: { id: true } });
		return Promise.all(characters.map((c) => this.getOverview(c.id)));
	}

	async delete(id: number) {
		await prisma.character.update({
			where: { id },
			data: { disable: true },
		});
	}
}

export const characterService = new CharacterService();
