// Copy your function greetEveryone here
type ParamRest = string[];

export function greetEveryone(...theArgs: ParamRest): void {
  // Code your function here
  theArgs.forEach((name) => {
    console.log(`Welcome to ${name}`);
  });
}
