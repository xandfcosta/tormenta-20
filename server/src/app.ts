import express, { type ErrorRequestHandler, type Express } from "express";
import { characterRoute } from "@/routes/character";
import cors from "cors";

export const app: Express = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));
app.use("/characters", characterRoute);

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
	console.error("[!] Error:", err);
	res.status(400).json({ error: err.toString() });
};

app.use(errorHandler);
