import { Filter, Plus, Search, Shield, Sword, Users } from "lucide-react";
import { useState } from "react";
import { CharacterFilterPanel } from "@/components/character-filter-panel";
import { CharacterGrid } from "@/components/character-grid";
import { CharacterSheet } from "@/components/character-sheet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export interface Character {
	id: string;
	name: string;
	class: string;
	race: string;
	level: number;
	experience: number;
	experienceToNext: number;
	// Core Stats
	strength: number;
	dexterity: number;
	constitution: number;
	intelligence: number;
	wisdom: number;
	charisma: number;
	// Combat Stats
	hp: number;
	maxHp: number;
	ac: number;
	initiative: number;
	// Skills
	skills: { name: string; value: number }[];
	// Equipment
	equipment: { slot: string; item: string }[];
	// Character Info
	background: string;
	alignment: string;
	proficiencies: string[];
	spells?: string[];
	abilities: string[];
	image: string;
}

const mockCharacters: Character[] = [
	{
		id: "1",
		name: "Theron Frostblade",
		class: "Paladin",
		race: "Human",
		level: 10,
		experience: 48000,
		experienceToNext: 64000,
		strength: 18,
		dexterity: 12,
		constitution: 16,
		intelligence: 10,
		wisdom: 14,
		charisma: 16,
		hp: 95,
		maxHp: 95,
		ac: 19,
		initiative: 1,
		skills: [
			{ name: "Athletics", value: 8 },
			{ name: "Insight", value: 6 },
			{ name: "Persuasion", value: 7 },
			{ name: "Religion", value: 4 },
		],
		equipment: [
			{ slot: "Main Hand", item: "Longsword +2" },
			{ slot: "Off Hand", item: "Shield of Faith" },
			{ slot: "Armor", item: "Plate Armor" },
			{ slot: "Accessory", item: "Amulet of Health" },
		],
		background: "Noble",
		alignment: "Lawful Good",
		proficiencies: [
			"All Armor",
			"All Shields",
			"Simple Weapons",
			"Martial Weapons",
		],
		spells: ["Cure Wounds", "Bless", "Shield of Faith", "Divine Smite"],
		abilities: [
			"Divine Sense",
			"Lay on Hands",
			"Fighting Style: Defense",
			"Divine Health",
		],
		image: "/ice-wizard-blue-frost-magic-character.jpg",
	},
	{
		id: "2",
		name: "Lyra Flameheart",
		class: "Wizard",
		race: "Elf",
		level: 8,
		experience: 34000,
		experienceToNext: 48000,
		strength: 8,
		dexterity: 14,
		constitution: 12,
		intelligence: 20,
		wisdom: 13,
		charisma: 10,
		hp: 48,
		maxHp: 48,
		ac: 13,
		initiative: 2,
		skills: [
			{ name: "Arcana", value: 9 },
			{ name: "History", value: 9 },
			{ name: "Investigation", value: 9 },
			{ name: "Perception", value: 5 },
		],
		equipment: [
			{ slot: "Main Hand", item: "Staff of Fire" },
			{ slot: "Armor", item: "Robe of the Archmagi" },
			{ slot: "Accessory", item: "Ring of Protection" },
		],
		background: "Sage",
		alignment: "Neutral Good",
		proficiencies: [
			"Daggers",
			"Darts",
			"Slings",
			"Quarterstaffs",
			"Light Crossbows",
		],
		spells: [
			"Fireball",
			"Counterspell",
			"Haste",
			"Lightning Bolt",
			"Misty Step",
			"Magic Missile",
		],
		abilities: [
			"Arcane Recovery",
			"Sculpt Spells",
			"Potent Cantrip",
			"Empowered Evocation",
		],
		image: "/fire-mage-with-flames-fantasy-character.jpg",
	},
	{
		id: "3",
		name: "Kael Shadowstep",
		class: "Rogue",
		race: "Halfling",
		level: 6,
		experience: 14000,
		experienceToNext: 23000,
		strength: 10,
		dexterity: 18,
		constitution: 14,
		intelligence: 12,
		wisdom: 13,
		charisma: 14,
		hp: 42,
		maxHp: 42,
		ac: 16,
		initiative: 4,
		skills: [
			{ name: "Acrobatics", value: 8 },
			{ name: "Stealth", value: 12 },
			{ name: "Sleight of Hand", value: 8 },
			{ name: "Deception", value: 6 },
			{ name: "Perception", value: 5 },
		],
		equipment: [
			{ slot: "Main Hand", item: "Dagger +1" },
			{ slot: "Off Hand", item: "Dagger +1" },
			{ slot: "Armor", item: "Studded Leather Armor" },
			{ slot: "Accessory", item: "Cloak of Elvenkind" },
		],
		background: "Criminal",
		alignment: "Chaotic Neutral",
		proficiencies: [
			"Simple Weapons",
			"Hand Crossbows",
			"Longswords",
			"Rapiers",
			"Shortswords",
			"Thieves' Tools",
		],
		abilities: [
			"Sneak Attack (3d6)",
			"Cunning Action",
			"Uncanny Dodge",
			"Evasion",
			"Expertise",
		],
		image: "/hooded-assassin-dark-shadows-rogue.jpg",
	},
];

export function CharacterSheetManager() {
	const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
		null,
	);
	const [searchQuery, setSearchQuery] = useState("");
	const [showFilters, setShowFilters] = useState(false);
	const [filters, setFilters] = useState({
		classes: [] as string[],
		levelMin: 1,
		levelMax: 20,
	});

	const filteredCharacters = mockCharacters.filter((character) => {
		const matchesSearch =
			character.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			character.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
			character.race.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesClass =
			filters.classes.length === 0 || filters.classes.includes(character.class);
		const matchesLevel =
			character.level >= filters.levelMin &&
			character.level <= filters.levelMax;

		return matchesSearch && matchesClass && matchesLevel;
	});

	const getStatsByClass = (className: string) => {
		return mockCharacters.filter((c) => c.class === className).length;
	};

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between gap-4">
						<div className="flex items-center gap-3">
							<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 border border-primary/30">
								<Users className="w-6 h-6 text-primary" />
							</div>
							<div>
								<h1 className="text-2xl font-bold text-balance">
									Character Registry
								</h1>
								<p className="text-sm text-muted-foreground">
									Manage your heroes
								</p>
							</div>
						</div>

						<Button className="gap-2">
							<Plus className="w-4 h-4" />
							New Character
						</Button>
					</div>
				</div>
			</header>

			<div className="container mx-auto px-4 py-6">
				{/* Search and Filters */}
				<div className="mb-6 space-y-4">
					<div className="flex gap-3">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
							<Input
								placeholder="Search characters by name, class, or race..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-9 bg-card"
							/>
						</div>
						<Button
							variant={showFilters ? "secondary" : "outline"}
							size="icon"
							onClick={() => setShowFilters(!showFilters)}
						>
							<Filter className="w-4 h-4" />
						</Button>
					</div>

					{showFilters && (
						<CharacterFilterPanel filters={filters} onChange={setFilters} />
					)}

					{/* Stats Overview */}
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
						<Card className="p-4 bg-card/50">
							<div className="flex items-center gap-2 mb-1">
								<Users className="w-4 h-4 text-primary" />
								<span className="text-sm text-muted-foreground">Total</span>
							</div>
							<div className="text-2xl font-bold">{mockCharacters.length}</div>
						</Card>
						<Card className="p-4 bg-card/50">
							<div className="flex items-center gap-2 mb-1">
								<Sword className="w-4 h-4 text-destructive" />
								<span className="text-sm text-muted-foreground">Fighters</span>
							</div>
							<div className="text-2xl font-bold">
								{getStatsByClass("Paladin") + getStatsByClass("Rogue")}
							</div>
						</Card>
						<Card className="p-4 bg-card/50">
							<div className="flex items-center gap-2 mb-1">
								<Shield className="w-4 h-4 text-blue-400" />
								<span className="text-sm text-muted-foreground">Casters</span>
							</div>
							<div className="text-2xl font-bold">
								{getStatsByClass("Wizard")}
							</div>
						</Card>
						<Card className="p-4 bg-card/50">
							<div className="flex items-center gap-2 mb-1">
								<span className="text-sm text-muted-foreground">Avg Level</span>
							</div>
							<div className="text-2xl font-bold">
								{Math.round(
									mockCharacters.reduce((sum, c) => sum + c.level, 0) /
										mockCharacters.length,
								)}
							</div>
						</Card>
					</div>

					{/* Character List */}
					{filteredCharacters.length === 0 ? (
						<Card className="p-12 text-center">
							<div className="flex flex-col items-center gap-2">
								<Search className="w-12 h-12 text-muted-foreground/50" />
								<h3 className="text-lg font-semibold">No characters found</h3>
								<p className="text-sm text-muted-foreground">
									Try adjusting your search or filters
								</p>
							</div>
						</Card>
					) : (
						<CharacterGrid
							characters={filteredCharacters}
							onSelectCharacter={setSelectedCharacter}
						/>
					)}
				</div>
			</div>

			{/* Character Sheet Modal */}
			{selectedCharacter && (
				<CharacterSheet
					character={selectedCharacter}
					onClose={() => setSelectedCharacter(null)}
				/>
			)}
		</div>
	);
}
