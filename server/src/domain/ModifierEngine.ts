import type { TEffect, TModifier } from "@/domain/Character";

export const ModifierEngine = {
	filter(effects: TEffect[], predicate: (m: TModifier) => boolean): Omit<TModifier, "target">[] {
		return effects
			.filter((e) => e.active)
			.flatMap((e) =>
				e.modifiers.map((mod) => ({
					...mod,
					sourceName: e.sourceName,
					sourceId: e.sourceId,
					sourceType: e.sourceType,
				})),
			)
			.filter(predicate)
			.map(({ target, ...mod }) => mod);
	},

	apply(base: number, modifiers: Pick<TModifier, "value" | "type">[]) {
		let flat = 0;
		let percent = 0;

		for (const m of modifiers) {
			if (m.type === "flat") flat += m.value;
			if (m.type === "percentage") percent += m.value;
		}

		return base + flat + base * (percent / 100);
	},
};
