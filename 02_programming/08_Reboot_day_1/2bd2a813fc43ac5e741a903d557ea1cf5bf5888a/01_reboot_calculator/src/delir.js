import readline from "readline";
function calculator(){
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let resultat = 0;
  console.log("Ready to compute operations!");
  console.log("****************************");
  const firstNumber = reader.question("Enter the first number ", (value1) => {
      if(! Number.isInteger(value1)){
        reader.question("Enter a number valid", firstNumber());
      }
      else
      {
        reader.question("Choose an operation: [ + - * / ]",operator);
        function operator(opera){
          if(opera === "+" || opera === "-" || opera === "*" || opera === "/"){
            reader.question("Enter the second number",operande2);
            function operande2(value2){
              if(! Number.isInteger(value2)){
                reader.question("Enter a number valid",operande2);
              }
              else{
                if(opera === "+"){
                  resultat = parseInt(value1) + parseInt(value2);
                  reader.close();
                  return resultat;
                }
                else if(opera === "-"){
                  resultat = parseInt(value1) - parseInt(value2);
                  reader.close();
                  return resultat;
                }
                else if(opera === "*"){
                  resultat = parseInt(value1) * parseInt(value2);
                  reader.close();
                  return resultat;
                }
                else if(opera === "/"){
                  resultat = parseInt(value1) / parseInt(value2);
                  reader.close();
                  return resultat;
                }
              }
            }
          }
          else{
            reader.question("Choose an operation valid: [ + - * / ]",operator);
          }
        }
      }
  });
  
}

calculator();