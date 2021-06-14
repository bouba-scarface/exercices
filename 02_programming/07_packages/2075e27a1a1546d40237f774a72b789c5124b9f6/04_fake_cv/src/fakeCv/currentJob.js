const faker = require("faker");

let job = (companyName, jobDescriptor, jobTitle)=> {
  return { 
    companyName: `${companyName}`,
    jobDescriptor: `${jobDescriptor}`,
    jobTitle: `${jobTitle}`,
  }; 
};
module.exports = job;