// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```
const triangle =[];
let stars="";
let esp="";
for(let i=5; i>0; i--){
  for(let j=1; j<=i; j++){
    stars +="*";
  }
  triangle.push(esp+stars);
  stars="";
  esp +=" ";
}
for(let i=0; i<5; i++){
  console.log(triangle[i]);
}