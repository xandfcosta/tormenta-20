import type { TAttributeKeys, TAttributes, TCharacter, TEffect, THP, TModifier, TMP } from "@/domain/Character";
import { ModifierEngine } from "@/domain/ModifierEngine";

export class CharacterResolver {
	resolve(character: TCharacter) {
		const effects = character.effects ?? [];

		return {
			...character,
			hp: this.resolveHP(character.hp, effects),
			mp: this.resolveMP(character.mp, effects),
			attributes: this.resolveAttributes(character.attributes, effects),
			defense: this.resolveDefense(character.defense, effects),
			expertisies: this.resolveExpertisies(character, effects),
			magicResistence: this.resolveMagicResistence(character.magicResistence, effects),
		};
	}

	resolveHP(hp: THP, effects: TEffect[]) {
		const mods = ModifierEngine.filter(effects, (m) => m.target.kind === "hp");

		return {
			base: hp.current,
			total: ModifierEngine.apply(hp.current, mods),
			max: hp.max,
			mods,
		};
	}

	resolveMP(mp: TMP, effects: TEffect[]) {
		const mods = ModifierEngine.filter(effects, (m) => m.target.kind === "mp");

		return {
			base: mp.current,
			total: ModifierEngine.apply(mp.current, mods),
			max: mp.max,
			mods,
		};
	}

	resolveDefense(defense: number, effects: TEffect[]) {
		const mods = ModifierEngine.filter(effects, (m) => m.target.kind === "defense");

		return {
			base: defense,
			total: ModifierEngine.apply(defense, mods),
			mods,
		};
	}

	resolveMagicResistence(magicResistence: number, effects: TEffect[]) {
		const mods = ModifierEngine.filter(effects, (m) => m.target.kind === "magicResistence");

		return {
			base: magicResistence,
			total: ModifierEngine.apply(magicResistence, mods),
			mods,
		};
	}

	resolveAttributes(attributes: TAttributes, effects: TEffect[]) {
		const result: Partial<{
			[k in keyof TAttributes]: {
				base: number;
				total: number;
				mods: Omit<TModifier, "target">[];
			};
		}> = {};

		for (const [key, value] of Object.entries(attributes)) {
			const mods = ModifierEngine.filter(effects, (m) => m.target.kind === "attribute" && m.target.key === key);

			result[key as TAttributeKeys] = {
				base: value,
				total: ModifierEngine.apply(value as number, mods),
				mods,
			};
		}

		return result as {
			[k in keyof TAttributes]: { base: number; total: number };
		};
	}

	resolveExpertisies(character: Pick<TCharacter, "attributes" | "expertisies">, effects: TEffect[]) {
		return character.expertisies.map((skill) => {
			const attr = character.attributes[skill.attribute];

			const mods = ModifierEngine.filter(effects, (m) => m.target.kind === "expertise" && m.target.name === skill.name);

			return {
				...skill,
				total: attr + (skill.trained ? skill.trainBonus : 0) + mods.reduce((a, b) => a + b.value, 0),
				mods,
			};
		});
	}
}

export const characterResolver = new CharacterResolver();
