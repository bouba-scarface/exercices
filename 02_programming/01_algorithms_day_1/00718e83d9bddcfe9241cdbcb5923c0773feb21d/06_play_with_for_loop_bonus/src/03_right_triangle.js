// ## Right triangle of size 5
//
//
// ```
// *
// **
// ***
// ****
// *****
// ```

const triangle =[];
let stars="";
for(let i=0; i<5; i++){
  for(let j=0; j<=i ; j++){
    stars +="*";
  }
  triangle.push(stars);
  stars="";
}
for(let i=0; i<5; i++){
  console.log(triangle[i]);
}