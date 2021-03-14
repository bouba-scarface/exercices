function range(number1, number2) {
  // Code the function here.
  const result = [];
  let dep = number1;
  if(number1 < number2){
    for(let i=0; i <=(number2-number1); i++){
      result[i] = dep;
      dep= dep + 1;
    }
    return result;
  }
  else if(number1 > number2){
    for(let i=0; i<=(number1-number2); i++){
      result[i] =dep;
      dep = dep -1;
    }
    return result;
  }
  else {
    result.push(dep);
    return result ;
  }

}




// Do not remove last lines, it is for tests
module.exports = range;
