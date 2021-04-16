import express, { Request, Response } from "express";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();
  const bodyParseMiddleWare = express.json();
  //app.use(bodyParseMiddleWare);

  app.get("/", (request: Request, response: Response) => {
    response.status(400).json({ error: "Wrong resource" });
  });

  app.get("/games", (request: Request, response: Response) => {
    gameModel.getAll().then((games) => {
      response.json(games);
    });
  });

  app.get("/games/:game_slug", (request, response) => {
    gameModel.findBySlug(request.params.game_slug).then((game) => {
      if (!game) {
        response.status(404).end();
      } else {
        response.json(game);
      }
    });
  });

  app.get("/platforms", (request: Request, response: Response) => {
    gameModel.getPlatforms().then((platforms) => {
      response.json(platforms);
    });
  });

  app.get("/platforms/:platform_slug", (request: Request, response: Response) => {
    gameModel.findByPlatform(request.params.platform_slug).then((gamesForPlatform) => {
      response.json(gamesForPlatform);
    });
  });

  app.post("/games", bodyParseMiddleWare, (request: Request, response: Response) => {
    const game = request.body;
    if (game.name === undefined || game.slug === undefined) {
      response.status(400).end();
    } else
      gameModel.insertGame(game).then(() => {
        response.status(201).json(game);
      });
  });

  return app;
}
