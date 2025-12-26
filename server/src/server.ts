import http from "node:http";
import { setupSocket } from "@/socket";
import { app } from "./app";

const server = http.createServer(app);
const io = setupSocket(server);

// make io available in routes
app.set("io", io);

server.listen(3000, () => {
	console.log("Server running on port 3000");
});
