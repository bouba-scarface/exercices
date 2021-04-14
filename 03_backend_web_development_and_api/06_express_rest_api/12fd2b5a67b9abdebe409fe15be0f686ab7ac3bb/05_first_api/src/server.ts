import express, { Request, Response } from "express";
import games from "./games.json";

const app = express();
app.get("/", (request: Request, response: Response) => {
  //console.log(request.headers);
  response.status(400);
  response.json({ error: "Wrong resource" });
  response.end();
});
app.get("/games", (request: Request, response: Response) => {
  response.status(200);
  const game = games.map((element) => {
    return { name: element.platform.name, slug: element.platform.slug, cover: element.platform.platform_logo_url };
  });
  response.json(game).end();
});
app.get("/games/:game_slug", (request: Request, response: Response) => {
  const game = games.find((element) => {
    if (request.params.game_slug === element.slug) {
      return element;
    } else {
      return undefined;
    }
  });
  if (game) {
    response.status(200).json(game).end();
  } else {
    response.status(404).end();
  }
});

app.get("/platforms/:platform_slug", (request: Request, response: Response) => {
  const game = games.filter((element) => {
    if (request.params.platform_slug === element.platform.slug) {
      return {
        name: element.platform.name,
        slug: element.platform.slug,
        platform_logo_url: element.platform.platform_logo_url,
      };
    }
  });
  if (game) {
    response.status(200).json(game).end();
  } else {
    response.status(404).end();
  }
});

app.get("/platforms", (request: Request, response: Response) => {
  const game = games.map((element) => {
    return {
      name: element.name,
      slug: element.slug,
    };
  });
  //const conv = new Set(game);
  if (game) {
    response.status(200).json(game);
  } else {
    response.status(404).end();
  }
});

export { app };
