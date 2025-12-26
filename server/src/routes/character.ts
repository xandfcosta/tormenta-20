import express, { type Express } from "express";
import { attackViewService } from "@/services/AttackViewService";
import { characterService } from "@/services/CharacterService";
import { characterViewService } from "@/services/CharacterViewService";

const characterRoute: Express = express();

// CREATE
characterRoute.post("/", async (req, res) => {
	const character = await characterService.create(req.body);
	res.json(character);
});

// LIST
characterRoute.get("/", async (_req, res) => {
	const list = await characterService.list();
	res.json(list);
});

// GET RAW
characterRoute.get("/:id", async (req, res) => {
	const character = await characterService.getById(+req.params.id);
	res.json(character);
});

// GET RESOLVED (IMPORTANT)
characterRoute.get("/:id/view", async (req, res) => {
	const view = await characterViewService.getResolved(+req.params.id);
	res.json(view);
});

// UPDATE (out-of-session only)
characterRoute.patch("/:id", async (req, res) => {
	const character = await characterService.update(+req.params.id, req.body);

	req.app.get("io").emit("character:updated", {
		characterId: character.id,
	});

	res.json(character);
});

// DELETE
characterRoute.delete("/:id", async (req, res) => {
	await characterService.delete(+req.params.id);

	req.app.get("io").emit("character:deleted", {
		characterId: +req.params.id,
	});

	res.sendStatus(204);
});

characterRoute.get("/:id/attacks", async (req, res) => {
	const attacks = await attackViewService.list(+req.params.id);
	res.json(attacks);
});

export { characterRoute };
