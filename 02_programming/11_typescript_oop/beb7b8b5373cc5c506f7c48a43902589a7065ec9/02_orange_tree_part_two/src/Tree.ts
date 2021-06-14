// // Paste your previous `Tree` class here.
// // Code the class here.
// abstract class Tree {
//   //Mes propriétes
//   age : number;
//   height : number;
//   alive : boolean = true;

//   //Mon constructeurs
//   constructor(age:number) {
//     this.age = age;
//     let h :number =0;
//     let rest : number =0;
//     if(this.age <=20){
//       if(this.age >9){
//         rest = this.age - 9;
//       }
//       if(rest >0){
//         h += (9*25) + (rest *10);
//         this.height =h;
//       }
//       else{
//         h +=this.age * 25;
//         this.height =h;
//       }

//     }
//     else{
//       this.height  = 335;
//     }
    
//   }

//   //Mes méthodes
//   abstract ageOneYear():void ;
//   abstract isAlive():boolean ;
//   seed():void{
//     this.age =0;
//     this.height =0;
//     this.alive = true;
//   }
// }




// // Leave the line below for tests to work properly.
// export { Tree };


abstract class Tree {
    age: number;
    height: number;
    alive: boolean = true;
    constructor(age: number) {
      this.age = age;
      this.height = 0;
      if (this.age <= 9) {
        this.height = this.age * 25;
      } else if (this.age >= 10 && this.age <= 20) {
        const height3 = (this.age - 9) * 10;
        this.height = (9 * 25) + height3;
      } else if (this.age > 20){
          this.height = (9 * 25) + (11 * 10);
      }
    }
    abstract isAlive(): boolean;
    abstract ageOneYear(): void;
    seed(): void {
      this.age = 0;
      this.height = 0;
      this.alive = true;
    }
  }
// Leave the line below for tests to work properly.
export { Tree };