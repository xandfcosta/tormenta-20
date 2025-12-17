import { Backpack, Check, CirclePoundSterling, Sparkles, User } from "lucide-react";
import { useMemo } from "react";
import { type Character, useCharacters } from "@/api/characters";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@/contexts/user-context";
import { CharacterOverwiew } from "@/pages/player/components/CharacterOverview";
import { OtherCharacters } from "@/pages/player/components/OtherCharacters";
import { Pericies } from "@/pages/player/components/Pericies";

export function Player() {
	const { user } = useUser();
	const { data: characters } = useCharacters();

	const currentCharacter = useMemo(
		() => characters.find((c) => c.id === user?.characterId) as Character,
		[user, characters],
	);
	const otherCharacters = useMemo(() => characters.filter((c) => c.id !== user?.characterId), [user, characters]);

	return (
		<div className="min-h-screen bg-background">
			<Header icon={User} title="Seu personagem" subtitle={currentCharacter.player} />

			<OtherCharacters characters={otherCharacters} />

			<div className="container mx-auto px-4 py-6 space-y-6">
				{/* Character Overview Card */}
				<CharacterOverwiew character={currentCharacter} />

				{/* Tabbed Content for Character Details */}
				<Card className="p-6 bg-card/50">
					<Tabs defaultValue="pericies" className="w-full">
						<TabsList className="grid w-full grid-cols-4 bg-background/30">
							<TabsTrigger value="pericies">Perícias</TabsTrigger>
							<TabsTrigger value="attacks">Ataques</TabsTrigger>
							<TabsTrigger value="inventory">Inventário</TabsTrigger>
							<TabsTrigger value="notes">Anotações</TabsTrigger>
						</TabsList>

						<TabsContent value="pericies" className="my-3">
							<Pericies character={currentCharacter} />
						</TabsContent>

						<TabsContent value="attacks" className="space-y-3 mt-4">
							{currentCharacter.combat.attacks.map((attack) => (
								<Card key={attack.name} className="p-3 flex flex-row items-center gap-3 bg-background/50">
									<div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/20 border border-primary/30">
										<Sparkles className="w-4 h-4 text-primary" />
									</div>
									<span className="font-medium">{attack.name}</span>
								</Card>
							))}
						</TabsContent>

						<TabsContent value="inventory" className="space-y-3 mt-4">
							<div className="flex gap-2">
								<Card className="p-2 bg-background/50 flex-1">
									<div className="flex items-center justify-between mb-2">
										<div className="flex items-center gap-2">
											<Backpack className="w-4 h-4 text-primary" />
											<span className="text-sm font-semibold">Carga</span>
										</div>
										<div className="flex flex-row items-end">
											<span className="text-sm font-bold">{currentCharacter.inventory.load.used}</span>
											<span className="text-xs font-bold text-foreground/60">
												/{currentCharacter.inventory.load.limit}
											</span>
										</div>
									</div>
									<Progress
										value={(currentCharacter.inventory.load.used / currentCharacter.inventory.load.limit) * 100}
										className="h-2"
									/>
								</Card>
								<Card className="p-2 bg-background/50 flex-1">
									<div className="flex items-center justify-between mb-2">
										<div className="flex items-center gap-2">
											<CirclePoundSterling className="w-4 h-4 text-yellow-500" />
											<span className="text-sm font-semibold">Tibares</span>
										</div>
										<div className="flex flex-row items-end gap-1">
											<span className="text-xs font-bold text-foreground/60">T$</span>
											<span className="text-sm font-bold">{currentCharacter.inventory.tibares}</span>
										</div>
									</div>
								</Card>
							</div>
							{currentCharacter.inventory.items.map((item) => (
								<Card key={item.slot} className="p-3 flex flex-row items-center gap-3 bg-background/50">
									<div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/20 border border-primary/30">
										<Backpack className="w-5 h-5 text-primary" />
									</div>
									<div>
										<div className="font-medium">{item.name}</div>
										<div className="flex flex-row gap-2">
											<Badge className="text-xs text-foreground">{item.quantity * item.slot}</Badge>
											<Badge variant={"secondary"} className="text-xs text-muted-foreground">
												{item.slot}
											</Badge>
											<Badge variant={"secondary"} className="text-xs text-muted-foreground">
												{item.slot}
											</Badge>
										</div>
									</div>
								</Card>
							))}
							{currentCharacter.combat.attacks
								.filter((attack) => attack.type === "item")
								.map((item) => (
									<Card key={item.slot} className="p-3 flex flex-row items-center gap-3 bg-background/50">
										<div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/20 border border-primary/30">
											<Backpack className="w-5 h-5 text-primary" />
										</div>
										<div className="flex-1">
											<div className="font-medium">{item.name}</div>
											<div className="flex flex-row gap-2">
												<Badge className="text-xs text-foreground">{item.quantity * item.slot}</Badge>
												<Badge variant={"secondary"} className="text-xs text-muted-foreground">
													{item.slot}
												</Badge>
												<Badge variant={"secondary"} className="text-xs text-muted-foreground">
													{item.slot}
												</Badge>
											</div>
										</div>
									</Card>
								))}
						</TabsContent>

						<TabsContent value="notes" className="space-y-4 mt-4">
							<Textarea className="h-40" value={currentCharacter.notes} />
						</TabsContent>
					</Tabs>
				</Card>
			</div>
		</div>
	);
}
