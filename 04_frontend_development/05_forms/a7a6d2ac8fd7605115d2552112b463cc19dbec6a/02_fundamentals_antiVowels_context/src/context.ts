import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

const sentence = "This is a sentence";
export const context = (sentence: string) => {
  // Code your function for context here
  const sentenceSplit = sentenceSplitter(sentence);
  sentenceSplit;
  const sentenceNormal = sentenceSplit.filter((word) => {
    if (
      word.substr(0, 1).toUpperCase() !== "A" &&
      word.substr(0, 1).toUpperCase() !== "E" &&
      word.substr(0, 1).toUpperCase() !== "I" &&
      word.substr(0, 1).toUpperCase() !== "O" &&
      word.substr(0, 1).toUpperCase() !== "U" &&
      word.substr(0, 1).toUpperCase() !== "Y"
    ) {
      return word;
    }
  });

  return sentenceJoiner(sentenceNormal);
};

context(sentence);
