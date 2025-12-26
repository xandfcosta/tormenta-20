import { type Effect, type Modifier, sumModifiers } from "@/domain/DomainTypes";

export const ModifierEngine = {
	filter(effects: Effect[], predicate: (m: Modifier) => boolean): Modifier[] {
		return effects
			.filter((e) => e.active)
			.flatMap((e) => e.modifiers)
			.filter(predicate);
	},

	apply(base: number, modifiers: Modifier[]) {
		return sumModifiers(modifiers, base);
	},
};
