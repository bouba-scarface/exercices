export function humanPercentage(percentages: number[]): string[] {
  return percentages.map((x) => `${Math.round(x * 100)}%`);
}
