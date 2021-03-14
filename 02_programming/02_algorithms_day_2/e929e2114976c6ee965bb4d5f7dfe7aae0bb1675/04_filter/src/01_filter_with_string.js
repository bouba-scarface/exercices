// Your code here
//   let arrayFilter =[];
//   array.forEach(element => {
//     if(str === "even"){
//       if(element % 2 === 0){
//         arrayFilter.push(element);
//       }
//     }
//     else if(str === "odd"){
//       if(element % 2 !== 0){
//         arrayFilter.push(element);
//       }
//     }
//     else
//       console.log("choose beetwen enven and odd");
//   });
//   return arrayFilter ;
// }

// const filtre = stri =>{
//   if((stri === "even") && (! (stri % 2) ){
//     return true;
//   }

// }

function isPair(number){
  return !(number%2);
}

function isImpair(number){
  return number%2;
}

function filter(array, str) {
  const newArray=[];
  if (array.length > 0){
    if (str==="even"){
      array.forEach(element => {
        if (isPair(element))
          newArray.push(element);
      });
      return newArray;
    }
    else if (str==="odd"){
      array.forEach(element => {
        if (isImpair(element))
          newArray.push(element);
      }) ;
      return newArray;
    }
    else
      return array;  
  }
  return array ;
}
  


//[].forEach( number=> console.log("toto"); );
//console.log(filter([1, 2, 3, 4, 5], "odd"));

//console.log(filter('', "even"));
// do not remove this line, it is for tests
module.exports = filter;
