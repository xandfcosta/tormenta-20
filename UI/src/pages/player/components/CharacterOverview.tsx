import type { Character } from "@/api/characters";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Attributes } from "@/pages/player/components/Attributes";
import { CombatStats } from "@/pages/player/components/CombatStats";
import { ExportButton } from "@/pages/player/components/ExportButton";

type Props = {
	character: Character;
};

export function CharacterOverwiew({ character }: Props) {
	return (
		<Card className="p-6 bg-card/50">
			<div className="flex flex-col lg:flex-row gap-6">
				{/* Character Portrait */}
				<div className="w-full aspect-square lg:w-64 md:aspect-3/4 rounded-lg overflow-hidden bg-secondary/50 shrink-0">
					<img
						src={character.image || "/placeholder.svg"}
						alt={character.name}
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Character Info */}
				<div className="flex-1 space-y-4">
					<div>
						<div className="flex flex-row gap-2">
							<h2 className="text-3xl font-bold text-balance mb-2">{character.name}</h2>
							<ExportButton character={character} />
						</div>
						<div className="flex flex-wrap items-center gap-2">
							{character.races.map((race) => (
								<Badge key={race} variant="secondary">
									{race}
								</Badge>
							))}
							{character.classes.map((charClass) => (
								<Badge key={charClass} variant="outline">
									{charClass}
								</Badge>
							))}
							{character.divinity && <Badge variant="secondary">{character.divinity}</Badge>}
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
						<CombatStats character={character} />
						<Attributes character={character} />
					</div>
				</div>
			</div>
		</Card>
	);
}
