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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Attributes" (
    "characterId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "strength" INTEGER NOT NULL,
    "dexterity" INTEGER NOT NULL,
    "constitution" INTEGER NOT NULL,
    "intelligence" INTEGER NOT NULL,
    "wisdom" INTEGER NOT NULL,
    "charisma" INTEGER NOT NULL,
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
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "characterId" INTEGER NOT NULL,
    "expertiseId" INTEGER NOT NULL,
    "trained" BOOLEAN NOT NULL DEFAULT false,
    "trainBonus" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "ExpertiseCharacter_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ExpertiseCharacter_expertiseId_fkey" FOREIGN KEY ("expertiseId") REFERENCES "Expertise" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Inventory" (
    "characterId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "load" JSONB NOT NULL,
    "tibares" INTEGER NOT NULL,
    CONSTRAINT "Inventory_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InventoryItem" (
    "inventoryId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,
    "isEquippable" BOOLEAN NOT NULL,
    "equipped" BOOLEAN NOT NULL,
    "passive" BOOLEAN NOT NULL,
    "attacks" JSONB NOT NULL,
    "modifiers" JSONB NOT NULL,
    CONSTRAINT "InventoryItem_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("characterId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ability" (
    "characterId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "passive" BOOLEAN NOT NULL,
    "manaCost" INTEGER NOT NULL,
    "attacks" JSONB NOT NULL,
    "modifiers" JSONB NOT NULL,
    CONSTRAINT "Ability_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Effect" (
    "characterId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sourceType" TEXT NOT NULL,
    "sourceId" INTEGER,
    "sourceName" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "duration" JSONB NOT NULL,
    "stacks" INTEGER NOT NULL,
    "modifiers" JSONB NOT NULL,
    "startedAt" DATETIME NOT NULL,
    CONSTRAINT "Effect_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
