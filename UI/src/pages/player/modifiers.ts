import type { TAttributeKeys, TCharacter, TModifier, TModifierTarget } from "@/api/characters";

export function getModifiersForAttribute(character: TCharacter, attr: TAttributeKeys) {
	const modifiers: { source: string; modifier: TModifier }[] = [];

	for (const effect of character.effects) {
		if (!effect.active) continue;

		for (const mod of effect.modifiers) {
			if (mod.target.kind === "attribute" && mod.target.key === attr) {
				modifiers.push({ source: effect.sourceName, modifier: mod });
			}
		}
	}

	for (const item of character.inventory.items) {
		if (!item.equipped) continue;

		for (const mod of item.modifiers) {
			if (mod.target.kind === "attribute" && mod.target.key === attr) {
				modifiers.push({ source: item.name, modifier: mod });
			}
		}
	}
	return modifiers;
}

export function getModifiersForStat(character: TCharacter, statKind: TModifierTarget["kind"]) {
	const modifiers: { source: string; modifier: TModifier }[] = [];

	for (const effect of character.effects) {
		if (!effect.active) continue;

		for (const mod of effect.modifiers) {
			if (mod.target.kind === statKind) {
				modifiers.push({ source: effect.sourceName, modifier: mod });
			}
		}
	}

	for (const item of character.inventory.items) {
		if (!item.equipped) continue;

		for (const mod of item.modifiers) {
			if (mod.target.kind === statKind) {
				modifiers.push({ source: item.name, modifier: mod });
			}
		}
	}

	return modifiers;
}
