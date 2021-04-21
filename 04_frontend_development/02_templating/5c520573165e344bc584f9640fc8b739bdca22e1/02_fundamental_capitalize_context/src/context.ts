import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  // Code here and use the function `capitalize` from exercise one
  const arraySentence = sentence.split(" ");
  const arrayUpper = arraySentence.map((word) => capitalize(word));
  return arrayUpper.join(" ");
}
