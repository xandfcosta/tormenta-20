import { Plus } from "lucide-react";
import type { Character } from "@/api/characters";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
	character: Character;
};

const attributeNames = {
	strength: "For",
	dexterity: "Des",
	constitution: "Con",
	intelligence: "Int",
	wisdom: "Sab",
	charisma: "Car",
};

export function Pericies({ character }: Props) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
			{character.pericies.map((skill) => (
				<Card key={skill.name} className="p-2 flex bg-background/50">
					<div className="flex flex-row justify-between">
						<div className="flex flex-row items-center gap-2">
							<Checkbox checked={skill.trained} />
							<span className="font-medium">{skill.name}</span>
							<Badge variant={"secondary"} className="text-xs text-foreground/60">
								{attributeNames[skill.attribute as keyof typeof attributeNames]}
							</Badge>
						</div>
						<span className="font-bold text-sm">{skill.total}</span>
					</div>
					<div className="flex flex-row justify-between text-foreground/60">
						<span className="text-xs font-bold">{Math.floor(character.level / 2)}</span>
						<span className="text-xs font-bold">
							{character.attributes[skill.attribute as keyof typeof character.attributes]}
						</span>
						<span className="text-xs font-bold">{skill.trainBonus}</span>
						<span className="text-xs font-bold">{skill.others}</span>
					</div>
				</Card>
			))}
			<Dialog>
				<DialogTrigger>
					<Button>
						<Plus />
						Adicionar ofício
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Criador de ofício</DialogTitle>
						<DialogDescription>
							Para mais informações sobre ofícios{" "}
							<a
								className="underline text-primary"
								href="https://tsrd.fandom.com/pt-br/wiki/Per%C3%ADcias_T20#Of%C3%ADcio_%E2%80%A2_Intelig%C3%AAncia"
							>
								clique aqui
							</a>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}
