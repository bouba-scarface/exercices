export function findGameFromSlug(games: Game[], slug: string): Game {
  const sl = games.find((game) => {
    if (game.slug === slug) {
      return game.slug;
    } else {
      return undefined;
    }
  });
  return sl;
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
  platform: string;
};
