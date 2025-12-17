import { useUser } from "@/contexts/user-context";
import { Login } from "@/pages/Login";
import { Master } from "@/pages/Master";
import { Player } from "@/pages/Player";

export default function Index() {
	const { user } = useUser();

	if (!user) return <Login />;

	if (user.role === "master") return <Master />;

	return <Player />;
}
