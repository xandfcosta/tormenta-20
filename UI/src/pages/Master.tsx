import { Progress } from "@radix-ui/react-progress";
import {
	Activity,
	Crown,
	Edit,
	Heart,
	Plus,
	Search,
	Shield,
	Trash2,
	Zap,
} from "lucide-react";
import { useState } from "react";
import { type Character, useCharacters } from "@/api/characters";
import { CharacterSheet } from "@/components/character-sheet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function Master() {
	const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
		null,
	);
	const [searchQuery, setSearchQuery] = useState("");

	const { data: characters } = useCharacters();

	const filteredCharacters = characters.filter((character) => {
		return (
			character.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			character.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
			character.race.toLowerCase().includes(searchQuery.toLowerCase())
		);
	});

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between gap-4">
						<div className="flex items-center gap-3">
							<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/30">
								<Crown className="w-6 h-6 text-amber-500" />
							</div>
							<div>
								<h1 className="text-2xl font-bold text-balance">
									Game Master Panel
								</h1>
								<p className="text-sm text-muted-foreground">
									Manage all characters
								</p>
							</div>
						</div>

						<Button className="gap-2">
							<Plus className="w-4 h-4" />
							Add Character
						</Button>
					</div>
				</div>
			</header>

			<div className="container mx-auto px-4 py-6">
				{/* Search Bar */}
				<div className="mb-6">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
						<Input
							placeholder="Search characters by name, class, or race..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="pl-9 bg-card"
						/>
					</div>
				</div>

				{/* Stats Overview */}
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
					<Card className="p-4 bg-card/50">
						<div className="text-sm text-muted-foreground mb-1">
							Total Characters
						</div>
						<div className="text-2xl font-bold">{characters.length}</div>
					</Card>
					<Card className="p-4 bg-card/50">
						<div className="text-sm text-muted-foreground mb-1">
							Average Level
						</div>
						<div className="text-2xl font-bold">
							{Math.round(
								characters.reduce((sum, c) => sum + c.level, 0) /
									characters.length,
							)}
						</div>
					</Card>
					<Card className="p-4 bg-card/50">
						<div className="text-sm text-muted-foreground mb-1">Total HP</div>
						<div className="text-2xl font-bold">
							{characters.reduce((sum, c) => sum + c.hp, 0)}
						</div>
					</Card>
					<Card className="p-4 bg-card/50">
						<div className="text-sm text-muted-foreground mb-1">Active</div>
						<div className="text-2xl font-bold text-green-500">
							{characters.length}
						</div>
					</Card>
				</div>

				{/* Character Cards Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
					{filteredCharacters.map((character) => (
						<Card
							key={character.id}
							className="p-5 bg-card/50 hover:bg-card transition-colors"
						>
							<div className="flex gap-4 mb-4">
								{/* Character Portrait */}
								<div className="w-24 h-24 rounded-lg overflow-hidden bg-secondary/50 shrink-0">
									<img
										src={character.image || "/placeholder.svg"}
										alt={character.name}
										className="w-full h-full object-cover"
									/>
								</div>

								{/* Character Header */}
								<div className="flex-1 min-w-0">
									<h3 className="font-bold text-lg text-balance truncate mb-1">
										{character.name}
									</h3>
									<div className="flex flex-wrap items-center gap-1 mb-2">
										<Badge variant="secondary" className="text-xs">
											{character.race}
										</Badge>
										<Badge variant="outline" className="text-xs">
											{character.class}
										</Badge>
										<Badge className="bg-primary/90 text-xs">
											Lvl {character.level}
										</Badge>
									</div>

									{/* Quick Actions */}
									<div className="flex gap-2">
										<Button
											variant="outline"
											size="sm"
											className="h-7 text-xs bg-transparent"
											onClick={() => setSelectedCharacter(character)}
										>
											<Edit className="w-3 h-3 mr-1" />
											Edit
										</Button>
										<Button
											variant="outline"
											size="sm"
											className="h-7 text-xs text-destructive hover:text-destructive bg-transparent"
										>
											<Trash2 className="w-3 h-3" />
										</Button>
									</div>
								</div>
							</div>

							{/* Combat Stats Grid */}
							<div className="grid grid-cols-4 gap-2 mb-3">
								<div className="text-center p-2 rounded-md bg-background/50">
									<div className="flex items-center justify-center mb-1">
										<Heart className="w-3 h-3 text-destructive" />
									</div>
									<div className="text-xs text-muted-foreground">HP</div>
									<div className="text-sm font-bold">
										{character.hp}/{character.maxHp}
									</div>
								</div>

								<div className="text-center p-2 rounded-md bg-background/50">
									<div className="flex items-center justify-center mb-1">
										<Shield className="w-3 h-3 text-blue-400" />
									</div>
									<div className="text-xs text-muted-foreground">AC</div>
									<div className="text-sm font-bold">{character.ac}</div>
								</div>

								<div className="text-center p-2 rounded-md bg-background/50">
									<div className="flex items-center justify-center mb-1">
										<Zap className="w-3 h-3 text-primary" />
									</div>
									<div className="text-xs text-muted-foreground">Init</div>
									<div className="text-sm font-bold">
										+{character.initiative}
									</div>
								</div>

								<div className="text-center p-2 rounded-md bg-background/50">
									<div className="flex items-center justify-center mb-1">
										<Activity className="w-3 h-3 text-green-400" />
									</div>
									<div className="text-xs text-muted-foreground">Status</div>
									<div className="text-xs font-bold text-green-500">Active</div>
								</div>
							</div>

							{/* HP Progress Bar */}
							<div className="mb-3">
								<div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
									<span>Health</span>
									<span>
										{Math.round((character.hp / character.maxHp) * 100)}%
									</span>
								</div>
								<Progress
									value={(character.hp / character.maxHp) * 100}
									className="h-2"
								/>
							</div>

							{/* Core Stats */}
							<div className="grid grid-cols-6 gap-1">
								<div className="text-center p-1.5 rounded bg-background/50">
									<div className="text-xs text-muted-foreground">STR</div>
									<div className="text-sm font-bold">{character.strength}</div>
								</div>
								<div className="text-center p-1.5 rounded bg-background/50">
									<div className="text-xs text-muted-foreground">DEX</div>
									<div className="text-sm font-bold">{character.dexterity}</div>
								</div>
								<div className="text-center p-1.5 rounded bg-background/50">
									<div className="text-xs text-muted-foreground">CON</div>
									<div className="text-sm font-bold">
										{character.constitution}
									</div>
								</div>
								<div className="text-center p-1.5 rounded bg-background/50">
									<div className="text-xs text-muted-foreground">INT</div>
									<div className="text-sm font-bold">
										{character.intelligence}
									</div>
								</div>
								<div className="text-center p-1.5 rounded bg-background/50">
									<div className="text-xs text-muted-foreground">WIS</div>
									<div className="text-sm font-bold">{character.wisdom}</div>
								</div>
								<div className="text-center p-1.5 rounded bg-background/50">
									<div className="text-xs text-muted-foreground">CHA</div>
									<div className="text-sm font-bold">{character.charisma}</div>
								</div>
							</div>

							{/* Experience Bar */}
							<div className="mt-3">
								<div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
									<span>Experience</span>
									<span>
										{character.experience} / {character.experienceToNext}
									</span>
								</div>
								<Progress
									value={
										(character.experience / character.experienceToNext) * 100
									}
									className="h-1.5"
								/>
							</div>
						</Card>
					))}
				</div>

				{/* Empty State */}
				{filteredCharacters.length === 0 && (
					<Card className="p-12 text-center">
						<div className="flex flex-col items-center gap-2">
							<Search className="w-12 h-12 text-muted-foreground/50" />
							<h3 className="text-lg font-semibold">No characters found</h3>
							<p className="text-sm text-muted-foreground">
								Try adjusting your search
							</p>
						</div>
					</Card>
				)}
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
