import { useQuery } from "@tanstack/react-query";
import z from "zod";
import { api } from "@/api/client";

const AttributeModifier = z.object({
	id: z.number(),
	value: z.number(),
	type: z.enum(["flat", "percentage"]),
	sourceName: z.string(),
	sourceId: z.number().nullish(),
	sourceType: z.enum(["inventory", "ability", "other"]),
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
});

export const AttributeKeys = AttributeResolved.keyof();

export const CharacterOverviewResponse = z.object({
	id: z.number(),
	name: z.string(),
	player: z.string(),
	origin: z.string(),
	races: z.string().array(),
	classes: z.string().array(),
	divinity: z.string().nullish(),
	description: z.string(),
	notes: z.string(),
	hp: HPResolved,
	mp: MPResolved,
	condition: z.enum(["alive", "uncounscious", "dead"]),
	level: z.number(),
	experience: z.number(),
	size: z.enum(["Minúsculo", "Pequeno", "Médio", "Grande", "Enorme", "Colossal"]),
	movement: z.number(),
	defense: DefenseResolved,
	magicResistence: MagicResistenceResolved,
	attributes: AttributesResolved,
});

export function useCharacters() {
	return useQuery({
		queryKey: ["characters"],
		queryFn: () =>
			api.get("/characters/overview").then((res) => {
				return CharacterOverviewResponse.array().parse(res.data);
			}),
		throwOnError: true,
	});
}

export function useCharacter(id: number) {
	return useQuery({
		queryKey: ["characters", id],
		queryFn: () =>
			api.get(`/characters/${id}`).then((res) => {
				return CharacterOverviewResponse.parse(res.data);
			}),
		throwOnError: true,
	});
}

export function getCharacterImage(id: number) {
	return `${api.defaults.baseURL || ""}/images/${id}.jpeg`;
}
