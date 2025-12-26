import type z from "zod";
import { Character } from "@/domain/Character";
import { prisma } from "@/prisma/prisma";

export const CharacterCreate = Character.pick({
	name: true,
	player: true,
	origin: true,
	races: true,
	classes: true,
	divinity: true,
	description: true,
});

export type TCharacterCreate = z.infer<typeof CharacterCreate>;

export class CharacterService {
	async create(data: TCharacterCreate) {
		return prisma.character.create({
			data: {
				...data,
				divinity: data.divinity || null,
				attributes: {
					create: {
						charisma: 0,
						constitution: 0,
						dexterity: 0,
						intelligence: 0,
						strength: 0,
						wisdom: 0,
					},
				},
				expertisies: {
					create: [...Array(24).keys()].map((index) => ({
						expertiseId: index + 1,
					})),
				},
				inventory: {
					create: {
						load: 0,
						tibares: 0,
					},
				},
			},
			select: { id: true },
		});
	}

	async getById(id: number) {
		const character = await prisma.character.findUnique({
			where: { id },
			include: {
				inventory: { include: { items: true } },
				abilities: true,
				effects: true,
				attributes: true,
				expertisies: { include: { expertise: true } },
			},
		});

		if (!character) throw new Error("Character don't exist");

		return Character.parse({
			...character,
			hp: { current: character.hp, max: character.hpMax },
			mp: { current: character.hp, max: character.mpMax },
			expertisies: character.expertisies.map((e) => ({
				...e,
				name: e.expertise.name,
				attribute: e.expertise.attribute,
			})),
			inventory: {
				...character.inventory,
				load: {
					limit: character.inventory?.load || 0,
					used: character.inventory?.items.reduce(
						(total, i) => total + i.slot * i.quantity,
						0,
					),
				},
			},
		});
	}

	async list() {
		const characters = await prisma.character.findMany({
			orderBy: { name: "asc" },
			select: {
				id: true,
				name: true,
				player: true,
				level: true,
				classes: true,
				races: true,
				hp: true,
				hpMax: true,
				mp: true,
				mpMax: true,
			},
		});

		return characters.map((c) => ({
			...c,
			hp: { current: c.hp, max: c.hpMax },
			mp: { current: c.mp, max: c.hpMax },
		}));
	}

	async update(id: number, data: Partial<TCharacterCreate>) {
		return prisma.character.update({
			where: { id },
			data,
		});
	}

	async delete(id: number) {
		await prisma.character.delete({
			where: { id },
		});
	}
}

export const characterService = new CharacterService();
