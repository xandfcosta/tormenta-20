import type z from "zod";
import type { Modifier as ModifierSchema } from "@/domain/Character";

export type Modifier = {
	id: number;
	target: z.infer<typeof ModifierSchema.shape.target>;
	value: number;
	type: "flat" | "percentage";
};

export type Effect = {
	active: boolean;
	modifiers: Modifier[];
};

export function sumModifiers(modifiers: Modifier[], base: number) {
	let flat = 0;
	let percent = 0;

	for (const m of modifiers) {
		if (m.type === "flat") flat += m.value;
		if (m.type === "percentage") percent += m.value;
	}

	return base + flat + base * (percent / 100);
}
