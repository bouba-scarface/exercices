const menu = require("../eCommerce/menu");
const { read } = require("fs");
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clear = () => console.log("\x1B[2J\x1B[0f");
//variable globale
let nb_choice_beer=0;
let nb_choice_chips=0;
let nb_choice_cheese=0;
let nb_choice_olive=0;{}
let nb_choice_water=0;
let product =[];

product.push({article :"beer", quantite: 300, prix :4 ,cmd:false});
product.push({article :"chips", quantite: 25, prix :2 ,cmd:false});
product.push({article :"cheese", quantite: 50, prix :3 ,cmd:false});
product.push({article :"olives", quantite: 200, prix :1 ,cmd:false});
product.push({article :"waterBottle", quantite: 1000, prix :0.5 ,cmd:false});

function cart(){
  console.log("*************************************************");
  console.log("CART");
  console.log("*************************************************\n");
  console.log("*************************************************\n");
  let total = 0;
  let num =1;
  product.forEach(element => {
    if(element.cmd === true){
      let qt;
      if(element.article ==="beer"){
        qt = nb_choice_beer ;
      }
      else if(element.article === "chips"){
        qt = nb_choice_chips;
      }
      else if(element.article === "cheese"){
        qt = nb_choice_cheese;
      }
      else if(element.article === "olives"){
        qt = nb_choice_olive;
      }
      else if(element.article === "waterBottle"){
        qt = nb_choice_water;
      }
      
      console.log(`${num} - ${element.article} : ${element.prix} € (quantite: ${element.quantite})`);
      total += (element.prix * qt);
      num++;
    }
  });
  
  console.log("*************************************************");
  console.log(`TOTAL ${total} €`);
  console.log("*************************************************\n");
  console.log("1 - Back to menu\n2 - Quit\n");
  reader.question("Choose an action", (choice) => {
    if(choice ==="1" || choice === "2"){
      if(choice === "1"){
        clear();
        menu();
      }
      else if(choice === "2"){
        reader.close();
      }
    }
    else{
      cart();
    }
  });
  
}


function reduire(choice) {
  if(choice ==="1" || choice ==="2" || choice === "3" || choice ==="4" || choice ==="5"|| choice ==="6"|| choice ==="7"){
    if(choice === "1"){
      reader.question("How much? ",(choice) =>{
        if(parseInt(choice) < product[0].quantite){
          product[0].quantite -= parseInt(choice);
          nb_choice_beer +=parseInt(choice);
          product[0].cmd = true;
          //function booleen stock product
          clear();
          shop();
        }
        else{
          clear();
          console.log("stock insuffisant ");
          shop();

        }
      });
    }else if(choice === "2"){
      reader.question("How much? ",(choice) =>{
        if(parseInt(choice) < product[1].quantite){
          product[1].quantite -= parseInt(choice);
          nb_choice_beer +=parseInt(choice);
          product[1].cmd = true;
          clear();
          shop();
        }
        else{
          clear();
          console.log("stock insuffisant");
          shop();

        }
      });
    }
    else if(choice === "3"){
      reader.question("How much? ",(choice) =>{
        if(parseInt(choice) < product[2].quantite){
          product[2].quantite -= parseInt(choice);
          nb_choice_beer +=parseInt(choice);
          product[2].cmd = true;
          clear();
          shop();
        }
        else{
          clear();
          console.log("stock insuffisant");
          shop();

        }
      });
    }
    else if(choice === "4"){
      reader.question("How much? ",(choice) =>{
        if(parseInt(choice) < product[3].quantite){
          product[3].quantite -= parseInt(choice);
          nb_choice_beer +=parseInt(choice);
          product[3].cmd = true;
          clear();
          shop();
        }
        else{
          clear();
          console.log("stock insuffisant");
          shop();

        }
      });
    }
    else if(choice === "5"){
      reader.question("How much? ",(choice) =>{
        if(parseInt(choice) < product[4].quantite){
          product[4].quantite -= parseInt(choice);
          nb_choice_beer +=parseInt(choice);
          product[4].cmd = true;
          clear();
          shop();
        }
        else{
          clear();
          console.log("stock insuffisant");
          shop();

        }
      });
    }
    else if(choice === "6"){
      clear();
      menu();
    }
    else{
      reader.close();
    }
   }
   else{
     clear();
     shop();
   }

  
}

function checkout(){

  console.log("*************************************************");
  console.log("CHECKOUT");
  console.log("*************************************************\n");
  let total = 0;
  let num =1;
  product.forEach(element => {
    if(element.cmd === true){
      let qt;
      if(element.article ==="beer"){
        qt = nb_choice_beer ;
      }
      else if(element.article === "chips"){
        qt = nb_choice_chips;
      }
      else if(element.article === "cheese"){
        qt = nb_choice_cheese;
      }
      else if(element.article === "olives"){
        qt = nb_choice_olive;
      }
      else if(element.article === "waterBottle"){
        qt = nb_choice_water;
      }
      
      console.log(`${num} - ${element.article} : ${element.prix} € (quantite: ${qt})`);
      total += (element.prix * qt);
      num++;
    }
  })  
  const payTotal = () => {
    reader.question(`You have to pay: ${total} `, (choice) => {
    if(parseInt(choice) > total){
      console.log(`Voici votre monnaie : ${choice - total} € `);
      console.log("Thank you!")
      console.log("*************************************************");
      console.log("GOODBYE!");
      console.log("*************************************************\n");
      reader.close();
      //menu();

    }
    else if(parseInt(choice) < total){
      clear();
      console.log("solde insuffisant");
      payTotal();
    }
    else if(parseInt(choice) === total){
      console.log("Thank you!")
      console.log("*************************************************");
      console.log("GOODBYE!");
      console.log("*************************************************\n");
      reader.close();
      //menu();
    }
    
  });
}
payTotal();
} 

function shop(){
  console.log("*************************************************");
  console.log("SHOP");
  console.log("*************************************************");
  let num =1;
  product.forEach(element => {
  console.log(`${num}- ${element.article} ${element.prix}€ ${element.quantite}`);
  num++;
  });
  console.log("6- back to menu\n7- quit")
  reader.question("Choose a product ",reduire);
}
// function menu(){
//   console.log("*************************************************");
//   console.log("MENU");
//   console.log("*************************************************");
//   console.log("1- Buy a product\n2- Show cart\n3- Checkout\n4- Quit\n ");
//   reader.question("Choise an action", (choice) => {
//     if(choice ==="1" || choice ==="2" || choice === "3" || choice ==="4"){

//       if(choice === "1"){
//         shop();
//       }
//       else if(choice === "2"){
//         cart();
//       }
//       else if(choice === "3"){
//         checkout();
//       }
//       else{
//         reader.close();
//       }
//     }
//     else{
//       menu();
//     }
//   });
// }

menu();
