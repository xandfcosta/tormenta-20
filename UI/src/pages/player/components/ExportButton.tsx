import { Braces, Check, Clipboard } from "lucide-react";
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
import { useState } from "react";

type Props = {
	character: Character;
};

export function ExportButton({ character }: Props) {
	const [copied, setCopied] = useState(false);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" size={"icon-sm"}>
					<Braces />
				</Button>
			</DialogTrigger>
			<DialogContent className="flex flex-col gap-2 sm:max-w-[80%] h-[80%]">
				<DialogHeader className="h-fit">
					<DialogTitle>Exporte seu personagem</DialogTitle>
					<DialogDescription>Seu personagem em formato JSON</DialogDescription>
				</DialogHeader>
				<div className="flex flex-1 relative">
					<Textarea value={JSON.stringify(character, undefined, 2)} />
					<Button
						className="absolute top-1 right-2"
						variant={"outline"}
						size={"icon-sm"}
						onClick={() =>
							navigator.clipboard.writeText(JSON.stringify(character, undefined, 2)).then(() => {
								setCopied(true);
								setTimeout(() => setCopied(false), 1000);
							})
						}
					>
						{copied ? (
							<Check
								data-copied={copied}
								className="data-[copied=false]:animate-out data-[copied=false]:fade-out-0 data-[copied=true]:animate-in data-[copied=true]:fade-in-0 duration-200"
							/>
						) : (
							<Clipboard
								data-copied={copied}
								className="data-[copied=false]:animate-out data-[copied=false]:fade-out-0 data-[copied=true]:animate-in data-[copied=true]:fade-in-0 duration-200"
							/>
						)}
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
