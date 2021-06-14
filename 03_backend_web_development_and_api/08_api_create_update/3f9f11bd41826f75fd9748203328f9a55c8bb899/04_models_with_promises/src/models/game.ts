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
  collection: Game[];

  constructor(collection: Game[]) {
    this.collection = collection;
  }

  getAll(): Promise<Game[]> {
    return new Promise((resolve) => {
      resolve(
        this.collection.map((element) => {
          return {
            name: element.name,
            slug: element.slug,
            cover: element.cover_url,
          };
        }),
      );
    });
  }

  findBySlug(slug: string): Promise<Game | null> {
    return new Promise((resolve) => {
      const game = this.collection.find((element) => {
        if (element.slug === slug) {
          return element;
        } else {
          return undefined;
        }
      });

      if (game) {
        resolve(game);
      } else {
        resolve(null);
      }
    });
  }

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return new Promise((resolve) => {
      resolve(
        this.collection.filter((element) => {
          if (element.platform.slug === platform_slug) {
            return {
              name: element.platform.name,
              slug: element.platform.slug,
              platform_logo_url: element.platform.platform_logo_url,
            };
          }
        }),
      );
    });
  }

  getPlatforms(): Promise<Platform[]> {
    return new Promise((resolve) => {
      const result: Platform[] = [];
      this.collection.forEach((game) => {
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
      resolve(result);
    });
  }
}
