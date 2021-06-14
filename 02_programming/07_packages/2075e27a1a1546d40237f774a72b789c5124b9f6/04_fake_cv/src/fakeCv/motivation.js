const faker = require("faker");


let mt = (catchPhrase,description)=> {
  return { 
    catchPhrase:`${catchPhrase}` ,
    description: `${description}`,
    
  }; 
};


module.exports = mt;