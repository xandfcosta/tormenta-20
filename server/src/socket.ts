import type http from "node:http";
import { Server } from "socket.io";

export function setupSocket(server: http.Server) {
	const io = new Server(server, {
		cors: { origin: "*" },
	});

	io.on("connection", (socket) => {
		socket.on("join:character", ({ characterId }) => {
			socket.join(`character:${characterId}`);
		});
	});

	return io;
}
