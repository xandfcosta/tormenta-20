import {
	Backpack,
	ChevronDown,
	ChevronUp,
	Flame,
	Heart,
	Minus,
	Plus,
	Shield,
	Sparkles,
	Sword,
	TrendingUp,
	User,
	Zap,
} from "lucide-react";
import { useState } from "react";
import { getCharacterImage, type TAttributeKeys, useCharacter, useCharacters } from "@/api/characters";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CharacterPanel } from "@/pages/player/components/CharacterPanel";
import { getModifiersForAttribute } from "@/pages/player/modifiers";

interface PlayerViewProps {
	characterId: number;
}

export function PlayerView({ characterId }: PlayerViewProps) {
	const { data: character } = useCharacter(characterId);
	const { data: characters } = useCharacters();

	const [activeTab, setActiveTab] = useState<"stats" | "abilities" | "inventory" | "party">("stats");
	const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

	const getAttributeModifier = (value: number) => Math.floor((value - 10) / 2);

	const toggle = (key: string) => {
		setExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));
	};

	if (!character) {
		return <Skeleton className="size-full" />;
	}

	return (
		<div className="h-screen flex flex-col bg-background overflow-hidden">
			<div className="flex-none game-panel border-b">
				<div className="flex">
					{[
						{ id: "stats", icon: User, label: "Stats" },
						{ id: "abilities", icon: Flame, label: "Abilities" },
						{ id: "inventory", icon: Backpack, label: "Inventory" },
						{ id: "party", icon: Shield, label: "Party" },
					].map((tab) => (
						<button
							type="button"
							key={tab.id}
							onClick={() => setActiveTab(tab.id as typeof activeTab)}
							className={`flex-1 flex items-center justify-center gap-2 py-3 px-2 text-xs md:text-sm font-semibold uppercase tracking-wider transition-all border-b-2 ${
								activeTab === tab.id
									? "border-primary text-primary bg-primary/5"
									: "border-transparent text-muted-foreground hover:text-foreground hover:bg-card/30"
							}`}
						>
							<tab.icon className="w-4 h-4" />
							<span className="hidden sm:inline">{tab.label}</span>
						</button>
					))}
				</div>
			</div>

			<div className="flex-1 overflow-y-auto p-2 md:p-3 space-y-2 md:space-y-3">
				{activeTab === "stats" && (
					<>
						{/* Attributes Grid */}
						<div className="game-panel rounded p-2 md:p-3">
							<h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 md:mb-3">
								Core Attributes
							</h3>
							<div className="grid grid-cols-3 md:grid-cols-6 gap-2">
								{Object.entries(character.attributes).map(([key, value]) => {
									const modifier = getAttributeModifier(value);
									const modifiers = getModifiersForAttribute(character, key as TAttributeKeys);
									const hasModifiers = modifiers.length > 0;

									return (
										<div key={key} className="text-center">
											<p className="text-[10px] uppercase font-bold text-primary mb-1 tracking-widest">
												{key.slice(0, 3)}
											</p>
											<div className="game-panel rounded p-2 space-y-1">
												<div className="flex items-center justify-center gap-0.5">
													<Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-primary/20">
														<Minus className="w-3 h-3" />
													</Button>
													<Button
														variant="ghost"
														className="h-auto p-0 text-2xl font-bold hover:bg-transparent min-w-12"
														onClick={() => hasModifiers && toggle(`attr-${key}`)}
													>
														{value}
														{hasModifiers && <TrendingUp className="w-3 h-3 ml-0.5 text-accent" />}
													</Button>
													<Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-primary/20">
														<Plus className="w-3 h-3" />
													</Button>
												</div>
												<Badge
													variant={modifier >= 0 ? "default" : "destructive"}
													className="text-[10px] w-full justify-center"
												>
													{modifier >= 0 ? "+" : ""}
													{modifier}
												</Badge>

												{expandedItems[`attr-${key}`] && hasModifiers && (
													<div className="mt-2 pt-2 border-t border-border/50 space-y-1">
														{modifiers.map((mod, idx) => (
															<div
																key={`${mod.source}.${idx}`}
																className="text-[9px] flex items-center justify-between gap-1"
															>
																<span className="truncate text-muted-foreground">{mod.source}</span>
																<Badge variant="secondary" className="text-[8px]">
																	{mod.modifier.value >= 0 ? "+" : ""}
																	{mod.modifier.value}
																</Badge>
															</div>
														))}
													</div>
												)}
											</div>
										</div>
									);
								})}
							</div>
						</div>

						{/* Expertises List */}
						<div className="game-panel rounded p-2 md:p-3">
							<h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 md:mb-3">
								Expertises
							</h3>
							<div className="grid gap-1.5 md:grid-cols-2">
								{character.expertisies.map((exp, idx) => {
									const attrMod = getAttributeModifier(character.attributes[exp.attribute]);
									const total = attrMod + (exp.trained ? exp.trainBonus : 0);

									return (
										<div
											key={`${exp.name}.${idx}`}
											className="game-panel rounded flex items-center justify-between p-2 text-xs"
										>
											<span className="truncate flex-1 font-medium">{exp.name}</span>
											<div className="flex items-center gap-1.5 shrink-0">
												{exp.trained && (
													<>
														<Button variant="ghost" size="sm" className="h-5 w-5 p-0 hover:bg-primary/20">
															<Minus className="w-2.5 h-2.5" />
														</Button>
														<Badge variant="outline" className="text-[10px]">
															+{exp.trainBonus}
														</Badge>
														<Button variant="ghost" size="sm" className="h-5 w-5 p-0 hover:bg-primary/20">
															<Plus className="w-2.5 h-2.5" />
														</Button>
													</>
												)}
												<Badge className="text-[10px] font-bold min-w-10 justify-center glow-primary">
													{total >= 0 ? "+" : ""}
													{total}
												</Badge>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</>
				)}

				{activeTab === "abilities" && (
					<div className="space-y-2">
						{character.abilities.map((ability) => (
							<div key={ability.id} className="game-panel rounded p-2 md:p-3">
								<div className="flex items-start justify-between gap-2 mb-2">
									<div className="flex-1 min-w-0">
										<div className="flex items-center gap-1.5 flex-wrap mb-1">
											<h4 className="text-sm font-bold">{ability.name}</h4>
											{ability.passive && (
												<Badge variant="secondary" className="text-[9px]">
													PASSIVE
												</Badge>
											)}
											{ability.manaCost > 0 && (
												<Badge className="text-[9px] bg-primary/20 text-primary border-primary/50">
													{ability.manaCost} MP
												</Badge>
											)}
											<Badge variant="outline" className="text-[9px] uppercase">
												{ability.type}
											</Badge>
										</div>
										<p className="text-xs text-muted-foreground leading-relaxed">{ability.description}</p>
									</div>
									<div className="flex gap-1 shrink-0">
										{ability.attacks.length > 0 && (
											<Badge variant="destructive" className="text-[9px] gap-1 glow-destructive">
												<Sword className="w-2.5 h-2.5" />
												{ability.attacks.length}
											</Badge>
										)}
										{ability.modifiers.length > 0 && (
											<Badge className="text-[9px] gap-1 glow-primary">
												<Zap className="w-2.5 h-2.5" />
												{ability.modifiers.length}
											</Badge>
										)}
									</div>
								</div>

								{ability.attacks.length > 0 && (
									<div className="mt-2 pt-2 border-t border-border/50">
										<Button
											variant="ghost"
											size="sm"
											className="w-full justify-between h-auto p-2 hover:bg-primary/10 text-xs font-semibold"
											onClick={() => toggle(`ability-attacks-${ability.id}`)}
										>
											<span className="flex items-center gap-1.5">
												<Sword className="w-3 h-3 text-destructive" />
												<span>Attacks ({ability.attacks.length})</span>
											</span>
											{expandedItems[`ability-attacks-${ability.id}`] ? (
												<ChevronUp className="w-4 h-4" />
											) : (
												<ChevronDown className="w-4 h-4" />
											)}
										</Button>

										{expandedItems[`ability-attacks-${ability.id}`] && (
											<div className="mt-2 space-y-2">
												{ability.attacks.map((attack, idx) => (
													<div key={`${attack.category}.${idx}`} className="game-panel rounded p-2 text-xs space-y-1">
														<div className="flex items-center gap-1.5 flex-wrap">
															<Badge variant="outline" className="text-[9px] uppercase">
																{attack.category}
															</Badge>
															<span className="text-muted-foreground">+{attack.attackRoll.baseBonus} to hit</span>
														</div>
														<div className="text-foreground">
															<span className="font-semibold">Damage:</span>{" "}
															{attack.damage.map((d, i) => (
																<span key={`${attack.category}.${d.type}.${i}`}>
																	{i > 0 && " + "}
																	{d.dice.count}d{d.dice.sides}
																	{d.dice.bonus > 0 && `+${d.dice.bonus}`} {d.type}
																</span>
															))}
														</div>
														<div className="text-muted-foreground">
															<span className="font-semibold">Critical:</span> {attack.critical.diceValue}+ (×
															{attack.critical.multiplier})
														</div>
													</div>
												))}
											</div>
										)}
									</div>
								)}

								{ability.modifiers.length > 0 && (
									<div className="mt-2 pt-2 border-t border-border/50">
										<Button
											variant="ghost"
											size="sm"
											className="w-full justify-between h-auto p-2 hover:bg-primary/10 text-xs font-semibold"
											onClick={() => toggle(`ability-mods-${ability.id}`)}
										>
											<span className="flex items-center gap-1.5">
												<Zap className="w-3 h-3 text-primary" />
												<span>Modifiers ({ability.modifiers.length})</span>
											</span>
											{expandedItems[`ability-mods-${ability.id}`] ? (
												<ChevronUp className="w-4 h-4" />
											) : (
												<ChevronDown className="w-4 h-4" />
											)}
										</Button>

										{expandedItems[`ability-mods-${ability.id}`] && (
											<div className="mt-2 space-y-1">
												{ability.modifiers.map((mod, idx) => (
													<div
														key={`${ability.id}.${mod.id}.${idx}`}
														className="game-panel rounded p-2 text-xs flex items-center justify-between"
													>
														<span className="text-muted-foreground">{mod.target.kind}</span>
														<Badge className="text-[9px]">
															{mod.value >= 0 ? "+" : ""}
															{mod.value}
															{mod.type === "percentage" ? "%" : ""}
														</Badge>
													</div>
												))}
											</div>
										)}
									</div>
								)}
							</div>
						))}
					</div>
				)}

				{activeTab === "inventory" && (
					<div className="space-y-3">
						<div className="game-panel rounded p-2 md:p-3">
							<h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Currency</h3>
							<div className="flex items-center justify-between">
								<span className="text-sm text-muted-foreground">Tibares</span>
								<Badge className="text-sm font-bold glow-primary">{character.inventory.tibares}</Badge>
							</div>
						</div>

						<div className="space-y-2">
							<h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">Items</h3>
							{character.inventory.items.map((item) => (
								<div key={item.id} className="game-panel rounded p-2 md:p-3">
									<div className="flex items-start justify-between gap-2 mb-2">
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-1.5 flex-wrap mb-1">
												<h4 className="text-sm font-bold">{item.name}</h4>
												{item.equipped && <Badge className="text-[9px] glow-accent">EQUIPPED</Badge>}
												{item.passive && (
													<Badge variant="secondary" className="text-[9px]">
														PASSIVE
													</Badge>
												)}
												<Badge variant="outline" className="text-[9px] uppercase">
													{item.type}
												</Badge>
											</div>
											<p className="text-xs text-muted-foreground">{item.description}</p>
										</div>
										{item.modifiers.length > 0 && (
											<Badge className="text-[9px] gap-1 shrink-0 glow-primary">
												<Zap className="w-2.5 h-2.5" />
												{item.modifiers.length}
											</Badge>
										)}
									</div>

									{item.modifiers.length > 0 && (
										<>
											<Button
												variant="ghost"
												size="sm"
												className="w-full justify-between h-auto p-2 hover:bg-primary/10 text-xs font-semibold mt-2 border-t border-border/50 pt-2"
												onClick={() => toggle(`item-mods-${item.id}`)}
											>
												<span className="flex items-center gap-1.5">
													<Zap className="w-3 h-3 text-primary" />
													<span>Modifiers ({item.modifiers.length})</span>
												</span>
												{expandedItems[`item-mods-${item.id}`] ? (
													<ChevronUp className="w-4 h-4" />
												) : (
													<ChevronDown className="w-4 h-4" />
												)}
											</Button>

											{expandedItems[`item-mods-${item.id}`] && (
												<div className="mt-2 space-y-1">
													{item.modifiers.map((mod, idx) => (
														<div
															key={`${item.id}.${mod.id}.${idx}`}
															className="game-panel rounded p-2 text-xs flex items-center justify-between"
														>
															<span className="text-muted-foreground capitalize">{mod.target.kind}</span>
															<Badge className="text-[9px]">
																{mod.value >= 0 ? "+" : ""}
																{mod.value}
																{mod.type === "percentage" ? "%" : ""}
															</Badge>
														</div>
													))}
												</div>
											)}
										</>
									)}
								</div>
							))}
						</div>
					</div>
				)}

				{activeTab === "party" && (
					<div className="grid gap-2 md:grid-cols-2">
						{characters
							?.filter((c) => c.id !== character.id)
							.map((char) => (
								<div key={char.id} className="game-panel rounded p-2 md:p-3">
									<div className="flex items-center gap-2 mb-2">
										<div className="relative w-12 h-12 rounded overflow-hidden border border-border/50 shrink-0">
											<img
												src={getCharacterImage(char.id) || "/placeholder.svg"}
												alt={char.name}
												className="w-full h-full object-cover"
											/>
											<div className="absolute bottom-0 right-0 bg-primary text-primary-foreground text-[9px] font-bold px-1 rounded-tl">
												{char.level}
											</div>
										</div>
										<div className="flex-1 min-w-0">
											<h4 className="text-sm font-bold truncate">{char.name}</h4>
											<p className="text-[10px] text-muted-foreground truncate">{char.classes.join(" / ")}</p>
										</div>
										<div className="flex gap-1.5 shrink-0">
											<div className="text-center">
												<Shield className="w-3 h-3 mx-auto text-primary mb-0.5" />
												<p className="text-xs font-bold">{char.defense.total}</p>
											</div>
											<div className="text-center">
												<Sparkles className="w-3 h-3 mx-auto text-accent mb-0.5" />
												{/* <p className="text-xs font-bold">{char.magicResistence}</p> */}
												<p className="text-xs font-bold">0</p>
											</div>
										</div>
									</div>

									<div className="space-y-1.5">
										<div className="flex items-center gap-1.5">
											<Heart className="w-3 h-3 text-destructive shrink-0" />
											<div className="flex-1 h-4 rounded-sm overflow-hidden border border-border/50 stat-bar-bg">
												<div
													className="h-full bg-linear-to-r from-destructive to-destructive/80"
													style={{ width: `${(char.hp.current / char.hp.max) * 100}%` }}
												/>
											</div>
											<span className="text-[10px] font-bold shrink-0">
												{char.hp.current}/{char.hp.max}
											</span>
										</div>

										<div className="flex items-center gap-1.5">
											<Sparkles className="w-3 h-3 text-primary shrink-0" />
											<div className="flex-1 h-4 rounded-sm overflow-hidden border border-border/50 stat-bar-bg">
												<div
													className="h-full bg-linear-to-r from-primary to-primary/80"
													style={{ width: `${(char.mp.current / char.mp.max) * 100}%` }}
												/>
											</div>
											<span className="text-[10px] font-bold shrink-0">
												{char.mp.current}/{char.mp.max}
											</span>
										</div>
									</div>
								</div>
							))}
					</div>
				)}
			</div>

			<CharacterPanel character={character} />
		</div>
	);
}
