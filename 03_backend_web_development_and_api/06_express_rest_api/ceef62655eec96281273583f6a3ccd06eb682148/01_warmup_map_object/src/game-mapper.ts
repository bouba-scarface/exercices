export function gameMapper(games: GameWithALotOfData[]): Game[] {
  const tab = games.map((element) => {
    return { name: element.name, slug: element.slug, cover: element.cover.url };
  });
  return tab;
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
};

export type GameWithALotOfData = {
  name: string;
  slug: string;
  code: number;
  cover: {
    thumbnail: string;
    url: string;
  };
};
