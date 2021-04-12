export function column(numberOfLines: number, lineContent: string): string {
  let etoiles: string = "";
  for (let i = 1; i <= numberOfLines; i++) {
    etoiles += `${lineContent}\n`;
  }
  return etoiles;
}
