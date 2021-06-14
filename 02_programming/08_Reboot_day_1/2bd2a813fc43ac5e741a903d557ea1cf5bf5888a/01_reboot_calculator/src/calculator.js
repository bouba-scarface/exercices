/*
on demande le nombre1
ondemande l'operatuer
on demande le nombre 2
on fais le calcul
on afiche le resultat */
import readline from "readline";
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let resultOperation = 0;

function calculator(value1, operator, value2) {  
  if (operator === "+") {
    resultOperation = parseInt(value1) + parseInt(value2);
    return console.log(resultOperation);
  } else if (operator === "-") {
    resultOperation = parseInt(value1) - parseInt(value2);
    return console.log(resultOperation);
  } else if (operator === "*") {
    resultOperation = parseInt(value1) * parseInt(value2);
    return console.log(resultOperation);
  } else if (operator === "/" && value2 === "0") {
    console.log("l'operation n'est pas possible");
  } else {
    resultOperation = parseInt(value1) / parseInt(value2);
    return console.log(resultOperation);
  }
}

const askFirstNumber = () => {
  reader.question("entre un premier nombre\n", (userInput) =>{
    const userInputParsed = parseInt(userInput);
    if (!(Number.isInteger(userInputParsed))) {
      console.log("mauvaise entréé\n");
      askFirstNumber();
    }
    else{
        reader.question("Choiser son operation [ + , - , * , / ]\n", (userInput) =>{
          if (userInput === "+" || userInput === "-" || userInput === "*" || userInput === "/") {
            const askSecondNumber = () => {
              reader.question("entre un deuxieme nombre\n", (userInput) =>{
                const userInputParsed = parseInt(userInput);
                if (!(Number.isInteger(userInputParsed))) {
                  console.log("mauvaise entréé\n");
                  askSecondNumber();
                }
                else{
                  calculator(askFirstNumber,operator,askSecondNumber);
                  reader.close();
                }
              });
            };
          }
          else{
            operator();
          }
        });  
    }; 
  });
};




askFirstNumber();


// reader.question("entre un premier nombre\n", (userInput) =>{
//   if (!(Number.isInteger(userInput))) {
//     reader.question("wrong input\n", userInput);
//   }
//   else{
//     console.log("test");
//     const operator = reader.question("Choiser son operation [ + , - , * , / ]\n", () => {
//       if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
//         const secondNumber = reader.question("entre un deuxieme nombre\n", () =>{
//           if(!(Number.isInteger(secondNumber))) {
//             reader.question("wrong input\n", secondNumber);
//           }
//           else{
//             calculator(firstNumber,operator,secondNumber);
//             reader.close();
//           }
//         });
//       }
//       else{
//         reader.question("wrong input\n", operator);
//       }
//     });
//   }
// });


// function number1 (userInput) {
//   if(!(Number.isInteger(userInput))) {
//     reader.question("wrong input\n", number1);
//   }
//   else{
//     reader.question("Choiser son operation [ + , - , * , / ]\n", signOperator);
//   }
//   function signOperator(userIntput) {
//     if (userIntput === "+" || userIntput === "-" || userIntput === "*" || userIntput === "/") {
//       reader.question("entre un deuxieme nombre\n", number2);
//     }
//     function number2() {
//       if(!(Number.isInteger(userInput))) {
//         reader.question("wrong input\n", number2);
//       } else {
//         calculator(number1,signOperator,number2);
//         reader.close(); 
//       }
//     }
//   }
// }


