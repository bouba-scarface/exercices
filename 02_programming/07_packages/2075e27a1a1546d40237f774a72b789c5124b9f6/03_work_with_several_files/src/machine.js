import * as container from "./container.js";
import * as drinks from "./drinks.js";

function fillWithLitersOfCoffee(quantityInCentiliters){
  return container.putLitersOfCoffee(quantityInCentiliters);
}

function longCoffee(){
  return drinks.longCoffee(0.15);
}
function expresso(){
  return drinks.expresso(0.08);
}

export {fillWithLitersOfCoffee,longCoffee,expresso};