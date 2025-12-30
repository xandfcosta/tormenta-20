import express, { type Express } from "express";
import { characterService } from "@/services/CharacterService";

const characterRoute: Express = express();

characterRoute.get("/", async (_req, res) => {
	const list = await characterService.list();
	res.json(list);
});

characterRoute.get("/overview", async (_req, res) => {
	const list = await characterService.listOverviews();
	res.json(list);
});

characterRoute.get("/:id", async (req, res) => {
	const character = await characterService.getById(+req.params.id);
	res.json(character);
});

characterRoute.get("/:id/overview", async (req, res) => {
	const character = await characterService.getOverview(+req.params.id);
	res.json(character);
});

characterRoute.get("/:id/expertisies", async (req, res) => {
	const character = await characterService.getExpertisies(+req.params.id);
	res.json(character);
});

characterRoute.get("/:id/inventory", async (req, res) => {
	const character = await characterService.getInventory(+req.params.id);
	res.json(character);
});

characterRoute.get("/:id/abilities", async (req, res) => {
	const character = await characterService.getAbilities(+req.params.id);
	res.json(character);
});

characterRoute.post("/", async (req, res) => {
	const character = await characterService.create(req.body);
	res.json(character);
});

characterRoute.delete("/:id", async (req, res) => {
	await characterService.delete(+req.params.id);

	req.app.get("io").emit("character:deleted", {
		characterId: +req.params.id,
	});

	res.sendStatus(204);
});

export { characterRoute };
