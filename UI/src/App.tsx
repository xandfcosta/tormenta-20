import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserContextProvider } from "@/contexts/user-context";
import { Index } from "@/pages";

const queryClient = new QueryClient();

export function App() {
	return (
		<UserContextProvider>
			<QueryClientProvider client={queryClient}>
				<Index />
			</QueryClientProvider>
		</UserContextProvider>
	);
}
