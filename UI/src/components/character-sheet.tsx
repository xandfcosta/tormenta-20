import {
	Backpack,
	BookOpen,
	Brain,
	Edit,
	Eye,
	Heart,
	Shield,
	Sparkles,
	Swords,
	Trash2,
	Zap,
} from "lucide-react";
import type { Character } from "@/components/character-sheet-manager";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CharacterSheetProps {
	character: Character;
	onClose: () => void;
}

const statIcons = {
	strength: Swords,
	dexterity: Zap,
	constitution: Heart,
	intelligence: Brain,
	wisdom: Eye,
	charisma: Sparkles,
};

function StatModifier(value: number) {
	const mod = Math.floor((value - 10) / 2);
	return mod >= 0 ? `+${mod}` : `${mod}`;
}

export function CharacterSheet({ character, onClose }: CharacterSheetProps) {
	return (
		<Dialog open onOpenChange={onClose}>
			<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<div className="flex items-start justify-between gap-4">
						<div className="flex-1">
							<DialogTitle className="text-3xl text-balance">
								{character.name}
							</DialogTitle>
							<div className="flex items-center gap-2 mt-2">
								<Badge variant="secondary">{character.race}</Badge>
								<Badge variant="outline">{character.class}</Badge>
								<Badge className="bg-primary/90">Level {character.level}</Badge>
								<Badge variant="secondary">{character.alignment}</Badge>
							</div>
						</div>
						<div className="flex gap-2">
							<Button variant="outline" size="icon">
								<Edit className="w-4 h-4" />
							</Button>
							<Button variant="outline" size="icon">
								<Trash2 className="w-4 h-4 text-destructive" />
							</Button>
						</div>
					</div>
				</DialogHeader>

				<div className="space-y-6">
					{/* Character Portrait */}
					<div className="relative aspect-5/2 rounded-lg overflow-hidden bg-secondary/50">
						<img
							src={character.image || "/placeholder.svg"}
							alt={character.name}
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Core Stats Grid */}
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
						{Object.entries({
							strength: character.strength,
							dexterity: character.dexterity,
							constitution: character.constitution,
							intelligence: character.intelligence,
							wisdom: character.wisdom,
							charisma: character.charisma,
						}).map(([stat, value]) => {
							const Icon = statIcons[stat as keyof typeof statIcons];
							return (
								<Card key={stat} className="p-3 text-center bg-card/50">
									<div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
										<Icon className="w-4 h-4" />
									</div>
									<div className="text-2xl font-bold">{value}</div>
									<div className="text-xs text-muted-foreground capitalize">
										{stat.slice(0, 3)}
									</div>
									<div className="text-sm font-semibold text-primary mt-1">
										{StatModifier(value)}
									</div>
								</Card>
							);
						})}
					</div>

					{/* Combat Stats */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
						<Card className="p-4 bg-card/50">
							<div className="flex items-center justify-between mb-2">
								<div className="flex items-center gap-2">
									<Heart className="w-5 h-5 text-destructive" />
									<span className="font-semibold">Hit Points</span>
								</div>
								<span className="text-lg font-bold">
									{character.hp}/{character.maxHp}
								</span>
							</div>
							<Progress
								value={(character.hp / character.maxHp) * 100}
								className="h-2"
							/>
						</Card>

						<Card className="p-4 bg-card/50 flex items-center justify-between">
							<div className="flex items-center gap-2">
								<Shield className="w-5 h-5 text-blue-400" />
								<span className="font-semibold">Armor Class</span>
							</div>
							<span className="text-2xl font-bold">{character.ac}</span>
						</Card>

						<Card className="p-4 bg-card/50 flex items-center justify-between">
							<div className="flex items-center gap-2">
								<Zap className="w-5 h-5 text-primary" />
								<span className="font-semibold">Initiative</span>
							</div>
							<span className="text-2xl font-bold">
								+{character.initiative}
							</span>
						</Card>
					</div>

					{/* Experience Bar */}
					<Card className="p-4 bg-card/50">
						<div className="flex items-center justify-between mb-2">
							<span className="font-semibold">Experience</span>
							<span className="text-sm text-muted-foreground">
								{character.experience} / {character.experienceToNext} XP
							</span>
						</div>
						<Progress
							value={(character.experience / character.experienceToNext) * 100}
							className="h-2"
						/>
					</Card>

					<Separator />

					{/* Tabbed Content */}
					<Tabs defaultValue="skills" className="w-full">
						<TabsList className="grid w-full grid-cols-4 bg-card">
							<TabsTrigger value="skills">Skills</TabsTrigger>
							<TabsTrigger value="equipment">Equipment</TabsTrigger>
							<TabsTrigger value="abilities">Abilities</TabsTrigger>
							<TabsTrigger value="bio">Bio</TabsTrigger>
						</TabsList>

						<TabsContent value="skills" className="space-y-3 mt-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
								{character.skills.map((skill) => (
									<Card
										key={skill.name}
										className="p-3 flex items-center justify-between bg-card/50"
									>
										<span className="font-medium">{skill.name}</span>
										<Badge variant="secondary" className="font-bold">
											+{skill.value}
										</Badge>
									</Card>
								))}
							</div>
						</TabsContent>

						<TabsContent value="equipment" className="space-y-3 mt-4">
							{character.equipment.map((item) => (
								<Card
									key={item.slot}
									className="p-3 flex items-center gap-3 bg-card/50"
								>
									<div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/20 border border-primary/30">
										<Backpack className="w-5 h-5 text-primary" />
									</div>
									<div className="flex-1">
										<div className="text-xs text-muted-foreground">
											{item.slot}
										</div>
										<div className="font-medium">{item.item}</div>
									</div>
								</Card>
							))}
						</TabsContent>

						<TabsContent value="abilities" className="space-y-3 mt-4">
							{character.abilities.map((ability, index) => (
								<Card
									key={index}
									className="p-3 flex items-center gap-3 bg-card/50"
								>
									<div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/20 border border-primary/30">
										<Sparkles className="w-4 h-4 text-primary" />
									</div>
									<span className="font-medium">{ability}</span>
								</Card>
							))}

							{character.spells && character.spells.length > 0 && (
								<>
									<Separator className="my-4" />
									<h4 className="font-semibold flex items-center gap-2">
										<BookOpen className="w-4 h-4" />
										Spells
									</h4>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
										{character.spells.map((spell, index) => (
											<Card key={index} className="p-3 bg-card/50">
												<span className="font-medium">{spell}</span>
											</Card>
										))}
									</div>
								</>
							)}
						</TabsContent>

						<TabsContent value="bio" className="space-y-4 mt-4">
							<div>
								<h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
									Background
								</h4>
								<p className="text-sm leading-relaxed">
									{character.background}
								</p>
							</div>

							<Separator />

							<div>
								<h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
									Proficiencies
								</h4>
								<div className="flex flex-wrap gap-2">
									{character.proficiencies.map((prof, index) => (
										<Badge key={index} variant="secondary">
											{prof}
										</Badge>
									))}
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</DialogContent>
		</Dialog>
	);
}
