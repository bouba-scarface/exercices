import { squareNumber } from "./squareNumber";

export function context(arrayOfNumbers: number[]): number[] {
  // Code the function here
  return arrayOfNumbers.map((element) => {
    return squareNumber(element);
  });
}
