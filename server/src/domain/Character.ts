import z from "zod";

export const Attributes = z.object({
	strength: z.number(),
	dexterity: z.number(),
	constitution: z.number(),
	intelligence: z.number(),
	wisdom: z.number(),
	charisma: z.number(),
});

export type TAttributes = z.infer<typeof Attributes>;

export const AttributeKeys = Attributes.keyof();
export type TAttributeKeys = z.infer<typeof AttributeKeys>;

export const HP = z.object({
	current: z.number(),
	max: z.number(),
});

export type THP = z.infer<typeof HP>;

export const MP = z.object({
	current: z.number(),
	max: z.number(),
});

export type TMP = z.infer<typeof MP>;

export const Expertise = z.object({
	name: z.string(),
	attribute: AttributeKeys,
	trained: z.boolean(),
	trainBonus: z.number(),
});

export type TExpertise = z.infer<typeof Expertise>;

export const DamageType = z.enum([
	"slash",
	"impact",
	"piercing",
	"fire",
	"cold",
	"eletricity",
	"acid",
	"dark",
	"light",
	"essence",
	"sonic",
]);

export type TDamageType = z.infer<typeof DamageType>;

export const DamageRoll = z.object({
	sides: z.number(),
	count: z.number(),
	bonus: z.number(),
});

export type TDamageRoll = z.infer<typeof DamageRoll>;

export const Damage = z.object({
	dice: DamageRoll,
	type: DamageType,
});

export type TDamage = z.infer<typeof Damage>;

export const Critical = z.object({
	diceValue: z.number(),
	multiplier: z.number(),
	extraDamage: Damage.array(),
});

export type TCritical = z.infer<typeof Critical>;

export const AttackRoll = z.object({
	attribute: AttributeKeys,
	baseBonus: z.number(),
});

export type TAttackRoll = z.infer<typeof AttackRoll>;

export const Attack = z.object({
	category: z.enum(["melee", "distance", "magic"]),
	attackRoll: AttackRoll,
	damage: Damage.array(),
	critical: Critical,
});

export type TAttack = z.infer<typeof Attack>;

export const InventoryItemType = z.enum([
	"weapon",
	"armor",
	"shield",
	"consumable",
	"accessory",
	"misc",
]);

export type TInventoryItemType = z.infer<typeof InventoryItemType>;

export const ModifierTarget = z.union([
	z.object({ kind: z.literal("attribute"), key: AttributeKeys }),
	z.object({ kind: z.literal("expertise"), name: z.string() }),
	z.object({
		kind: z.literal("attack"),
		field: z.enum(["hit", "damage", "crit.range", "crit.multiplier"]),
	}),
	z.object({ kind: z.literal("damage"), damageType: DamageType }),
	z.object({ kind: z.literal("defense") }),
	z.object({ kind: z.literal("hp") }),
	z.object({ kind: z.literal("mp") }),
]);

export type TModifierTarget = z.infer<typeof ModifierTarget>;

export const Modifier = z.object({
	id: z.number(),
	target: ModifierTarget,
	value: z.number(),
	type: z.enum(["flat", "percentage"]),
});

export type TModifier = z.infer<typeof Modifier>;

export const Effect = z.object({
	id: z.number(),
	sourceType: z.enum(["inventory", "ability", "other"]),
	sourceId: z.number().nullish(),
	sourceName: z.string(),

	active: z.boolean(),
	duration: z.union([
		z.object({ type: "rounds", value: z.number() }),
		z.object({ type: "scene" }),
		z.object({ type: "permanent" }),
		z.object({ type: "conditional", condition: z.string() }),
	]),

	stacks: z.number(),
	modifiers: Modifier.array(),

	startedAt: z.string(),
});

export type TEffect = z.infer<typeof Effect>;

export const InventoryItem = z.object({
	id: z.number(),
	type: InventoryItemType,
	name: z.string(),
	description: z.string(),

	quantity: z.number(),
	slot: z.number(),

	isEquippable: z.boolean(),
	equipped: z.boolean(),
	passive: z.boolean(),

	attacks: Attack.array(), // 🗡 item-based attacks
	modifiers: Modifier.array(), // 💪 buffs/debuffs
});

export type TInventoryItem = z.infer<typeof InventoryItem>;

export const Inventory = z.object({
	load: z.object({ limit: z.number(), used: z.number() }),
	tibares: z.number(),
	items: InventoryItem.array(),
});

export type TInventory = z.infer<typeof Inventory>;

export const Ability = z.object({
	id: z.number(),
	type: z.enum(["race", "origin", "class", "spell"]),
	name: z.string(),
	description: z.string(),

	passive: z.boolean(),
	manaCost: z.number(),

	attacks: Attack.array(), // 🔥 spell-like or physical attacks
	modifiers: Modifier.array(), // ✨ passive or activated buffs
});

export type TAbility = z.infer<typeof Ability>;

export const Character = z.object({
	id: z.number(),
	name: z.string(),
	player: z.string(),
	origin: z.string(),
	races: z.string().array(),
	classes: z.string().array(),
	divinity: z.string().nullish(),
	description: z.string(),
	notes: z.string(),

	hp: HP,
	mp: MP,
	level: z.number(),
	experience: z.number(),
	size: z.string(),
	movement: z.number(),
	magicResistence: z.number(), // (10 + 1/2 nível + mod. atributo-chave)
	defense: z.number(),

	effects: Effect.array(),
	attributes: Attributes,
	expertisies: Expertise.array(),
	abilities: Ability.array(),
	inventory: Inventory,
});

export type TCharacter = z.infer<typeof Character>;
