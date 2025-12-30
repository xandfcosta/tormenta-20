import type z from "zod";
import { Character } from "@/domain/Character";

export const CharacterCreate = Character.pick({
	name: true,
	player: true,
	origin: true,
	races: true,
	classes: true,
	divinity: true,
	description: true,
});

export type TCharacterCreate = z.infer<typeof CharacterCreate>;
