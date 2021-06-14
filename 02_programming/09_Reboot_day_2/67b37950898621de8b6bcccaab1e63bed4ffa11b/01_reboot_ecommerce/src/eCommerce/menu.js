const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const menu= () => {
  console.log("*************************************************");
  console.log("MENU");
  console.log("*************************************************");
  console.log("1- Buy a product\n2- Show cart\n3- Checkout\n4- Quit\n ");
  reader.question("Choise an action", (choice) => {
    if(choice === "1"){
        shop();
    }
    else if(choice === "2"){
      
      cart();
    }
    else if(choice === "3"){
      checkout();
    }
    else{
      reader.close();
    }
  });
};


module.exports = menu;