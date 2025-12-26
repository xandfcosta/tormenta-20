import {
	Activity,
	Backpack,
	BookOpen,
	Brain,
	CheckCircle2,
	ChevronDown,
	Circle,
	Coins,
	Eye,
	Heart,
	Minus,
	Plus,
	Shield,
	Sparkles,
	Swords,
	Users,
	Weight,
	Zap,
} from "lucide-react";
import { useState } from "react";
import { getCharacterImage, useCharacter, useCharacters } from "@/api/characters";
import type { Character } from "@/components/character-sheet-manager";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PlayerViewProps {
	characterId: number;
}

const statIcons = {
	strength: Swords,
	dexterity: Zap,
	constitution: Heart,
	intelligence: Brain,
	wisdom: Eye,
	charisma: Sparkles,
};

export function PlayerView({ characterId }: PlayerViewProps) {
	const [showParty, setShowParty] = useState(true);
	const { data: character } = useCharacter(characterId);
	const { data: characters } = useCharacters();

	if (!character) {
		return <Skeleton className="size-full" />;
	}

	return (
		<div className="min-h-screen bg-background">
			<header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
				<div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
					<div className="flex items-center justify-between gap-2 sm:gap-4">
						<div className="flex items-center gap-2 sm:gap-3 min-w-0">
							<div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/20 border border-primary/30 shrink-0">
								<Users className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
							</div>
							<div className="min-w-0">
								<h1 className="text-lg sm:text-2xl font-bold text-balance truncate">My Character</h1>
								<p className="text-xs sm:text-sm text-muted-foreground truncate">{character.name}</p>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-4 sm:space-y-6">
				<Card className="p-4 sm:p-6 bg-card/50">
					<div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
						{/* Character Portrait */}
						<div className="w-full sm:w-48 lg:w-64 aspect-3/4 rounded-lg overflow-hidden bg-secondary/50 shrink-0 mx-auto lg:mx-0">
							<img
								src={getCharacterImage(character.id) || "/placeholder.svg"}
								alt={character.name}
								className="w-full h-full object-cover"
							/>
						</div>

						{/* Character Info */}
						<div className="flex-1 space-y-3 sm:space-y-4">
							<div>
								<h2 className="text-2xl sm:text-3xl font-bold text-balance mb-2">{character.name}</h2>
								<div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
									{character.races.map((race) => (
										<Badge key={race} variant="secondary" className="text-xs">
											{race}
										</Badge>
									))}
									{character.classes.map((cls) => (
										<Badge key={cls} variant="outline" className="text-xs">
											{cls}
										</Badge>
									))}
									<Badge className="bg-primary/90 text-xs">Level {character.level}</Badge>
								</div>
							</div>

							<div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
								{character &&
									Object.entries(character.attributes).map(([stat, value]) => {
										const Icon = statIcons[stat as keyof typeof statIcons];
										return (
											<Card key={stat} className="p-2 sm:p-3 text-center bg-background/50">
												<div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
													<Icon className="w-3 h-3 sm:w-4 sm:h-4" />
												</div>
												<div className="flex items-center justify-center gap-1 mb-1">
													<Button variant="ghost" size="sm" className="h-6 w-6 p-0">
														<Minus className="w-3 h-3" />
													</Button>
													<div className="text-xl sm:text-2xl font-bold w-8">{value}</div>
													<Button variant="ghost" size="sm" className="h-6 w-6 p-0">
														<Plus className="w-3 h-3" />
													</Button>
												</div>
												<div className="text-[10px] sm:text-xs text-muted-foreground capitalize">
													{stat.slice(0, 3)}
												</div>
											</Card>
										);
									})}
							</div>

							<div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
								<Card className="p-2 sm:p-3 bg-background/50">
									<div className="flex items-center justify-between mb-1 sm:mb-2">
										<div className="flex items-center gap-1 sm:gap-2">
											<Heart className="w-3 h-3 sm:w-4 sm:h-4 text-destructive" />
											<span className="text-xs sm:text-sm font-semibold">HP</span>
										</div>
										<span className="text-xs sm:text-sm font-bold">
											{character.hp.current}/{character.hp.max}
										</span>
									</div>
									<Progress value={(character.hp.current / character.hp.max) * 100} className="h-1.5 sm:h-2" />
								</Card>

								<Card className="p-2 sm:p-3 bg-background/50">
									<div className="flex items-center justify-between mb-1 sm:mb-2">
										<div className="flex items-center gap-1 sm:gap-2">
											<Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
											<span className="text-xs sm:text-sm font-semibold">Mana</span>
										</div>
										<span className="text-xs sm:text-sm font-bold">
											{character.mp.current}/{character.mp.max}
										</span>
									</div>
									<Progress value={(character.mp.current / character.mp.max) * 100} className="h-1.5 sm:h-2" />
								</Card>

								<Card className="p-2 sm:p-3 bg-background/50 flex items-center justify-between">
									<div className="flex items-center gap-1 sm:gap-2">
										<Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
										<span className="text-xs sm:text-sm font-semibold">Defense</span>
									</div>
									<span className="text-lg sm:text-xl font-bold">{character.defense}</span>
								</Card>

								<Card className="p-2 sm:p-3 bg-background/50 flex items-center justify-between">
									<div className="flex items-center gap-1 sm:gap-2">
										<Coins className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500" />
										<span className="text-xs sm:text-sm font-semibold">Tibares</span>
									</div>
									<span className="text-lg sm:text-xl font-bold">{character.inventory.tibares}</span>
								</Card>
							</div>

							{/* Experience Bar */}
							<Card className="p-2 sm:p-3 bg-background/50">
								<div className="flex items-center justify-between mb-1 sm:mb-2">
									<span className="text-xs sm:text-sm font-semibold">Experience</span>
									<span className="text-[10px] sm:text-xs text-muted-foreground">
										{character.experience.toLocaleString()} XP
									</span>
								</div>
							</Card>
						</div>
					</div>
				</Card>

				<Card className="p-3 sm:p-6 bg-card/50">
					<Tabs defaultValue="attacks" className="w-full">
						<TabsList className="grid w-full grid-cols-5 bg-background/50 h-auto">
							<TabsTrigger value="attacks" className="text-xs sm:text-sm py-2">
								Habilidaddes
							</TabsTrigger>
							<TabsTrigger value="pericies" className="text-xs sm:text-sm py-2">
								Perícias
							</TabsTrigger>
							<TabsTrigger value="equipment" className="text-xs sm:text-sm py-2">
								Inventário
							</TabsTrigger>
							<TabsTrigger value="bio" className="text-xs sm:text-sm py-2">
								Bio
							</TabsTrigger>
						</TabsList>

						<TabsContent value="attacks" className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
							<div className="space-y-2 sm:space-y-3">
								{character.abilities.map((ability) => (
									<Card key={ability.id} className="p-3 sm:p-4 bg-background/50">
										<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 sm:mb-3">
											<div className="flex-1">
												<h4 className="font-semibold text-base sm:text-lg">{ability.name}</h4>
												<div className="flex gap-0.5">
													{ability.attacks.map((a) => (
														<p className="text-xs sm:text-sm text-muted-foreground mt-1">{a.damage}</p>
													))}
												</div>
											</div>
											<Badge variant="secondary" className="capitalize text-xs w-fit">
												{attack.source}
											</Badge>
										</div>

										<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
											<div className="flex flex-col gap-0.5 sm:gap-1">
												<span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
													Attack
												</span>
												<span className="text-lg sm:text-xl font-bold text-primary">+{attack.bonus}</span>
											</div>

											<div className="flex flex-col gap-0.5 sm:gap-1">
												<span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
													Damage
												</span>
												<span className="text-sm sm:text-lg font-semibold">{attack.damage}</span>
											</div>

											<div className="flex flex-col gap-0.5 sm:gap-1">
												<span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
													Critical
												</span>
												<span className="text-sm sm:text-lg font-semibold">
													{attack.critic.minDiceValue}-20 (×{attack.critic.multiplier})
												</span>
											</div>

											<div className="flex flex-col gap-0.5 sm:gap-1">
												<span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
													Range
												</span>
												<span className="text-sm sm:text-lg font-semibold">{attack.range}</span>
											</div>
										</div>

										{attack.manaCost && attack.manaCost > 0 && (
											<div className="mt-2 sm:mt-3 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
												<Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
												<span>Mana Cost: {attack.manaCost}</span>
											</div>
										)}

										{attack.quantity && attack.quantity > 0 && (
											<div className="mt-2 sm:mt-3 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
												<span>Quantity: {attack.quantity}</span>
											</div>
										)}
									</Card>
								))}
							</div>
						</TabsContent>

						<TabsContent value="pericies" className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
							<div className="space-y-2">
								{character.pericies.map((pericia, index) => (
									<Card key={index} className="p-3 sm:p-4 bg-background/50">
										<div className="flex items-start justify-between gap-2 mb-2">
											<div className="flex-1">
												<div className="flex items-center gap-2">
													<h4 className="font-semibold text-sm sm:text-base">{pericia.name}</h4>
													<Button
														variant="ghost"
														size="sm"
														className="h-6 w-6 p-0"
														onClick={() => togglePericiaTraining(index)}
													>
														{pericia.trained ? (
															<CheckCircle2 className="w-4 h-4 text-primary" />
														) : (
															<Circle className="w-4 h-4 text-muted-foreground" />
														)}
													</Button>
												</div>
												<p className="text-xs text-muted-foreground capitalize">{pericia.attribute}</p>
											</div>
											<div className="flex items-center gap-2">
												{pericia.trained && (
													<Badge variant="secondary" className="text-xs">
														Trained
													</Badge>
												)}
												<Badge className="text-sm font-bold">
													{pericia.total >= 0 ? "+" : ""}
													{pericia.total}
												</Badge>
											</div>
										</div>

										<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
											<div className="space-y-1">
												<span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
													Bonus
												</span>
												<div className="flex items-center gap-1">
													<Button
														variant="ghost"
														size="sm"
														className="h-6 w-6 p-0"
														onClick={() => updatePericia(index, "bonus", -1)}
													>
														<Minus className="w-3 h-3" />
													</Button>
													<span className="text-sm font-semibold w-8 text-center">{pericia.bonus}</span>
													<Button
														variant="ghost"
														size="sm"
														className="h-6 w-6 p-0"
														onClick={() => updatePericia(index, "bonus", 1)}
													>
														<Plus className="w-3 h-3" />
													</Button>
												</div>
											</div>

											<div className="space-y-1">
												<span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
													Train Bonus
												</span>
												<div className="flex items-center gap-1">
													<Button
														variant="ghost"
														size="sm"
														className="h-6 w-6 p-0"
														onClick={() => updatePericia(index, "trainBonus", -1)}
													>
														<Minus className="w-3 h-3" />
													</Button>
													<span className="text-sm font-semibold w-8 text-center">{pericia.trainBonus}</span>
													<Button
														variant="ghost"
														size="sm"
														className="h-6 w-6 p-0"
														onClick={() => updatePericia(index, "trainBonus", 1)}
													>
														<Plus className="w-3 h-3" />
													</Button>
												</div>
											</div>

											<div className="space-y-1">
												<span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
													Others
												</span>
												<div className="flex items-center gap-1">
													<Button
														variant="ghost"
														size="sm"
														className="h-6 w-6 p-0"
														onClick={() => updatePericia(index, "others", -1)}
													>
														<Minus className="w-3 h-3" />
													</Button>
													<span className="text-sm font-semibold w-8 text-center">{pericia.others}</span>
													<Button
														variant="ghost"
														size="sm"
														className="h-6 w-6 p-0"
														onClick={() => updatePericia(index, "others", 1)}
													>
														<Plus className="w-3 h-3" />
													</Button>
												</div>
											</div>

											<div className="space-y-1">
												<span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
													Attribute
												</span>
												<div className="text-sm font-semibold">
													{StatModifier(character.attributes[pericia.attribute as keyof Character["attributes"]])}
												</div>
											</div>
										</div>
									</Card>
								))}
							</div>
						</TabsContent>

						<TabsContent value="equipment" className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
							<Card className="p-3 sm:p-4 bg-background/50">
								<div className="flex items-center justify-between mb-3">
									<div className="flex items-center gap-2">
										<Coins className="w-4 h-4 text-amber-400" />
										<span className="text-sm font-semibold">Ibares</span>
									</div>
									<span className="text-lg font-bold text-amber-400">{character.inventory.ibares}</span>
								</div>
							</Card>

							<Card className="p-3 sm:p-4 bg-background/50">
								<div className="flex items-center justify-between mb-2">
									<div className="flex items-center gap-2">
										<Weight className="w-4 h-4 text-muted-foreground" />
										<span className="text-sm font-semibold">Encumbrance</span>
									</div>
									<span className="text-sm font-bold">
										{character.inventory.load.used}/{character.inventory.load.limit}
									</span>
								</div>
								<Progress
									value={(character.inventory.load.used / character.inventory.load.limit) * 100}
									className="h-2"
								/>
							</Card>

							{character.inventory.items.map((item) => (
								<Card key={item.id} className="p-2.5 sm:p-3 bg-background/50">
									<div className="flex items-start gap-2 sm:gap-3">
										<div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-primary/20 border border-primary/30 flex-shrink-0">
											<Backpack className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-2">
												<div className="font-medium text-sm sm:text-base truncate">{item.name}</div>
												{item.equipped && (
													<Badge variant="default" className="text-xs">
														Equipped
													</Badge>
												)}
											</div>
											<div className="text-[10px] sm:text-xs text-muted-foreground">
												Quantity: {item.quantity} | Type: {item.type}
											</div>
											{item.description && <p className="text-xs text-muted-foreground mt-1">{item.description}</p>}
										</div>
										<Badge variant="secondary" className="text-xs flex-shrink-0">
											Slot {item.slot}
										</Badge>
									</div>
								</Card>
							))}
						</TabsContent>

						<TabsContent value="abilities" className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
							<div className="space-y-3 sm:space-y-4">
								{character.abilities.filter((a) => a.type === "race").length > 0 && (
									<div>
										<h4 className="font-semibold flex items-center gap-2 mb-2 sm:mb-3 text-sm sm:text-base">
											<Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
											Race Abilities
										</h4>
										<div className="space-y-1.5 sm:space-y-2">
											{character.abilities
												.filter((a) => a.type === "race")
												.map((ability, index) => (
													<Card key={index} className="p-2.5 sm:p-3 bg-background/50">
														<div className="flex items-start justify-between gap-2">
															<div className="flex-1">
																<div className="font-medium text-sm sm:text-base">{ability.name}</div>
																<div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
																	{ability.description}
																</div>
															</div>
															{ability.passive && (
																<Badge variant="outline" className="text-xs">
																	Passive
																</Badge>
															)}
														</div>
														{ability.manaCost !== undefined && ability.manaCost > 0 && (
															<div className="mt-2 text-xs text-muted-foreground">Mana Cost: {ability.manaCost}</div>
														)}
													</Card>
												))}
										</div>
									</div>
								)}

								{character.abilities.filter((a) => a.type === "origin").length > 0 && (
									<>
										<Separator />
										<div>
											<h4 className="font-semibold flex items-center gap-2 mb-2 sm:mb-3 text-sm sm:text-base">
												<BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
												Origin Abilities
											</h4>
											<div className="space-y-1.5 sm:space-y-2">
												{character.abilities
													.filter((a) => a.type === "origin")
													.map((ability, index) => (
														<Card key={index} className="p-2.5 sm:p-3 bg-background/50">
															<div className="flex items-start justify-between gap-2">
																<div className="flex-1">
																	<div className="font-medium text-sm sm:text-base">{ability.name}</div>
																	<div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
																		{ability.description}
																	</div>
																</div>
																{ability.passive && (
																	<Badge variant="outline" className="text-xs">
																		Passive
																	</Badge>
																)}
															</div>
															{ability.manaCost !== undefined && ability.manaCost > 0 && (
																<div className="mt-2 text-xs text-muted-foreground">Mana Cost: {ability.manaCost}</div>
															)}
														</Card>
													))}
											</div>
										</div>
									</>
								)}

								{character.abilities.filter((a) => a.type === "class").length > 0 && (
									<>
										<Separator />
										<div>
											<h4 className="font-semibold flex items-center gap-2 mb-2 sm:mb-3 text-sm sm:text-base">
												<Swords className="w-3 h-3 sm:w-4 sm:h-4" />
												Class Abilities
											</h4>
											<div className="space-y-1.5 sm:space-y-2">
												{character.abilities
													.filter((a) => a.type === "class")
													.map((ability, index) => (
														<Card key={index} className="p-2.5 sm:p-3 bg-background/50">
															<div className="flex items-start justify-between gap-2">
																<div className="flex-1">
																	<div className="font-medium text-sm sm:text-base">{ability.name}</div>
																	<div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
																		{ability.description}
																	</div>
																</div>
																{ability.passive && (
																	<Badge variant="outline" className="text-xs">
																		Passive
																	</Badge>
																)}
															</div>
															{ability.manaCost !== undefined && ability.manaCost > 0 && (
																<div className="mt-2 text-xs text-muted-foreground">Mana Cost: {ability.manaCost}</div>
															)}
														</Card>
													))}
											</div>
										</div>
									</>
								)}

								{character.abilities.filter((a) => a.type === "power").length > 0 && (
									<>
										<Separator />
										<div>
											<h4 className="font-semibold flex items-center gap-2 mb-2 sm:mb-3 text-sm sm:text-base">
												<Zap className="w-3 h-3 sm:w-4 sm:h-4" />
												Powers
											</h4>
											<div className="space-y-1.5 sm:space-y-2">
												{character.abilities
													.filter((a) => a.type === "power")
													.map((power, index) => (
														<Card key={index} className="p-2.5 sm:p-3 bg-background/50">
															<div className="flex items-start justify-between gap-2">
																<div className="flex-1">
																	<div className="font-medium text-sm sm:text-base">{power.name}</div>
																	<div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
																		{power.description}
																	</div>
																</div>
																{power.passive && (
																	<Badge variant="outline" className="text-xs">
																		Passive
																	</Badge>
																)}
															</div>
															{power.manaCost !== undefined && power.manaCost > 0 && (
																<div className="mt-2 text-xs text-muted-foreground">Mana Cost: {power.manaCost}</div>
															)}
														</Card>
													))}
											</div>
										</div>
									</>
								)}

								{character.magic && character.magic.spells.length > 0 && (
									<>
										<Separator />
										<div>
											<h4 className="font-semibold flex items-center gap-2 mb-2 sm:mb-3 text-sm sm:text-base">
												<BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
												Spells
											</h4>
											<div className="grid grid-cols-1 gap-2 sm:gap-3">
												{character.magic.spells.map((spell, index) => (
													<Card key={index} className="p-2.5 sm:p-3 bg-background/50">
														<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-1 sm:mb-2">
															<div className="font-medium text-sm sm:text-base">{spell.name}</div>
															<Badge variant="outline" className="text-[10px] sm:text-xs w-fit">
																{spell.school}
															</Badge>
														</div>
														<p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2 leading-relaxed">
															{spell.effect}
														</p>
														<div className="grid grid-cols-2 gap-1 sm:gap-2 text-[10px] sm:text-xs">
															<div>
																<span className="text-muted-foreground">Range:</span> {spell.range}ft
															</div>
															{spell.duration > 0 && (
																<div>
																	<span className="text-muted-foreground">Duration:</span> {spell.duration} rounds
																</div>
															)}
															{spell.area > 0 && (
																<div>
																	<span className="text-muted-foreground">Area:</span> {spell.area}ft
																</div>
															)}
															{spell.resistence && (
																<div>
																	<span className="text-muted-foreground">Save:</span> {spell.resistence}
																</div>
															)}
														</div>
													</Card>
												))}
											</div>
										</div>
									</>
								)}
							</div>
						</TabsContent>

						<TabsContent value="bio" className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
							<div>
								<h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">
									Description
								</h4>
								<p className="text-xs sm:text-sm leading-relaxed">{character.description}</p>
							</div>

							{character.notes && (
								<>
									<Separator />
									<div>
										<h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">
											Notes
										</h4>
										<p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{character.notes}</p>
									</div>
								</>
							)}

							<Separator />

							<div>
								<h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">
									Origin
								</h4>
								<p className="text-xs sm:text-sm leading-relaxed">{character.origin}</p>
							</div>

							{character.divinity && (
								<>
									<Separator />
									<div>
										<h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">
											Divinity
										</h4>
										<p className="text-xs sm:text-sm leading-relaxed">{character.divinity}</p>
									</div>
								</>
							)}

							<Separator />

							<div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
								<div>
									<h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-1">
										Size
									</h4>
									<p>{character.size}</p>
								</div>
								<div>
									<h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-1">
										Movement
									</h4>
									<p>{character.movement}ft</p>
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</Card>

				<div>
					<div className="flex items-center justify-between mb-3 sm:mb-4">
						<h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
							<Users className="w-4 h-4 sm:w-5 sm:h-5" />
							Party Members
						</h3>
						<Button variant="ghost" size="sm" onClick={() => setShowParty(!showParty)} className="sm:hidden">
							<ChevronDown className={`w-4 h-4 transition-transform ${showParty ? "rotate-180" : ""}`} />
						</Button>
					</div>

					<div
						className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 ${!showParty ? "hidden sm:grid" : ""}`}
					>
						{characters
							?.filter((c) => c.id !== character.id)
							.map((character) => (
								<Card key={character.id} className="p-3 sm:p-4 bg-card/50 hover:bg-card transition-colors">
									<div className="flex gap-3 sm:gap-4">
										{/* Character Portrait */}
										<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-secondary/50 shrink-0">
											<img
												src={getCharacterImage(character.id) || "/placeholder.svg"}
												alt={character.name}
												className="w-full h-full object-cover"
											/>
										</div>

										{/* Character Info */}
										<div className="flex-1 min-w-0">
											<h4 className="font-bold text-sm sm:text-base text-balance truncate">{character.name}</h4>
											<div className="flex items-center gap-1 mb-1.5 sm:mb-2">
												<Badge variant="secondary" className="text-[10px] sm:text-xs">
													{character.classes[0]}
												</Badge>
												<Badge variant="outline" className="text-[10px] sm:text-xs">
													Lvl {character.level}
												</Badge>
											</div>

											{/* Key Stats */}
											<div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
												<div className="flex items-center gap-1">
													<Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-destructive" />
													<span className="font-semibold">
														{character.hp.current}/{character.hp.max}
													</span>
												</div>
												<div className="flex items-center gap-1">
													<Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
													<span className="font-semibold">
														{character.mp.current}/{character.mp.max}
													</span>
												</div>
												<div className="flex items-center gap-1">
													<Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-400" />
													<span className="font-semibold capitalize">{"{Status placeholder}"}</span>
												</div>
											</div>
										</div>
									</div>

									{/* HP Bar */}
									<Progress
										value={(character.hp.current / character.hp.max) * 100}
										className="h-1 sm:h-1.5 mt-2 sm:mt-3"
									/>
								</Card>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
