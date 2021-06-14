const faker = require("faker");


let id = (firstName, lastName, city,phoneNumber,avatar)=> {
  return { 
    firstName: `${firstName}`,
    lastName:`${lastName}`, 
    city: `${city}`, 
    phoneNumber:`${phoneNumber}` , 
    email: `${firstName}.${lastName}@fake.local`,
    avatar: `${avatar}`,
  };
};


module.exports =id;