-- CreateTable
CREATE TABLE "Character" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "player" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "races" JSONB NOT NULL,
    "classes" JSONB NOT NULL,
    "divinity" TEXT,
    "description" TEXT NOT NULL DEFAULT '',
    "notes" TEXT NOT NULL DEFAULT '',
    "level" INTEGER NOT NULL DEFAULT 1,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "size" TEXT NOT NULL DEFAULT 'Médio',
    "movement" INTEGER NOT NULL DEFAULT 9,
    "defense" INTEGER NOT NULL DEFAULT 0,
    "magicResistence" INTEGER NOT NULL DEFAULT 10,
    "hp" INTEGER NOT NULL DEFAULT 0,
    "hpMax" INTEGER NOT NULL DEFAULT 0,
    "mp" INTEGER NOT NULL DEFAULT 0,
    "mpMax" INTEGER NOT NULL DEFAULT 0,
    "condition" TEXT NOT NULL DEFAULT 'alive',
    "disable" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Attributes" (
    "characterId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "strength" INTEGER NOT NULL DEFAULT 0,
    "dexterity" INTEGER NOT NULL DEFAULT 0,
    "constitution" INTEGER NOT NULL DEFAULT 0,
    "intelligence" INTEGER NOT NULL DEFAULT 0,
    "wisdom" INTEGER NOT NULL DEFAULT 0,
    "charisma" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Attributes_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Expertise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "attribute" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ExpertiseCharacter" (
    "characterId" INTEGER NOT NULL,
    "expertiseId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,
    "trained" BOOLEAN NOT NULL DEFAULT false,
    "trainBonus" INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY ("characterId", "expertiseId"),
    CONSTRAINT "ExpertiseCharacter_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ExpertiseCharacter_expertiseId_fkey" FOREIGN KEY ("expertiseId") REFERENCES "Expertise" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Inventory" (
    "characterId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "limit" INTEGER NOT NULL DEFAULT 0,
    "tibares" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Inventory_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InventoryItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "inventoryId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,
    "isEquippable" BOOLEAN NOT NULL,
    "equipped" BOOLEAN NOT NULL,
    "passive" BOOLEAN NOT NULL,
    CONSTRAINT "InventoryItem_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("characterId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ItemModifier" (
    "itemId" INTEGER NOT NULL,
    "modifierId" INTEGER NOT NULL,

    PRIMARY KEY ("itemId", "modifierId"),
    CONSTRAINT "ItemModifier_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "InventoryItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemModifier_modifierId_fkey" FOREIGN KEY ("modifierId") REFERENCES "Modifier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ItemAttack" (
    "itemId" INTEGER NOT NULL,
    "attackId" INTEGER NOT NULL,

    PRIMARY KEY ("itemId", "attackId"),
    CONSTRAINT "ItemAttack_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "InventoryItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemAttack_attackId_fkey" FOREIGN KEY ("attackId") REFERENCES "Attack" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ability" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "characterId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "passive" BOOLEAN NOT NULL,
    "manaCost" INTEGER NOT NULL,
    CONSTRAINT "Ability_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AbilityModifier" (
    "abilityId" INTEGER NOT NULL,
    "modifierId" INTEGER NOT NULL,

    PRIMARY KEY ("abilityId", "modifierId"),
    CONSTRAINT "AbilityModifier_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AbilityModifier_modifierId_fkey" FOREIGN KEY ("modifierId") REFERENCES "Modifier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AbilityAttack" (
    "abilityId" INTEGER NOT NULL,
    "attackId" INTEGER NOT NULL,

    PRIMARY KEY ("abilityId", "attackId"),
    CONSTRAINT "AbilityAttack_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AbilityAttack_attackId_fkey" FOREIGN KEY ("attackId") REFERENCES "Attack" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Effect" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "characterId" INTEGER NOT NULL,
    "sourceType" TEXT NOT NULL,
    "sourceId" INTEGER,
    "sourceName" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "duration" JSONB NOT NULL,
    "stacks" INTEGER NOT NULL,
    "startedAt" DATETIME NOT NULL,
    CONSTRAINT "Effect_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EffectModifier" (
    "effectId" INTEGER NOT NULL,
    "modifierId" INTEGER NOT NULL,

    PRIMARY KEY ("effectId", "modifierId"),
    CONSTRAINT "EffectModifier_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EffectModifier_modifierId_fkey" FOREIGN KEY ("modifierId") REFERENCES "Modifier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Modifier" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "target" JSONB NOT NULL,
    "value" INTEGER NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Attack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category" TEXT NOT NULL,
    "attackRoll" JSONB NOT NULL,
    "damage" JSONB NOT NULL,
    "critical" JSONB NOT NULL
);
