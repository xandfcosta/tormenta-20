import { ChartLine, FlaskRound, Heart, Shield } from "lucide-react";
import type { Character } from "@/api/characters";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type Props = {
	character: Character;
};

export function CombatStats({ character }: Props) {
	return (
		<div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
			{/* Health */}
			<Card className="p-3 bg-background/50">
				<div className="flex items-end justify-between">
					<div className="flex items-center gap-2 mr-4">
						<Heart className="w-4 h-4 text-destructive" />
						<span className="text-sm font-semibold">PV</span>
					</div>
					<div className="flex flex-row items-end">
						<span className="text-sm font-bold">{character.hp.current}</span>
						<span className="text-xs font-bold text-foreground/60">/{character.hp.max}</span>
					</div>
				</div>
				<Progress value={(character.hp.current / character.hp.max) * 100} className="h-2 [&>div]:bg-destructive" />
			</Card>

			{/* Mana */}
			<Card className="p-3 bg-background/50">
				<div className="flex items-center justify-between">
					<div className="flex items-end gap-2 mr-2">
						<FlaskRound className="w-4 h-4 text-blue-400" />
						<span className="text-sm font-semibold">PM</span>
					</div>
					<div className="flex flex-row items-end">
						<span className="text-sm font-bold">{character.mana.current}</span>
						<span className="text-xs font-bold text-foreground/60">/{character.mana.max}</span>
					</div>
				</div>
				<Progress value={(character.mana.current / character.mana.max) * 100} className="h-2 [&>div]:bg-blue-400" />
			</Card>

			{/* Level */}
			<Card className="p-3 bg-background/50 flex justify-between col-span-2 xl:col-span-1">
				<div className="flex items-end justify-between mb-2">
					<div className="flex items-end gap-2 mr-2">
						<ChartLine className="w-4 h-4 text-green-600" />
						<span className="text-sm font-semibold xl:hidden 2xl:block">Level</span>
						<span className="text-sm font-semibold hidden xl:max-2xl:block">Lvl</span>
					</div>
					<div className="flex flex-row items-end">
						<span className="text-sm font-bold">{character.experience}</span>
						<span className="text-xs font-bold text-foreground/60">/1000 XP</span>
					</div>
				</div>
				<Progress value={(character.experience / 1000) * 100} className="h-2" />
			</Card>

			{/* Defense */}
			<Card className="p-3 bg-background/50 flex justify-between col-span-2 xl:col-span-3">
				<div className="flex flex-row justify-between">
					<div className="flex items-center justify-start gap-2">
						<Shield className="w-4 h-4 text-primary" />
						<span className="text-sm font-semibold">Defesa</span>
					</div>
					<div className="flex flex-row items-end">
						<span className="text-sm font-bold">{character.combat.defense.base}</span>
						<span className="text-sm font-bold text-primary">
							+{character.combat.defense.total - character.combat.defense.base}
						</span>
						<span className="text-xs font-bold text-foreground/60">/{character.combat.defense.base}</span>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-1">
					<span className="text-sm font-semibold text-center">{character.combat.defense.armor.bonus}</span>
					<span className="text-sm font-semibold text-center">
						{character.combat.defense.shield.reduce((prev, curr) => prev + curr.bonus, 0)}
					</span>
					<span className="text-sm font-semibold text-center">{character.combat.defense.modifier}</span>
					<span className="text-sm font-semibold text-center">{character.combat.defense.others}</span>

					<span className="text-xs font-semibold text-foreground/60 text-center">Armadura</span>
					<span className="text-xs font-semibold text-foreground/60 text-center">Escudo</span>
					<span className="text-xs font-semibold text-foreground/60 text-center">Mod</span>
					<span className="text-xs font-semibold text-foreground/60 text-center">Outros</span>
				</div>
			</Card>
		</div>
	);
}
