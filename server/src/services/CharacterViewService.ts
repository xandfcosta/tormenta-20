import { Character } from "@/domain/Character";
import { characterResolver } from "@/domain/CharacterResolver";
import { prisma } from "@/prisma/prisma";

export class CharacterViewService {
	async getResolved(characterId: number) {
		const character = await prisma.character.findUnique({
			where: { id: characterId },
			include: {
				inventory: { include: { items: true } },
				abilities: true,
				effects: true,
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
						limit: character.inventory?.load,
						used: character.inventory?.items.reduce(
							(total, i) => total + i.slot * i.quantity,
							0,
						),
					},
				},
				expertisies: character.expertisies.map((e) => ({
					...e,
					name: e.expertise.name,
					attribute: e.expertise.attribute,
				})),
			}),
		);
	}
}

export const characterViewService = new CharacterViewService();
