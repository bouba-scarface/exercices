import React from "react";
import type from "../../types/Platform";

const PlatformPage = (): JSX.Element => {
  const [platforms, setPlatform] = React.useState<type.Platform[]>([]);

  const [games, setGames] = React.useState<type.Platform[]>([]);
  const [sel, onClick] = React.useState<string>("");

  React.useEffect(() => {
    fetch("https://videogames-sparta.herokuapp.com/platforms", {
      headers: { accept: "application/json" },
    }).then(async (response) => {
      setPlatform(await response.json());
    });
  }, []);
  React.useEffect(() => {
    fetch(`https://videogames-sparta.herokuapp.com/platforms/${sel}`, {
      headers: { accept: "application/json" },
    })
      .then((response) => response.json())
      .then((games) => setGames(games));
  }, []);

  const lisGames = games.map((gam) => {
    return gam.games.map((game) => {
      return {
        name: game.name,
        slug: gam.slug,
      };
    });
  });

  for (let index = 0; index < lisGames.length; index++) {
    const element = lisGames[index];
    const gameName = element.map((names) => {
      return names.slug === `${sel}` ? { name: names.name } : null;
    });
    console.log(gameName);
  }

  //console.log(lisGames);
  return (
    <div>
      <h1>Platfroms</h1>

      <select
        onChange={(event): void => {
          onClick(event.target.value);
        }}
      >
        {platforms.map((platform, index) => {
          return (
            <option key={platform.name + "-" + index} value={platform.slug}>
              {platform.name}
            </option>
          );
        })}
      </select>

      {/* <ul className="list-group">{lisGames[0][0].name}</ul> */}
    </div>
  );
};

export default PlatformPage;
