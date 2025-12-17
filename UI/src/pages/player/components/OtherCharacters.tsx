import { Activity, FlaskRound, Heart, Shield, Users } from "lucide-react";
import type { Character } from "@/api/characters";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type Props = {
	characters: Character[];
};

export function OtherCharacters({ characters }: Props) {
	if (!characters.length) {
		return null;
	}

	return (
		<div className="container mx-auto px-4 py-6 space-y-6">
			<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
				<Users className="w-5 h-5" />
				Party Members
			</h3>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{characters.map((character) => (
					<Card key={character.id} className="p-4 bg-card/50 hover:bg-card transition-colors">
						<div className="flex gap-4">
							{/* Character Portrait */}
							<div className="size-20 rounded-lg overflow-hidden bg-secondary/50 shrink-0">
								<img
									src={character.image || "/placeholder.svg"}
									alt={character.name}
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Character Info */}
							<div className="flex-1 min-w-0">
								<h4 className="font-bold text-balance truncate">{character.name}</h4>
								<div className="flex items-center gap-1 mb-2">
									{character.classes.map((charClass) => (
										<Badge key={charClass} variant="secondary" className="text-xs">
											{charClass}
										</Badge>
									))}
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
										<span className="font-semibold">{character.combat.defense.total}</span>
									</div>
									<div className="flex items-center gap-1">
										<Activity className="w-3 h-3 text-green-400" />
										<span className="font-semibold capitalize">Active</span>
									</div>
								</div>
							</div>
						</div>

						{/* HP Bar */}
						<Progress value={(character.hp.current / character.hp.max) * 100} className="h-1 mt-3" />
					</Card>
				))}
			</div>
		</div>
	);
}
