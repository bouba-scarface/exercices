function squareDigits(nb) {
  // Code here
  if ( Number.isInteger(nb)) {
    let ch = nb.toString().split("");
    ch.map(element => element *element );
    const sqrt = ch.join(""); 
    return +sqrt ;
  }
  else
  {
    throw "Not an integer";
  }
}



//console.log(squareDigits(2233));

// Leave the line below for tests to work
module.exports = squareDigits;
