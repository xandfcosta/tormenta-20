import { Braces } from "lucide-react";
import type { Character } from "@/api/characters";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

type Props = {
	character: Character;
};

export function ExportButton({ character }: Props) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>
					<Braces />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Exporte seu personagem</DialogTitle>
					<DialogDescription>Seu personagem em formato JSON</DialogDescription>
				</DialogHeader>
				<Textarea value={JSON.stringify(character, undefined, 2)} />
			</DialogContent>
		</Dialog>
	);
}
