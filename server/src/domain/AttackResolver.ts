import type { TAttack, TCharacter, TEffect } from "@/domain/Character";
import { ModifierEngine } from "@/domain/ModifierEngine";

export class AttackResolver {
	resolve(attack: TAttack, character: TCharacter, effects: TEffect[]) {
		return {
			category: attack.category,
			hit: this.resolveHit(attack, character, effects),
			damage: this.resolveDamage(attack, effects),
			critical: this.resolveCritical(attack, effects),
		};
	}

	resolveHit(attack: TAttack, character: TCharacter, effects: TEffect[]) {
		const attr = character.attributes[attack.attackRoll.attribute];

		const mods = ModifierEngine.filter(
			effects,
			(m) => m.target.kind === "attack" && m.target.field === "hit",
		);

		const base = attack.attackRoll.baseBonus + attr;

		return {
			base,
			modifiers: mods,
			total: ModifierEngine.apply(base, mods),
		};
	}

	resolveDamage(attack: TAttack, effects: TEffect[]) {
		return attack.damage.map((dmg) => {
			const generic = ModifierEngine.filter(
				effects,
				(m) => m.target.kind === "attack" && m.target.field === "damage",
			);

			const typed = ModifierEngine.filter(
				effects,
				(m) => m.target.kind === "damage" && m.target.damageType === dmg.type,
			);

			const bonus = generic.concat(typed).reduce((a, b) => a + b.value, 0);

			return {
				type: dmg.type,
				dice: dmg.dice,
				finalFormula: `${dmg.dice.count}d${dmg.dice.sides}${
					dmg.dice.bonus + bonus >= 0 ? "+" : ""
				}${dmg.dice.bonus + bonus}`,
				modifiers: [...generic, ...typed],
			};
		});
	}

	resolveCritical(attack: TAttack, effects: TEffect[]) {
		const rangeMods = ModifierEngine.filter(
			effects,
			(m) => m.target.kind === "attack" && m.target.field === "crit.range",
		);

		const multMods = ModifierEngine.filter(
			effects,
			(m) => m.target.kind === "attack" && m.target.field === "crit.multiplier",
		);

		return {
			range: ModifierEngine.apply(attack.critical.diceValue, rangeMods),
			multiplier: ModifierEngine.apply(attack.critical.multiplier, multMods),
			extraDamage: attack.critical.extraDamage,
		};
	}
}

export const attackResolver = new AttackResolver();
