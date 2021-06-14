import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
  //Mes attributs
  oranges :string[] =[];

  //Mon constructeur
  constructor(age:number){
    super(age);    
  }

  


  ageOneYear(): void{
    this.age++;
    this.isAlive();
    this.growOranges();
    let h :number =0;
    let rest : number =0;
    if(this.age <=20){
      if(this.age >9){
        rest = this.age - 9;
      }
      if(rest >0){
        h += (9*25) + (rest *10);
        this.height =h;
      }
      else{
        h +=this.age * 25;
        this.height =h;
      }

    }
    else{
      this.height  = 335;
    }
  }

  isAlive(): boolean{
  

    if (this.age > 99){
      this.alive=false;
      return false;
    } else if (this.age >= 50 && this.alive) {
      this.alive = (Math.random() > ((this.age - 49) / 50)) ? true : false;
      //(Math.random() > ((this.age - 49) / 50));
      return this.alive;
    } else if(this.age < 50){
      this.alive=true;
      return true;
    }
   
  }

  //Mes methodes
  growOranges():void{
    if(this.age >=0 && this.age <=4){
      this.oranges = [];
    }
    else if(this.age >=5 && this.age <=10){
      this.oranges = ["🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊"];
    }
    else if(this.age >=11 && this.age <=20){
      this.oranges = ["🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊"];
    }
    else if(this.age >=21 && this.age <=40){
      this.oranges = ["🍊","🍊","🍊","🍊","🍊"];
    }
  }

  pickAnOrange(): void{
    //if(this.oranges !== []){
      this.oranges.pop();
    //}
  }
}

  
// Leave the line below for tests to work properly.
export { OrangeTree };
