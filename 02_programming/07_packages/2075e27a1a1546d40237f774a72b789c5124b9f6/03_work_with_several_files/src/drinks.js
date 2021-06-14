import  * as container from "./container.js";

let longCoffee= function (quantityInCentiliters) {
  return container.consumeLitersOfCoffee(quantityInCentiliters);
};

let expresso = function(quantityInCentiliters){
  return container.consumeLitersOfCoffee(quantityInCentiliters);
};


export {longCoffee,expresso};
