// ## Iteration on arrays with filter using while
//
// -  Create an array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each odd values of the table.
const literalDigits= ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let i =0;
while(i < literalDigits.length){
  if((literalDigits[i] === "one") || (literalDigits[i] === "three") || (literalDigits[i] === "five") || (literalDigits[i] === "seven") || (literalDigits[i] === "nine") )
    console.log(literalDigits[i]);
  i++;
}