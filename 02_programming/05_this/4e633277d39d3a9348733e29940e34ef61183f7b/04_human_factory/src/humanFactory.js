const humanFactory = (humanData ={}) => {
  let human = {
    firstName:"John",
    lastName: "Doe",
    genre: "male",
    job: "unemployed",
    fullname: function(){
      console.log(`${this.firstName} ${this.lastName}`);
    },
    introduction: function(){
      console.log(`Hello! My name is ${this.firstName} ${this.lastName}.`);
    },
  };
  if(Object.entries(humanData).length >0){
    let newHuman={};
    if(humanData.genre === "female"){
      newHuman ={
        ...human,
        ...humanData,
        firstName:"Jane",
      };
    }else{
      newHuman ={
        ...human,
        ...humanData,
      };
    }
    return console.log(newHuman);
  }
  else{
    return console.log(human);
  }
};


/*
const createHumans = (humans) => {
  // code here
};
module.exports = {
  humanFactory,
  createHumans,
};
*/