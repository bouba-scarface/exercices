const readline = require("readline");

const numberGameWithStats = require("./numberGameWithStats");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let europe :string[] = ["Belgique", "France", "Italie", "Allemangne","Espagne"];

console.log("***Welcome to HOLIDAY LOCATION FINDER***");
console.log(`This program will help you find a location based on the continent you will input.\nHere is the list of 
continent to chose from:\n
- Europe\n
- North America\n
- South America\n
- Asia\n
- Africa\n
- Oceania`);
reader.question("Please input your choice:", (choice) =>{

});


numberGameWithStats(reader);
