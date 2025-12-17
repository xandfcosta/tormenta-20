import { LogOut, type LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/user-context";

type Props = {
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
	>;
	title: string;
	subtitle?: string;
};
export function Header({ icon: Icon, title, subtitle }: Props) {
	const { logout } = useUser();

	return (
		<header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-3">
						<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 border border-primary/30">
							<Icon className="w-6 h-6 text-primary" />
						</div>
						<div>
							<h1 className="text-2xl font-bold text-balance">{title}</h1>
							<p className="text-sm text-muted-foreground">{subtitle}</p>
						</div>
					</div>

					<Button variant={"outline"} onClick={() => logout()}>
						<LogOut />
						Sair
					</Button>
				</div>
			</div>
		</header>
	);
}
