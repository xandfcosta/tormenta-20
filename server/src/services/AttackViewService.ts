import { attackResolver } from "@/domain/AttackResolver";
import { Character } from "@/domain/Character";
import { prisma } from "@/prisma/prisma";

export class AttackViewService {
	async list(characterId: number) {
		const character = await prisma.character.findUnique({
			where: { id: characterId },
			include: {
				inventory: { include: { items: true } },
				abilities: true,
				effects: true,
			},
		});

		if (!character) throw new Error("Character not found");

		const characterParsed = Character.parse(character);

		const attacks = [
			...(characterParsed.inventory?.items.flatMap((i) => i.attacks) ?? []),
			...characterParsed.abilities.flatMap((a) => a.attacks),
		];

		return attacks.map((a) =>
			attackResolver.resolve(a, characterParsed, characterParsed.effects),
		);
	}
}

export const attackViewService = new AttackViewService();
