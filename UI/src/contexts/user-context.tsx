import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

type User = {
	role: "master" | "player";
	characterId?: number;
};

type UserContext = {
	user: User | null;
	login(user: User): void;
	logout(): void;
};

const UserContext = createContext<UserContext | null>(null);

type Props = {
	children: ReactNode;
};

export function UserContextProvider({ children }: Props) {
	const [user, setUser] = useState<User | null>(null);

	function login(user: User) {
		setUser(user);
		localStorage.setItem("user", JSON.stringify(user));
	}

	function logout() {
		setUser(null);
	}

	useEffect(() => {
		const user = localStorage.getItem("user");

		if (user) setUser(JSON.parse(user));
	}, []);

	return <UserContext value={{ user, login, logout }}>{children}</UserContext>;
}

export function useUser() {
	const ctx = useContext(UserContext);
	return ctx as UserContext;
}
