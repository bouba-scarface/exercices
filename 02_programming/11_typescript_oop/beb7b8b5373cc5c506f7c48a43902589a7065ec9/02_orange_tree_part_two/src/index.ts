// Use this file to test your `OrangeTree` class.
import { OrangeTree } from "./OrangeTree";



let i:number =1;
while(i < 100){
  const youngOrangeTree = new OrangeTree(i);
  console.log(youngOrangeTree.age);
  console.log(youngOrangeTree.height);
  console.log(youngOrangeTree.isAlive);
  console.log(youngOrangeTree.ageOneYear);
  i++;
}


