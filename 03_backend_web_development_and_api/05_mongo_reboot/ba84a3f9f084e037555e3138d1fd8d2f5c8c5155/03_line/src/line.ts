export function line(numberOfStars: number): string {
  let etoiles: string = "";
  for (let i = 1; i <= numberOfStars; i++) {
    etoiles += "*";
  }
  return etoiles;
}
