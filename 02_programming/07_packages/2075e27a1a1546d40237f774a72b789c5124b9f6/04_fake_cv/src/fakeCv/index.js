const faker = require("faker");
const job = require("../fakeCv/currentJob");
const mt = require("../fakeCv/motivation");
const id = require("../fakeCv/identity");



let currentJob = job(faker.company.companyName(), faker.name.jobDescriptor(), faker.name.jobTitle()) ;
let motivation = mt(faker.company.catchPhrase(),"Lorem Ipsum");
let identity = id(faker.name.firstName(), faker.name.lastName(), faker.address.city(), faker.phone.phoneNumber(),faker.image.avatar() );

let fakeCv =() => {
  return {
    identity:{...identity,},
    motivation:{...motivation,},
    currentJob:{...currentJob,},  
  };
};

console.log(fakeCv());

module.exports = fakeCv;