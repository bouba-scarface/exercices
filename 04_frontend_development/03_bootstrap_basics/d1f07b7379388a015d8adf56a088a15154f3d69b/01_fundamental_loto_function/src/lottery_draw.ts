type Draw = [number, number, number, number, number, number];

export function lottery_draw(): Draw {
  const tableau: Draw = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < 6; i++) {
    tableau[i] = Math.floor(Math.random() * 100);
  }

  return tableau;
}
