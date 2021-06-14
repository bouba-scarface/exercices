import { Collection } from "mongodb";
export type Game = {
  name: string;
  slug: string;
  [key: string]: any;
};

export type Platform = {
  name: string;
  slug: string;
  [key: string]: any;
};

export class GameModel {
  collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }

  getAll(): Promise<Game[]> {
    return this.collection
      .find()
      .toArray()
      .then((docs) => {
        return docs.map((game) => {
          return {
            name: game.name,
            slug: game.slug,
            cover: game.cover_url,
          };
        });
      });
  }

  findBySlug(slug: string): Promise<Game | null> {
    return this.collection
      .find()
      .toArray()
      .then((docs) => {
        const jeux = docs.find((game) => {
          if (game.slug === slug) {
            return game;
          } else {
            return undefined;
          }
        });
        if (jeux) {
          return jeux;
        } else {
          return null;
        }
      });
  }

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return this.collection
      .find()
      .toArray()
      .then((docs) => {
        return docs.filter((game) => {
          if (game.platform.slug === platform_slug) {
            return {
              name: game.platform.name,
              slug: game.platform.slug,
              platform_logo_url: game.platform_logo_url,
            };
          }
        });
      });
  }

  getPlatforms(): Promise<Platform[]> {
    return this.collection
      .find()
      .toArray()
      .then((docs) => {
        const result: Platform[] = [];
        docs.forEach((game) => {
          if (
            result.find((platform) => {
              return game.platform.slug === platform.slug;
            }) === undefined
          ) {
            result.push({
              name: game.platform.name,
              slug: game.platform.slug,
            });
          }
        });
        return result;
      });
  }
}
