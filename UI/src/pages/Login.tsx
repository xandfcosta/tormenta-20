import { Crown, User } from "lucide-react";
import { useCharacters } from "@/api/characters";
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
import { useUser } from "@/contexts/user-context";

export function Login() {
	const { login } = useUser();
	const { data: characters } = useCharacters();

	return (
		<div className="min-h-screen bg-background flex items-center justify-center p-4">
			<div className="w-full max-w-4xl">
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold text-balance mb-2">Tormenta 20</h1>
					<p className="text-muted-foreground">Como deseja jogar?</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					{/* Player Role Card */}
					<Card className="p-8 bg-card/50 hover:bg-card transition-all hover:scale-105 group">
						<div className="text-center">
							<div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 border-2 border-primary/30 group-hover:border-primary/50 transition-colors">
								<User className="w-10 h-10 text-primary" />
							</div>
							<h2 className="text-2xl font-bold mb-2">Jogador</h2>

							<Dialog>
								<DialogTrigger asChild>
									<Button className="w-full bg-amber-500 hover:bg-amber-600 text-black">
										Entrar como jogador
									</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>Selecione seu personagem</DialogTitle>
										<DialogDescription></DialogDescription>
									</DialogHeader>

									<div className="space-y-2">
										{characters.map((char) => (
											<Button
												key={char.id}
												variant="outline"
												className="w-full justify-start bg-transparent"
												onClick={() => {
													login({ role: "player", characterId: char.id });
												}}
											>
												<div className="w-8 h-8 rounded-full overflow-hidden mr-2 shrink-0">
													<img
														src={char.image || "/placeholder.svg"}
														alt={char.name}
														className="w-full h-full object-cover"
													/>
												</div>
												<div className="text-left flex-1 min-w-0">
													<div className="font-semibold truncate">
														{char.name}
													</div>
													<div className="text-xs text-muted-foreground">
														{char.races.join(",")} {char.classes.join(",")}
													</div>
												</div>
											</Button>
										))}
									</div>
								</DialogContent>
							</Dialog>
						</div>
					</Card>

					{/* Game Master Role Card */}
					<Card className="p-8 bg-card/50 hover:bg-card transition-all hover:scale-105 group">
						<div className="text-center">
							<div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-amber-500/20 border-2 border-amber-500/30 group-hover:border-amber-500/50 transition-colors">
								<Crown className="w-10 h-10 text-amber-500" />
							</div>
							<h2 className="text-2xl font-bold mb-2">Mestre</h2>

							<Button
								className="w-full bg-amber-500 hover:bg-amber-600 text-black"
								onClick={() => login({ role: "master" })}
							>
								Entrar como mestre
							</Button>
						</div>
					</Card>
				</div>

				<div className="text-center mt-6">
					<p className="text-xs text-muted-foreground">
						You can change your role anytime from the interface
					</p>
				</div>
			</div>
		</div>
	);
}
