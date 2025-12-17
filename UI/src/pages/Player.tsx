import {
	Activity,
	Backpack,
	Braces,
	Brain,
	Check,
	CirclePoundSterling,
	Eye,
	FlaskRound,
	Heart,
	Shield,
	Sparkles,
	Swords,
	User,
	Users,
	Zap,
} from "lucide-react";
import { useMemo } from "react";
import { type Character, useCharacters } from "@/api/characters";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@/contexts/user-context";

const statIcons = {
	strength: Swords,
	dexterity: Zap,
	constitution: Heart,
	intelligence: Brain,
	wisdom: Eye,
	charisma: Sparkles,
};

export function Player() {
	const { user } = useUser();
	const { data: characters } = useCharacters();

	const currentCharacter = useMemo(
		() => characters.find((c) => c.id === user?.characterId) as Character,
		[user, characters],
	);
	const otherCharacters = useMemo(
		() => characters.filter((c) => c.id !== user?.characterId),
		[user, characters],
	);

	return (
		<div className="min-h-screen bg-background">
			<Header
				icon={User}
				title="Seu personagem"
				subtitle={currentCharacter.player}
			/>

			{/* Other Characters Section */}
			{!!otherCharacters.length && (
				<div className="container mx-auto px-4 py-6 space-y-6">
					<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
						<Users className="w-5 h-5" />
						Party Members
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{otherCharacters.map((character) => (
							<Card
								key={character.id}
								className="p-4 bg-card/50 hover:bg-card transition-colors"
							>
								<div className="flex gap-4">
									{/* Character Portrait */}
									<div className="w-20 h-20 rounded-lg overflow-hidden bg-secondary/50 shrink-0">
										<img
											src={character.image || "/placeholder.svg"}
											alt={character.name}
											className="w-full h-full object-cover"
										/>
									</div>

									{/* Character Info */}
									<div className="flex-1 min-w-0">
										<h4 className="font-bold text-balance truncate">
											{character.name}
										</h4>
										<div className="flex items-center gap-1 mb-2">
											{character.classes.map((charClass) => (
												<Badge
													key={charClass}
													variant="secondary"
													className="text-xs"
												>
													{charClass}
												</Badge>
											))}
											<Badge variant="outline" className="text-xs">
												Lvl {character.level}
											</Badge>
										</div>

										{/* Key Stats */}
										<div className="grid grid-cols-2 gap-2 text-xs">
											<div className="flex items-center gap-1">
												<Heart className="w-3 h-3 text-destructive" />
												<span className="font-semibold">
													{character.hp.current}/{character.hp.max}
												</span>
											</div>
											<div className="flex items-center gap-1">
												<FlaskRound className="w-3 h-3 text-blue-400" />
												<span className="font-semibold">
													{character.mana.current}/{character.mana.max}
												</span>
											</div>
											<div className="flex items-center gap-1">
												<Shield className="w-3 h-3 text-blue-400" />
												<span className="font-semibold">
													{character.combat.defense.total}
												</span>
											</div>
											<div className="flex items-center gap-1">
												<Activity className="w-3 h-3 text-green-400" />
												<span className="font-semibold capitalize">Active</span>
											</div>
										</div>
									</div>
								</div>

								{/* HP Bar */}
								<Progress
									value={(character.hp.current / character.hp.max) * 100}
									className="h-1 mt-3"
								/>
							</Card>
						))}
					</div>
				</div>
			)}

			<div className="container mx-auto px-4 py-6 space-y-6">
				{/* Character Overview Card */}
				<Card className="p-6 bg-card/50">
					<div className="flex flex-col lg:flex-row gap-6">
						{/* Character Portrait */}
						<div className="w-full lg:w-64 aspect-3/4 rounded-lg overflow-hidden bg-secondary/50 shrink-0">
							<img
								src={currentCharacter.image || "/placeholder.svg"}
								alt={currentCharacter.name}
								className="w-full h-full object-cover"
							/>
						</div>

						{/* Character Info */}
						<div className="flex-1 space-y-4">
							<div>
								<div className="flex flex-row gap-2">
									<h2 className="text-3xl font-bold text-balance mb-2">
										{currentCharacter.name}
									</h2>
									<Dialog>
										<DialogTrigger asChild>
											<Button>
												<Braces />
											</Button>
										</DialogTrigger>
										<DialogContent>
											<DialogHeader>
												<DialogTitle>Exporte seu personagem</DialogTitle>
												<DialogDescription>
													Seu personagem em formato JSON
												</DialogDescription>
											</DialogHeader>
											<Textarea
												value={JSON.stringify(currentCharacter, undefined, 2)}
											/>
										</DialogContent>
									</Dialog>
								</div>
								<div className="flex flex-wrap items-center gap-2">
									{currentCharacter.races.map((race) => (
										<Badge key={race} variant="secondary">
											{race}
										</Badge>
									))}
									{currentCharacter.classes.map((charClass) => (
										<Badge key={charClass} variant="outline">
											{charClass}
										</Badge>
									))}
									<Badge className="bg-primary/90">
										Level {currentCharacter.level}
									</Badge>
									{currentCharacter.divinity && (
										<Badge variant="secondary">
											{currentCharacter.divinity}
										</Badge>
									)}
								</div>
							</div>

							{/* Core Stats Grid */}
							<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
								{Object.entries(currentCharacter.attributes).map(
									([stat, value]) => {
										const Icon = statIcons[stat as keyof typeof statIcons];
										return (
											<Card
												key={stat}
												className="p-3 text-center bg-background/50 gap-1"
											>
												<div className="flex items-center justify-center gap-1 text-muted-foreground">
													<Icon className="w-4 h-4" />
													{stat.slice(0, 3).toUpperCase()}
												</div>
												<div className="text-2xl font-bold">{value}</div>
											</Card>
										);
									},
								)}
							</div>

							{/* Combat Stats */}
							<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
								<Card className="p-3 bg-background/50">
									<div className="flex items-center justify-between mb-2">
										<div className="flex items-center gap-2">
											<Heart className="w-4 h-4 text-destructive" />
											<span className="text-sm font-semibold">PV</span>
										</div>
										<span className="text-sm font-bold">
											{currentCharacter.hp.current}/{currentCharacter.hp.max}
										</span>
									</div>
									<Progress
										value={
											(currentCharacter.hp.current / currentCharacter.hp.max) *
											100
										}
										className="h-2"
									/>
								</Card>

								<Card className="p-3 bg-background/50">
									<div className="flex items-center justify-between mb-2">
										<div className="flex items-center gap-2">
											<FlaskRound className="w-4 h-4 text-blue-400" />
											<span className="text-sm font-semibold">PM</span>
										</div>
										<span className="text-sm font-bold">
											{currentCharacter.mana.current}/
											{currentCharacter.mana.max}
										</span>
									</div>
									<Progress
										value={
											(currentCharacter.mana.current /
												currentCharacter.mana.max) *
											100
										}
										className="h-2"
									/>
								</Card>

								<Card className="p-3 bg-background/50 flex items-center justify-between">
									<div className="flex items-center gap-2">
										<Shield className="w-4 h-4 text-blue-400" />
										<span className="text-sm font-semibold">Defesa</span>
									</div>
									<span className="text-xl font-bold">
										{currentCharacter.combat.defense.total}
									</span>
								</Card>
							</div>

							{/* Experience Bar */}
							<Card className="p-3 bg-background/50">
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm font-semibold">Experiência</span>
									<span className="text-xs text-muted-foreground">
										{currentCharacter.experience} / 1000 XP
									</span>
								</div>
								<Progress
									value={(currentCharacter.experience / 1000) * 100}
									className="h-2"
								/>
							</Card>
						</div>
					</div>
				</Card>

				{/* Tabbed Content for Character Details */}
				<Card className="p-6 bg-card/50">
					<Tabs defaultValue="pericies" className="w-full">
						<TabsList className="grid w-full grid-cols-4 bg-background/50">
							<TabsTrigger value="pericies">Perícias</TabsTrigger>
							<TabsTrigger value="attacks">Ataques</TabsTrigger>
							<TabsTrigger value="inventory">Inventário</TabsTrigger>
							<TabsTrigger value="notes">Anotações</TabsTrigger>
						</TabsList>

						<TabsContent value="pericies" className="space-y-3 mt-4">
							<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
								{currentCharacter.pericies.map((skill) => (
									<Card
										key={skill.name}
										className="p-2 flex flex-row items-center justify-between bg-background/50"
									>
										<div className="flex flex-row gap-2">
											<span className="font-medium">
												{skill.name} ({skill.attribute})
											</span>
											{skill.trained && <Check className="text-green-500" />}
										</div>
										<Badge className="font-bold">{skill.total}</Badge>
									</Card>
								))}
							</div>
						</TabsContent>

						<TabsContent value="attacks" className="space-y-3 mt-4">
							{currentCharacter.combat.attacks.map((attack) => (
								<Card
									key={attack.name}
									className="p-3 flex flex-row items-center gap-3 bg-background/50"
								>
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
											<Backpack className="w-4 h-4 text-destructive" />
											<span className="text-sm font-semibold">Carga</span>
										</div>
										<span className="text-sm font-bold">
											{currentCharacter.inventory.load.used}/
											{currentCharacter.inventory.load.limit}
										</span>
									</div>
									<Progress
										value={
											(currentCharacter.inventory.load.used /
												currentCharacter.inventory.load.limit) *
											100
										}
										className="h-2"
									/>
								</Card>
								<Card className="p-2 bg-background/50 flex-1">
									<div className="flex items-center justify-between mb-2">
										<div className="flex items-center gap-2">
											<CirclePoundSterling className="w-4 h-4 text-destructive" />
											<span className="text-sm font-semibold">Tibares</span>
										</div>
										<span className="text-sm font-bold">
											T${currentCharacter.inventory.tibares}
										</span>
									</div>
								</Card>
							</div>
							{currentCharacter.inventory.items.map((item) => (
								<Card
									key={item.slot}
									className="p-3 flex flex-row items-center gap-3 bg-background/50"
								>
									<div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/20 border border-primary/30">
										<Backpack className="w-5 h-5 text-primary" />
									</div>
									<div>
										<div className="font-medium">{item.name}</div>
										<div className="flex flex-row gap-2">
											<Badge className="text-xs text-foreground">
												{item.quantity * item.slot}
											</Badge>
											<Badge
												variant={"secondary"}
												className="text-xs text-muted-foreground"
											>
												{item.slot}
											</Badge>
											<Badge
												variant={"secondary"}
												className="text-xs text-muted-foreground"
											>
												{item.slot}
											</Badge>
										</div>
									</div>
								</Card>
							))}
							{currentCharacter.combat.attacks
								.filter((attack) => attack.type === "item")
								.map((item) => (
									<Card
										key={item.slot}
										className="p-3 flex flex-row items-center gap-3 bg-background/50"
									>
										<div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/20 border border-primary/30">
											<Backpack className="w-5 h-5 text-primary" />
										</div>
										<div className="flex-1">
											<div className="font-medium">{item.name}</div>
											<div className="flex flex-row gap-2">
												<Badge className="text-xs text-foreground">
													{item.quantity * item.slot}
												</Badge>
												<Badge
													variant={"secondary"}
													className="text-xs text-muted-foreground"
												>
													{item.slot}
												</Badge>
												<Badge
													variant={"secondary"}
													className="text-xs text-muted-foreground"
												>
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
