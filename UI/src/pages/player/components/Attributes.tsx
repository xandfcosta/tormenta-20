import { Brain, Eye, Heart, Sparkles, Swords, Zap } from "lucide-react";
import type { Character } from "@/api/characters";
import { Card } from "@/components/ui/card";

type Props = {
	character: Character;
};

const statIcons = {
	strength: Swords,
	dexterity: Zap,
	constitution: Heart,
	intelligence: Brain,
	wisdom: Eye,
	charisma: Sparkles,
};

const attributeNames = {
	strength: "Força",
	dexterity: "Destreza",
	constitution: "Constituição",
	intelligence: "Inteligência",
	wisdom: "Sabedoria",
	charisma: "Carisma",
};

export function Attributes({ character }: Props) {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
			{Object.entries(character.attributes).map(([stat, value]) => {
				const Icon = statIcons[stat as keyof typeof statIcons];
				const name = attributeNames[stat as keyof typeof attributeNames];
				return (
					<Card key={stat} className="p-3 text-center max-xl:justify-between bg-background/50 gap-1">
						<div className="flex items-center justify-center gap-1 text-muted-foreground">
							<Icon className="w-4 h-4" />
							<span className="hidden xl:block">{name}</span>
							<span className="block lg:hidden">{name.slice(0, 3).toUpperCase()}</span>
						</div>
						<div className="text-2xl font-bold">{value}</div>
						<span className="hiden md:max-xl:block xl:hidden text-muted-foreground">
							{name.slice(0, 3).toUpperCase()}
						</span>
					</Card>
				);
			})}
		</div>
	);
}
