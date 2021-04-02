export function rectangle(width: number, height: number): string {
  let rectangle: string = "";
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      rectangle += "*";
    }
    rectangle += "\n";
  }
  return rectangle;
}
