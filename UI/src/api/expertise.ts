import z from "zod";
import { AttributeKeys } from "@/api/characters";

export const Expertise = z.object({
	id: z.number(),
	name: z.string(),
	attribute: AttributeKeys,
	value: z.number(),
	trained: z.boolean(),
	trainBonus: z.number(),
});
