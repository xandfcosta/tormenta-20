import { Modifier, type TAttributeKeys, type TCharacter, type TEffect } from "@/domain/Character";
import type { Prisma } from "@/prisma/client";
import { prisma } from "@/prisma/prisma";
import { CharacterCreate } from "@/services/CreateCharacter";

function getRandomIntInclusive(min: number, max: number) {
	min = Math.ceil(min); // Ensure min is treated as an integer
	max = Math.floor(max); // Ensure max is treated as an integer
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const expertisies = await prisma.expertise.createManyAndReturn({
	data: [
		{ name: "Acrobacia", attribute: "dexterity" },
		{ name: "Atletismo", attribute: "strength" },
		{ name: "Atuação", attribute: "charisma" },
		{ name: "Cavalgar", attribute: "dexterity" },
		{ name: "Conhecimento", attribute: "intelligence" },
		{ name: "Cura", attribute: "wisdom" },
		{ name: "Diplomacia", attribute: "charisma" },
		{ name: "Enganação", attribute: "charisma" },
		{ name: "Fortitude", attribute: "constitution" },
		{ name: "Furtividade", attribute: "dexterity" },
		{ name: "Guerra", attribute: "intelligence" },
		{ name: "Iniciativa", attribute: "dexterity" },
		{ name: "Intimidação", attribute: "charisma" },
		{ name: "Intuição", attribute: "wisdom" },
		{ name: "Investigação", attribute: "intelligence" },
		{ name: "Luta", attribute: "strength" },
		{ name: "Misticismo", attribute: "intelligence" },
		{ name: "Nobreza", attribute: "charisma" },
		{ name: "Ofício", attribute: "intelligence" },
		{ name: "Percepção", attribute: "wisdom" },
		{ name: "Pontaria", attribute: "dexterity" },
		{ name: "Reflexos", attribute: "dexterity" },
		{ name: "Religião", attribute: "wisdom" },
		{ name: "Sobrevivência", attribute: "wisdom" },
		{ name: "Vontade", attribute: "wisdom" },
	],
});

export const overpowerdCharacter: TCharacter = {
	id: 1,
	name: "Aethor the Ascendant",
	player: "GM",
	origin: "Ancient Hero",
	races: ["Human", "Celestial"],
	classes: ["Paladin", "Archmage"],
	divinity: "Thyatis",
	description: "A legendary hero overflowing with stacked effects, items and modifiers.",
	notes: "UI stress test: maximum complexity.",

	level: 20,
	experience: 999999,
	size: "Médio",
	movement: 12,
	magicResistence: 32,
	defense: 38,
	condition: "alive",

	hp: { current: 320, max: 320 },
	mp: { current: 300, max: 300 },

	attributes: {
		strength: 24,
		dexterity: 20,
		constitution: 22,
		intelligence: 24,
		wisdom: 18,
		charisma: 22,
	},

	expertisies: expertisies.map((e) => ({
		...e,
		value: getRandomIntInclusive(20, 30),
		attribute: e.attribute as TAttributeKeys,
		trained: true,
		trainBonus: getRandomIntInclusive(2, 10),
	})),

	abilities: [
		{
			id: 1,
			type: "class",
			name: "Divine Smite",
			description: "Adds massive holy damage to attacks.",
			passive: false,
			manaCost: 5,
			attacks: [],
			modifiers: [
				{
					id: 1,
					target: { kind: "damage", damageType: "light" },
					value: 20,
					type: "flat",
				},
			],
		},
		{
			id: 2,
			type: "spell",
			name: "Arcane Supremacy",
			description: "Greatly increases magical potency.",
			passive: true,
			manaCost: 0,
			attacks: [],
			modifiers: [
				{
					id: 2,
					target: { kind: "mp" },
					value: 30,
					type: "percentage",
				},
			],
		},
	],

	effects: [],

	inventory: {
		load: { limit: 120, used: 60 },
		tibares: 12000,
		items: [
			{
				id: 1,
				type: "weapon",
				name: "Sword of Apocalypse",
				description: "A divine blade radiating holy and arcane energy.",
				quantity: 1,
				slot: 1,
				isEquippable: true,
				equipped: true,
				passive: false,
				attacks: [
					{
						id: 101,
						category: "melee",
						attackRoll: { attribute: "strength", baseBonus: 12 },
						damage: [
							{ dice: { count: 2, sides: 10, bonus: 10 }, type: "slash" },
							{ dice: { count: 2, sides: 8, bonus: 0 }, type: "light" },
						],
						critical: {
							diceValue: 19,
							multiplier: 3,
							extraDamage: [{ dice: { count: 2, sides: 6, bonus: 0 }, type: "light" }],
						},
					},
				],
				modifiers: [
					{
						id: 20,
						target: { kind: "attribute", key: "strength" },
						value: 4,
						type: "flat",
					},
					{
						id: 21,
						target: { kind: "attribute", key: "charisma" },
						value: 2,
						type: "flat",
					},
				],
			},
			{
				id: 2,
				type: "armor",
				name: "Celestial Plate",
				description: "Blessed armor of divine champions.",
				quantity: 1,
				slot: 2,
				isEquippable: true,
				equipped: true,
				passive: true,
				attacks: [],
				modifiers: [
					{
						id: 22,
						target: { kind: "defense" },
						value: 8,
						type: "flat",
					},
					{
						id: 23,
						target: { kind: "hp" },
						value: 20,
						type: "percentage",
					},
				],
			},
			{
				id: 3,
				type: "accessory",
				name: "Ring of Omnipotence",
				description: "A ring packed with layered enchantments.",
				quantity: 1,
				slot: 3,
				isEquippable: true,
				equipped: true,
				passive: true,
				attacks: [],
				modifiers: [
					{
						id: 24,
						target: { kind: "mp" },
						value: 50,
						type: "flat",
					},
					{
						id: 25,
						target: { kind: "attack", field: "damage" },
						value: 10,
						type: "flat",
					},
				],
			},
			{
				id: 4,
				type: "consumable",
				name: "Supreme Healing Potion",
				description: "Fully restores HP.",
				quantity: 5,
				slot: 0,
				isEquippable: false,
				equipped: false,
				passive: false,
				attacks: [],
				modifiers: [
					{
						id: 26,
						target: { kind: "hp" },
						value: 100,
						type: "percentage",
					},
				],
			},
		],
	},
};

export const balancedCharacter: TCharacter = {
	id: 2,
	name: "Rurik Ironstep",
	player: "Alex",
	origin: "Mercenary",
	races: ["Dwarf"],
	classes: ["Warrior"],
	divinity: null,
	description: "Reliable frontline fighter.",
	notes: "",

	level: 7,
	experience: 21000,
	size: "Médio",
	movement: 6,
	magicResistence: 16,
	defense: 21,
	condition: "alive",

	hp: { current: 78, max: 78 },
	mp: { current: 12, max: 12 },

	attributes: {
		strength: 16,
		dexterity: 12,
		constitution: 16,
		intelligence: 10,
		wisdom: 12,
		charisma: 8,
	},

	expertisies: expertisies.map((e) => {
		const trained = !!getRandomIntInclusive(0, 1);

		return {
			...e,
			value: getRandomIntInclusive(0, 10),
			attribute: e.attribute as TAttributeKeys,
			trained: trained,
			trainBonus: trained ? getRandomIntInclusive(2, 10) : 0,
		};
	}),

	abilities: [
		{
			id: 3,
			type: "class",
			name: "Power Attack",
			description: "Extra damage at the cost of accuracy.",
			passive: false,
			manaCost: 0,
			attacks: [],
			modifiers: [
				{
					id: 30,
					target: { kind: "attack", field: "damage" },
					value: 4,
					type: "flat",
				},
			],
		},
	],

	effects: [],

	inventory: {
		load: { limit: 40, used: 28 },
		tibares: 180,
		items: [
			{
				id: 10,
				type: "weapon",
				name: "Battle Axe",
				description: "Standard dwarven axe.",
				quantity: 1,
				slot: 1,
				isEquippable: true,
				equipped: true,
				passive: false,
				attacks: [
					{
						id: 201,
						category: "melee",
						attackRoll: { attribute: "strength", baseBonus: 6 },
						damage: [{ dice: { count: 1, sides: 12, bonus: 4 }, type: "slash" }],
						critical: {
							diceValue: 20,
							multiplier: 3,
							extraDamage: [],
						},
					},
				],
				modifiers: [],
			},
			{
				id: 11,
				type: "armor",
				name: "Chainmail",
				description: "Solid medium armor.",
				quantity: 1,
				slot: 2,
				isEquippable: true,
				equipped: true,
				passive: true,
				attacks: [],
				modifiers: [
					{
						id: 31,
						target: { kind: "defense" },
						value: 4,
						type: "flat",
					},
				],
			},
		],
	},
};

export const weakCharacter: TCharacter = {
	id: 3,
	name: "Tilo",
	player: "Newbie",
	origin: "Farmer",
	races: ["Halfling"],
	classes: ["Commoner"],
	divinity: null,
	description: "Barely capable of surviving combat.",
	notes: "Designed to feel fragile.",

	level: 1,
	experience: 0,
	size: "Pequeno",
	movement: 6,
	magicResistence: 11,
	defense: 12,
	condition: "alive",

	hp: { current: 10, max: 10 },
	mp: { current: 0, max: 0 },

	attributes: {
		strength: 8,
		dexterity: 10,
		constitution: 9,
		intelligence: 10,
		wisdom: 11,
		charisma: 10,
	},

	expertisies: expertisies.map((e) => ({
		...e,
		value: 0,
		attribute: e.attribute as TAttributeKeys,
		trained: false,
		trainBonus: 0,
	})),

	abilities: [],

	effects: [],

	inventory: {
		load: { limit: 20, used: 6 },
		tibares: 12,
		items: [
			{
				id: 20,
				type: "weapon",
				name: "Rusty Dagger",
				description: "Old and unreliable.",
				quantity: 1,
				slot: 1,
				isEquippable: true,
				equipped: true,
				passive: false,
				attacks: [
					{
						id: 301,
						category: "melee",
						attackRoll: { attribute: "dexterity", baseBonus: 1 },
						damage: [{ dice: { count: 1, sides: 4, bonus: 0 }, type: "piercing" }],
						critical: {
							diceValue: 20,
							multiplier: 2,
							extraDamage: [],
						},
					},
				],
				modifiers: [],
			},
			{
				id: 21,
				type: "consumable",
				name: "Cheap Healing Herb",
				description: "Restores a tiny amount of HP.",
				quantity: 1,
				slot: 0,
				isEquippable: false,
				equipped: false,
				passive: false,
				attacks: [],
				modifiers: [
					{
						id: 32,
						target: { kind: "hp" },
						value: 5,
						type: "flat",
					},
				],
			},
		],
	},
};

await Promise.all(
	[overpowerdCharacter, balancedCharacter, weakCharacter].map(async (c) => {
		const basicData = CharacterCreate.parse(c);

		const char = await prisma.character.create({
			data: {
				...basicData,
				divinity: basicData.divinity || null,
				description: c.description,
				notes: c.notes,
				level: c.level,
				experience: c.experience,
				size: c.size,
				movement: c.movement,
				magicResistence: c.magicResistence,
				defense: c.defense,
				condition: c.condition,
				hp: c.hp.current,
				hpMax: c.hp.max,
				mp: c.mp.current,
				mpMax: c.mp.max,
				attributes: { create: c.attributes },
				expertisies: {
					create: c.expertisies.map((e) => ({
						value: e.value,
						trained: e.trained,
						trainBonus: e.trainBonus,
						expertiseId: e.id,
					})),
				},
				abilities: {
					create: c.abilities.map(({ id, ...a }) => ({
						...a,
						attacks: { create: a.attacks.map(({ id, ...at }) => ({ attack: { create: at } })) },
						modifiers: { create: a.modifiers.map(({ id, ...mod }) => ({ modifier: { create: mod } })) },
					})),
				},
				inventory: {
					create: {
						tibares: c.inventory.tibares,
						limit: c.inventory.load.limit,
						items: {
							create: c.inventory.items.map(({ id, ...i }) => ({
								...i,
								modifiers: { create: i.modifiers.map(({ id, ...mod }) => ({ modifier: { create: mod } })) },
								attacks: { create: i.attacks.map(({ id, ...a }) => ({ attack: { create: a } })) },
							})),
						},
					},
				},
			},

			include: {
				inventory: {
					include: {
						items: {
							include: {
								modifiers: { select: { modifier: true } },
								attacks: { select: { attack: true } },
							},
						},
					},
				},
				abilities: {
					include: {
						modifiers: { select: { modifier: true } },
						attacks: { select: { attack: true } },
					},
				},
				effects: { include: { modifiers: { select: { modifier: true } } } },
			},
		});

		const effects: TEffect[] = [];

		if (char.inventory)
			for (const i of char.inventory.items) {
				if (!(i.equipped && i.passive)) continue;

				effects.push({
					id: 0,
					modifiers: i.modifiers.map((mod) => Modifier.parse(mod.modifier)),
					duration: { type: "scene" },
					sourceName: i.name,
					sourceType: "inventory",
					sourceId: i.id,
					active: true,
					stacks: 1,
					startedAt: new Date(),
				});
			}

		for (const a of char.abilities) {
			effects.push({
				id: 0,
				modifiers: a.modifiers.map((mod) => Modifier.parse(mod.modifier)),
				duration: { type: "scene" },
				sourceName: a.name,
				sourceType: "inventory",
				sourceId: a.id,
				active: true,
				stacks: 1,
				startedAt: new Date(),
			});
		}

		for (const e of effects) {
			const { id, ...rest } = e;
			await prisma.effect.create({
				data: {
					...rest,
					characterId: char.id,
					sourceId: e.sourceId || null,
					duration: e.duration as Prisma.JsonObject,
					modifiers: { create: e.modifiers.map(({ id, ...mod }) => ({ modifier: { create: mod } })) },
				},
			});
		}
	}),
);
