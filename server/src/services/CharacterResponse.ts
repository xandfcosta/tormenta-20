import z from "zod";
import { Character, Effect, Modifier, type TAttributeKeys } from "@/domain/Character";

const AttributeModifier = Modifier.omit({ target: true }).extend({
	sourceName: Effect.shape.sourceName,
	sourceId: Effect.shape.sourceId,
	sourceType: Effect.shape.sourceType,
});

const AttributeResolved = z.object({
	base: z.number(),
	total: z.number(),
	mods: AttributeModifier.array(),
});

const HPResolved = AttributeResolved.extend({
	max: z.number(),
});
const MPResolved = HPResolved;
const DefenseResolved = AttributeResolved;
const MagicResistenceResolved = AttributeResolved;

const AttributesResolved = z.object({
	strength: AttributeResolved,
	dexterity: AttributeResolved,
	constitution: AttributeResolved,
	intelligence: AttributeResolved,
	wisdom: AttributeResolved,
	charisma: AttributeResolved,
}) satisfies z.ZodType<{ [k in TAttributeKeys]: z.infer<typeof AttributeResolved> }>;

export const CharacterOverviewResponse = Character.pick({
	id: true,
	name: true,
	player: true,
	origin: true,
	races: true,
	classes: true,
	divinity: true,
	description: true,
	notes: true,
	level: true,
	experience: true,
	size: true,
	movement: true,
}).extend({
	hp: HPResolved,
	mp: MPResolved,
	defense: DefenseResolved,
	magicResistence: MagicResistenceResolved,
	attributes: AttributesResolved,
});
