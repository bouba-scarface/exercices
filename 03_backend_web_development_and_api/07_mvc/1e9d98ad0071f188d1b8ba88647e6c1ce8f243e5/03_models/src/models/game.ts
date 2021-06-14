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

  getAll(): Game[] {
    return this.collection.map((element) => {
      return { name: element.name, slug: element.slug, cover: element.cover };
    });
  }

  findBySlug(slug: string): Game | null {
    const game = this.collection.find((element) => {
      if (element.slug === slug) {
        return element;
      } else {
        return undefined;
      }
    });
    if (game) {
      return game;
    } else {
      return null;
    }
  }

  findByPlatform(platform_slug: string): Game[] {
    return this.collection.filter((element) => {
      if (element.platform.slug === platform_slug) {
        return {
          name: element.platform.name,
          slug: element.platform.slug,
          platform_logo_url: element.platform.platform_logo_url,
        };
      }
    });
  }


  //Utilisé reduce(accumulateur, element)
  getPlatforms(): Platform[] {
    //trier le tableau
    const games= this.collection.map((element) => {
      return {
        name: element.name,
        slug: element.slug,
      };
    });
    //recuperer le slug objet
  }
}
