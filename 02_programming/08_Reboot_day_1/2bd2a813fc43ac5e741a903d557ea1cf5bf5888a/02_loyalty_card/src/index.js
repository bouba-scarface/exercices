import readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let array_id = [];

const human_test = 
{
    firstName: null,
    lastName: null,
    email: null,
    birthday: null,
    city: null,
    counter: null,
};

console.log("Welcome\n","   1 - add customer\n","   2 - access customer data\n","   quit\n");

reader.question("votre choix", (choice) => {
  if(choice === "1"){
    reader.question("first name", (fname) =>{
      human_test.firstName = fname;
    });
  }
  
});




