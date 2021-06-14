class Bird {
  // Write your code here.
  age : number;
  constructor(age:number){
    this.age = age;
  }
  sing(){
    console.log("Cui cui");
  }
  fly(time:number){
    if(this.age <=1){
      console.log("The bird is too young to fly");
    }
    else{
      if(this.age > 1 && this.age <=3){
        console.log(`The bird flew in ${time * 1} meters in ${time} seconds.`);
      }
      if(this.age > 3){
        console.log(`The bird flew in ${time * 2} meters in ${time} seconds.`);
      }
    }

   
  }

}

// Leave the line below for tests to work properly.
export { Bird };
