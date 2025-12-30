import cors from "cors";
import express, { type ErrorRequestHandler, type Express } from "express";
import { characterRoute } from "@/routes/character";
import z, { ZodError } from "zod";

export const app: Express = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));
app.use("/characters", characterRoute);

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
	console.error("[!] Error:", { err });

	if (err instanceof ZodError) {
		res.status(400).json({ error: z.prettifyError(err) });
	} else {
		res.status(400).json({ error: err });
	}
};

app.use(errorHandler);
