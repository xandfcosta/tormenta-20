import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/pages";
import "@/index.css";
import { UserContextProvider } from "@/contexts/user-context";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<UserContextProvider>
			<App />
		</UserContextProvider>
	</StrictMode>,
);
