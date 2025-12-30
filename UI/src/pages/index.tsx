import { useCharacters } from "@/api/characters";
import { useUser } from "@/contexts/user-context";
import { Login } from "@/pages/Login";
import { PlayerView } from "@/pages/player/Player";

export function Index() {
	const { user } = useUser();
	const { data: characters } = useCharacters();

	if (!user) return <Login />;

	if (user.characterId && characters?.length) return <PlayerView characterId={user.characterId as number} />;

	return null;
}
