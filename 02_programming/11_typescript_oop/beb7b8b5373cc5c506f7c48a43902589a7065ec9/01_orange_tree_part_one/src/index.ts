// Code the class here.
abstract class Tree {
  //Mes propriétes
  age : number;
  height : number;
  alive : boolean = true;

  //Mon constructeurs
  constructor(age) {
    this.age = age;
    let h :number =0;
    let rest : number =0;
    if(age <=20){
      if(age >9){
        rest = age - 9;
      }
      if(rest >0){
        h += (9*25) + (rest *10);
        this.height =h;
      }
      else{
        h +=age * 25;
        this.height =h;
      }

    }
    else{
      this.height  = 335;
    }
    
  }

  //Mes méthodes
  abstract ageOneYear():void ;
  abstract isAlive():boolean ;
  seed():void{
    this.age =0;
    this.height =0;
    this.alive = true;
  }

}

// Leave the line below for tests to work properly.
export { Tree };
