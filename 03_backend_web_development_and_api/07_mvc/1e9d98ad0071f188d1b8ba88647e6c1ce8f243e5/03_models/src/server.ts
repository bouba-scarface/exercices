import express, { Request, Response } from "express";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();

  app.get("/", (request: Request, response: Response) => {
    response.status(400).json({ error: "Wrong resource" });
  });

  app.get("/games", (request: Request, response: Response) => {
    response.json(gameModel.getAll());
  });

  app.get("/games/:game_slug", (request: Request, response: Response) => {
    const game = gameModel.findBySlug(request.params.game_slug);

    if (!game) {
      response.status(404).end();
    } else {
      response.json(game);
    }
  });

  app.get("/platforms", (request: Request, response: Response) => {
    const platforms = gameModel.getPlatforms();

    response.json(platforms);
  });

  app.get("/platforms/:platform_slug", (request: Request, response: Response) => {
    const gamesForPlatform = gameModel.findByPlatform(request.params.platform_slug);

    response.json(gamesForPlatform);
  });

  return app;
}
