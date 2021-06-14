import { rl } from "../interface";
function ask(question: string, reader = rl): Promise<string> {
  // Your code goes here
  return new Promise((resolve, reject) => {
    reader.question(`${question}`, (input) => {
      if (input !== "") {
        resolve(input);
      } else {
        reject(new Error("Invalid input"));
      }
    });
  });
}

// Leave line below for tests to work properly
export default ask;
