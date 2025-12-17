import { createContext, type ReactNode, useContext, useState } from "react";

type User = {
	role: "master" | "player";
	characterId?: number;
};

type UserContext = {
	user: User | null;
	login(user: User): void;
	logout(): void;
};

type NewType = null;

const UserContext = createContext<UserContext | NewType>(null);

type Props = {
	children: ReactNode;
};

export function UserContextProvider({ children }: Props) {
	const [user, setUser] = useState<User | null>(null);

	function login(user: User) {
		setUser(user);
	}

	function logout() {
		setUser(null);
	}

	return <UserContext value={{ user, login, logout }}>{children}</UserContext>;
}

export function useUser() {
	const ctx = useContext(UserContext);
	return ctx as UserContext;
}
