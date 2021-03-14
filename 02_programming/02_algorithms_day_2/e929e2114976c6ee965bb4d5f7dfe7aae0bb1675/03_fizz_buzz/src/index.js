function fizzBuzz(list) {
  // Code the function here.
  let tableau =[];
  list.forEach( element =>{
    
    if( (element % 3 === 0) && (element % 5 === 0) ){
      tableau.push("FizzBuzz");
    }
    else if(element % 3 === 0){
      tableau.push("Fizz");
    }
    else if(element % 5 === 0){
      tableau.push("Buzz");
    }
    else{
      tableau.push(element);
    }
  });
  return tableau ;
}

//console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
