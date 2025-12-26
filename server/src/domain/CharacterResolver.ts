import type {
	TAttributeKeys,
	TAttributes,
	TCharacter,
	TEffect,
} from "@/domain/Character";
import { ModifierEngine } from "@/domain/ModifierEngine";

export class CharacterResolver {
	resolve(character: TCharacter) {
		const effects = character.effects ?? [];

		return {
			...character,
			attributes: this.resolveAttributes(character, effects),
			defense: this.resolveDefense(character, effects),
			expertisies: this.resolveExpertisies(character, effects),
		};
	}

	resolveAttributes(character: TCharacter, effects: TEffect[]) {
		const result: Partial<TAttributes> = {};

		for (const [key, value] of Object.entries(character.attributes)) {
			const mods = ModifierEngine.filter(
				effects,
				(m) => m.target.kind === "attribute" && m.target.key === key,
			);

			result[key as TAttributeKeys] = ModifierEngine.apply(
				value as number,
				mods,
			);
		}

		return result as TAttributes;
	}

	resolveDefense(character: TCharacter, effects: TEffect[]) {
		const mods = ModifierEngine.filter(
			effects,
			(m) => m.target.kind === "defense",
		);

		return ModifierEngine.apply(character.defense, mods);
	}

	resolveExpertisies(character: TCharacter, effects: TEffect[]) {
		return character.expertisies.map((skill) => {
			const attr = character.attributes[skill.attribute];

			const mods = ModifierEngine.filter(
				effects,
				(m) => m.target.kind === "expertise" && m.target.name === skill.name,
			);

			return {
				...skill,
				total:
					attr +
					(skill.trained ? skill.trainBonus : 0) +
					mods.reduce((a, b) => a + b.value, 0),
				modifiers: mods,
			};
		});
	}
}

export const characterResolver = new CharacterResolver();
