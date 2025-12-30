import { FlaskConical, Heart, Shield, Sparkles, TrendingUp, Zap } from "lucide-react";
import { useMemo } from "react";
import { getCharacterImage, type TCharacter } from "@/api/characters";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { getModifiersForStat } from "@/pages/player/modifiers";
import { de } from "zod/v4/locales";

type Props = {
	character: TCharacter;
};

export function CharacterPanel({ character }: Props) {
	const defenseMods = useMemo(() => getModifiersForStat(character, "defense"), [character]);
	const magicMods = useMemo(() => getModifiersForStat(character, "magicResistence"), [character]);
	const hpMods = useMemo(() => getModifiersForStat(character, "hp"), [character]);
	const mpMods = useMemo(() => getModifiersForStat(character, "mp"), [character]);

	return (
		<div className="flex-none game-panel border-b p-2">
			<div className="flex items-stretch gap-0 h-32 md:h-36">
				{/* Character Portrait */}
				<div className="relative w-32 md:w-36 h-32 md:h-36 shrink-0 border-r border-border/50 overflow-hidden">
					<Avatar className="size-full rounded-none">
						<AvatarImage className="object-cover" src={getCharacterImage(character.id)} />
						<AvatarFallback>{character.name[0]}</AvatarFallback>
					</Avatar>
					<Badge className="absolute bottom-0 left-0 rounded-none rounded-tr-lg bg-primary/90 text-primary-foreground font-bold glow-primary">
						LVL {character.level}
					</Badge>
				</div>

				{/* Character Info & Stats */}
				<div className="flex-1 flex flex-col justify-between p-2 md:p-3 min-w-0">
					<div className="flex gap-2">
						<div>
							<h1 className="text-lg md:text-xl font-bold truncate tracking-wide uppercase">{character.name}</h1>
							<p className="text-xs text-muted-foreground truncate">
								{character.races.join(" / ")} • {character.classes.join(" / ")}
							</p>
						</div>

						<div className="flex items-center gap-1">
							<Dialog>
								<DialogTrigger
									data-mods={defenseMods.length}
									className="grid grid-cols-1 data-[mods=true]:grid-cols-2 items-center gap-1 px-2 py-1 rounded bg-card/90 backdrop-blur-sm border border-border/50 hover:bg-black/30"
								>
									<Shield className="size-4 text-primary" />
									<Zap
										data-visible={!!defenseMods.length}
										className="size-2.5 fill-accent mx-auto data-[visible=false]:hidden"
									/>
									<p className="h-auto p-0 text-xs font-bold">{character.defense.base}</p>
									<p
										data-visible={!!defenseMods.length}
										className="h-auto p-0 text-xs font-bold text-accent data-[visible=false]:hidden"
									>
										{character.defense.total}
									</p>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>Modificadores de Defesa</DialogTitle>
										<DialogDescription></DialogDescription>
									</DialogHeader>
									<div className="flex flex-wrap gap-1">
										{defenseMods.length ? (
											defenseMods.map((mod, idx) => (
												<Badge key={`${mod.source}.${idx}`} variant="outline" className="text-[10px]">
													{mod.source}: {mod.modifier.value >= 0 ? "+" : ""}
													{mod.modifier.value}
													{mod.modifier.type === "percentage" ? "%" : ""}
												</Badge>
											))
										) : (
											<p className="text-sm text-center text-foreground/30">Nenhum modificador</p>
										)}
									</div>
								</DialogContent>
							</Dialog>

							<Dialog>
								<DialogTrigger
									data-mods={magicMods.length}
									className="grid grid-cols-1 data-[mods=true]:grid-cols-2 items-center gap-1 px-2 py-1 rounded bg-card/90 backdrop-blur-sm border border-border/50 hover:bg-black/30"
								>
									<Sparkles className="size-4 text-accent" />
									<Zap
										data-visible={!!magicMods.length}
										className="size-2.5 fill-accent mx-auto data-[visible=false]:hidden"
									/>
									<p className="h-auto p-0 text-xs font-bold">{character.magicResistence}</p>
									<p
										data-visible={!!magicMods.length}
										className="h-auto p-0 text-xs font-bold text-accent data-[visible=false]:hidden"
									>
										{character.magicResistence}
									</p>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>Modificadores de Defesa Mágica</DialogTitle>
										<DialogDescription></DialogDescription>
									</DialogHeader>
									<div className="flex flex-wrap gap-1">
										{magicMods.length ? (
											magicMods.map((mod, idx) => (
												<Badge key={`${mod.source}.${idx}`} variant="outline" className="text-[10px]">
													{mod.source}: {mod.modifier.value >= 0 ? "+" : ""}
													{mod.modifier.value}
													{mod.modifier.type === "percentage" ? "%" : ""}
												</Badge>
											))
										) : (
											<p className="text-sm text-center text-foreground/30">Nenhum modificador</p>
										)}
									</div>
								</DialogContent>
							</Dialog>
						</div>
					</div>

					<div className="flex flex-col space-y-2">
						{/* HP Bar */}

						<Dialog>
							<DialogTrigger className="flex gap-2 hover:bg-black/30">
								<div className="flex items-center gap-1.5 shrink-0">
									<Heart className="w-4 h-4 text-destructive" />
									<span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">HP</span>
								</div>

								<div className="relative flex flex-1 rounded-full">
									<div className="absolute top-1/2 right-1/2 -translate-y-1/2 text-xs text-center font-bold z-10">
										{character.hp.current} / {character.hp.max}
									</div>
									<Progress
										value={(character.hp.current / character.hp.max) * 100}
										className="h-4 bg-destructive transition-all"
									/>
								</div>

								{hpMods.length ||
									(true && (
										<>
											<div className="relative flex flex-1 rounded-full">
												<div className="absolute top-1/2 right-1/2 -translate-y-1/2 text-xs text-center font-bold z-10">
													{character.hp.current} / {character.hp.max}
												</div>
												<Progress
													value={(character.hp.current / character.hp.max) * 100}
													className="h-4 bg-accent transition-all"
												/>
											</div>
											<div className="flex items-center gap-1.5 shrink-0">
												<Zap className="size-4 text-accent" />
											</div>
										</>
									))}
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Modificadores de Vida</DialogTitle>
									<DialogDescription></DialogDescription>
								</DialogHeader>
								<div className="flex flex-wrap gap-1">
									{getModifiersForStat(character, "hp").map((mod, idx) => (
										<Badge key={`${mod.source}.${idx}`} variant="outline" className="text-[10px]">
											{mod.source}: {mod.modifier.value >= 0 ? "+" : ""}
											{mod.modifier.value}
											{mod.modifier.type === "percentage" ? "%" : ""}
										</Badge>
									))}
								</div>
							</DialogContent>
						</Dialog>

						{/* MP Bar */}
						<div className="flex items-center gap-2">
							<div className="flex items-center gap-1.5 shrink-0">
								<FlaskConical className="w-4 h-4 text-blue-500" />
								<span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">MP</span>
							</div>
							<div className="relative flex flex-1 rounded-full">
								<Progress
									value={(character.mp.current / character.mp.max) * 100}
									className="h-4 bg-blue-600 transition-all"
								/>

								<Dialog>
									<DialogTrigger asChild>
										<Button
											variant="ghost"
											size="sm"
											className="absolute inset-0 size-full justify-center text-xs font-bold hover:bg-transparent rounded-full"
										>
											{character.mp.current} / {character.mp.max}
											{getModifiersForStat(character, "mp").length > 0 && (
												<TrendingUp className="w-3 h-3 ml-1 text-accent" />
											)}
										</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Modificadores de Mana</DialogTitle>
											<DialogDescription></DialogDescription>
										</DialogHeader>
										<div className="flex flex-wrap gap-1">
											{getModifiersForStat(character, "mp").map((mod, idx) => (
												<Badge key={`${mod.source}.${idx}`} variant="outline" className="text-[10px]">
													{mod.source}: {mod.modifier.value >= 0 ? "+" : ""}
													{mod.modifier.value}
													{mod.modifier.type === "percentage" ? "%" : ""}
												</Badge>
											))}
										</div>
									</DialogContent>
								</Dialog>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
