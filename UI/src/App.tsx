import { UserContextProvider } from "@/contexts/user-context";
import Index from "@/pages";

export default function App() {
	return (
		<UserContextProvider>
			<Index />
		</UserContextProvider>
	);
}
