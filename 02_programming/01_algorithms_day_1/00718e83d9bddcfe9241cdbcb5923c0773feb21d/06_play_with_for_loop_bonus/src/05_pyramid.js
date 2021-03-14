// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

const triangle =[];
let stars="";
let esp=" ";
for(let i=0; i<4; i++){
  //Gestion du nombre d'epace sur chaque ligne
  for(let j=1; j<(4-i); j++){
    esp +=" ";
  }
  //Gestion du nombre d'etoile sur chaque ligne
  if(i === 0){
    stars +="*";
  }else{
    for(let k=0; k<(2*i+1); k++){
      stars +="*";
    }
  }
  //affectation des etoiles a mon array
  triangle.push(esp + stars);
  stars="";
  esp=" ";
}
for(let i=0; i<4; i++){
  console.log(triangle[i]);
}