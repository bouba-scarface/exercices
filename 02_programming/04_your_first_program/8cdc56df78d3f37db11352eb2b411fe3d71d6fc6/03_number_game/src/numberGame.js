function loop(reader,stringInvalue, mysterynumber, max, min) {
  if (Number.isInteger(stringInvalue)) {
    if (stringInvalue > max || stringInvalue < min) {
      console.log("Number is between");
      reader.question("Enter a number ", (input) => {
        let stringInvalue = parseInt(input);
        loop(reader,stringInvalue, mysterynumber, max, min);
      });
    } else if (stringInvalue < mysterynumber) {
      console.log("Too low");
      reader.question("Enter a number ", (input) => {
        let stringInvalue = parseInt(input);
        loop(reader,stringInvalue, mysterynumber, max, min);
      });
    } else if (stringInvalue > mysterynumber) {
      console.log("Too hight");
      reader.question("Enter a number ", (input) => {
        let stringInvalue = parseInt(input);
        loop(reader,stringInvalue, mysterynumber, max, min);
      });
    } else if (stringInvalue === mysterynumber) {
      console.log("You won!");
      reader.close();
    }
  } else {
    console.log("This was not a number");
    reader.question("Enter a number ", (input) => {
      let stringInvalue = parseInt(input);
      loop(reader,stringInvalue, mysterynumber, max, min);
    });
  }
}

function numberGame(reader, min = 1, max = 100) {
  // code here
  const mysterynumber = Math.round(Math.random() * (max - min) + min);
  console.log("Welcome!\nYou have to find the right number, between 1 and 100!\nGood luck!!");
  reader.question("Enter a number", (input) => {
    let stringInvalue = parseInt(input);
    loop(reader,stringInvalue, mysterynumber, max, min);
  });
}

module.exports = numberGame;
