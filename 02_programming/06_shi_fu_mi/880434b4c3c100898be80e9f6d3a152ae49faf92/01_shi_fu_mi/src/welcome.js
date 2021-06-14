const welcome = (reader,rock,paper,scissors,clear) => {
  //recuperation de la saisie du player
  console.log("Welcome to ShiFuMi !");
  reader.question("Please choose a move\n Rock Paper Scissors? [1, 2, 3]\n> ", move);
  const cpu =Math.round(Math.random() * (3 - 1) + 1);
  function move(choise){
     // Le choix du player
     if(choise ==="1" || choise ==="2" || choise ==="3"){
      clear();
      if(choise === "1" ){
        console.log("Player move \n");
        rock.forEach(element => {
          console.log(element);
        });
     }
     else if(choise === "2"){
      console.log("Player move \n");
      paper.forEach(element=>{
        console.log(element);
      });
     }
     else if(choise === "3"){
      console.log("Player move \n");
      scissors.forEach(element=>{
        console.log(element);
      });
     }
     //les choix du cpu
     if(cpu === 1){
      console.log("Cpu move \n");
      rock.forEach(element=>{
        console.log(element);
      });
    }
    else if(cpu === 2){
      console.log("Cpu move \n");
      paper.forEach(element=>{
        console.log(element);
      });
    }
    else if(cpu === 3){
      console.log("Cpu move \n");
      scissors.forEach(element=>{
        console.log(element);
      });
    }
     }else{
      clear();
      reader.question("Please choose a move between 1 and 3\n Rock Paper Scissors? [1, 2, 3]\n> ", move);
     }
     //comparer le choix du player et du cpu et determiner le gagnant
     if( (choise === "1" && cpu === 1) || (choise === "2" && cpu === 2) || (choise === "3" && cpu === 3) ){
       //Egalité
       console.log("Draw \n");
     }
     else if( (choise === "2" && cpu ===1 ) || (choise ==="1" && cpu ===3) || (choise ==="3" && cpu ===2) ){
      //user gagne
      console.log("The Player won!! \n");
     }
     else{
       //cpu gagne
       console.log("The Cpu won!! \n");
     }
     //Redemarer le jeu
     reader.question("Play again ?(Y,n)\n> ", (again) =>{
      console.log(again);

      if(again === "n"){
        console.log("Thanks for the game 😉");
       reader.close();
      }
      else if(again ==="Y" ){
        clear();
       reader.question("Please choose a move\n Rock Paper Scissors? [1, 2, 3]\n> ", move);
      }
      else{
        
      }
    });
  }
};


module.exports = welcome;