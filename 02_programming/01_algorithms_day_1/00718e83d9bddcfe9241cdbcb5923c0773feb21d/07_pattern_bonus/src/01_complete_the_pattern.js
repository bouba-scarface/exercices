// Modify this value to test with other values
/*
```
4321;
432;
43;
4;
```
*/

const numberOfLine = 5;
// Your code here ⬇
let nombres="";
let ch = [];
let nb =0;
while(nb < numberOfLine){
  for(let i=numberOfLine; i>= (nb +1); i--){
    nombres +=i;
  }
  ch.push(nombres);
  nombres="";
  nb++;
}
for(let i=0; i<numberOfLine; i++){
  console.log(ch[i]);
}
