import type { TEffect } from "@/domain/Character";

export class EffectResolver {
	explain(effect: TEffect) {
		return effect.modifiers.map((m) => ({
			target: m.target,
			value: m.value,
			type: m.type,
		}));
	}
}
