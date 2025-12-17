import { Heart, Shield, Swords, Zap } from "lucide-react";
import type { Character } from "@/components/character-sheet-manager";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CharacterGridProps {
	characters: Character[];
	onSelectCharacter: (character: Character) => void;
}

export function CharacterGrid({
	characters,
	onSelectCharacter,
}: CharacterGridProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{characters.map((character) => (
				<Card
					key={character.id}
					className="overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] bg-card/50 backdrop-blur-sm"
					onClick={() => onSelectCharacter(character)}
				>
					{/* Character Image */}
					<div className="relative aspect-4/3 bg-secondary/50">
						<img
							src={character.image || "/placeholder.svg"}
							alt={character.name}
							className="w-full h-full object-cover"
						/>
						<div className="absolute top-2 right-2">
							<Badge className="bg-primary/90 backdrop-blur-sm font-bold">
								Lv {character.level}
							</Badge>
						</div>
					</div>

					{/* Character Info */}
					<div className="p-4 space-y-3">
						<div>
							<h3 className="font-bold text-lg text-balance leading-tight">
								{character.name}
							</h3>
							<div className="flex items-center gap-2 mt-1">
								<Badge variant="secondary" className="text-xs">
									{character.race}
								</Badge>
								<Badge variant="outline" className="text-xs">
									{character.class}
								</Badge>
							</div>
						</div>

						{/* HP Bar */}
						<div className="space-y-1">
							<div className="flex items-center justify-between text-xs">
								<span className="flex items-center gap-1 text-muted-foreground">
									<Heart className="w-3 h-3 text-destructive" />
									Health
								</span>
								<span className="font-medium">
									{character.hp}/{character.maxHp}
								</span>
							</div>
							<Progress
								value={(character.hp / character.maxHp) * 100}
								className="h-2"
							/>
						</div>

						{/* Quick Stats */}
						<div className="grid grid-cols-3 gap-2">
							<div className="flex items-center gap-1 text-xs">
								<Shield className="w-3 h-3 text-blue-400" />
								<span className="text-muted-foreground">AC:</span>
								<span className="font-bold">{character.ac}</span>
							</div>
							<div className="flex items-center gap-1 text-xs">
								<Zap className="w-3 h-3 text-primary" />
								<span className="text-muted-foreground">Init:</span>
								<span className="font-bold">+{character.initiative}</span>
							</div>
							<div className="flex items-center gap-1 text-xs">
								<Swords className="w-3 h-3 text-destructive" />
								<span className="text-muted-foreground">STR:</span>
								<span className="font-bold">{character.strength}</span>
							</div>
						</div>
					</div>
				</Card>
			))}
		</div>
	);
}
