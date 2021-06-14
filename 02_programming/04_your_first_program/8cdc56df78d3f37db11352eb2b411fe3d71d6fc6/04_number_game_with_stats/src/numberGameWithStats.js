function numberGameWithStats(reader, min = 1, max = 100) {
  // Code here
  const numberGameInt = (minN, maxN) => Math.round(Math.random() * (maxN - minN) + minN);
  const number = numberGameInt(min, max);
  let nbTo=0;
  //console.log("Welcome! \n You have to find the right number, between 1 and 100! \n Good luck!!\n");
  const callbackFindNumber = (responseUser) => {
    nbTo+=1;
    if (!Number.isInteger(parseInt(responseUser))) {
      console.log("This was not a number");
      reader.question("Enter a number\n", callbackFindNumber);
    } else if (parseInt(responseUser) === number) {
      console.log("You won!");
      (nbTo===1) ? console.log("Wow first try!") : console.log(`You made ${nbTo} tries`);
      reader.close();
    }
    else {
      //nbTo++;
      if (parseInt(responseUser) > max || parseInt(responseUser) < min) console.log("number is between");
      else if (parseInt(responseUser) > number) console.log("Too high");
      else console.log("Too low");
      reader.question("Enter a number\n", callbackFindNumber);
    }
  };
  reader.question("Enter a number\n", callbackFindNumber);

}

module.exports = numberGameWithStats;
