// There should be no import in this file. Only exports!
let fillWithLitersOfCoffee =0;
function putLitersOfCoffee(quantityInCentiliters){
  fillWithLitersOfCoffee +=quantityInCentiliters;
  return true;
}

function consumeLitersOfCoffee(quantityInCentiliters){
  if (fillWithLitersOfCoffee - quantityInCentiliters >= 0) {
    fillWithLitersOfCoffee -= quantityInCentiliters;
    return true;
  } else {
    return false;
  }
}


export  {putLitersOfCoffee,consumeLitersOfCoffee};