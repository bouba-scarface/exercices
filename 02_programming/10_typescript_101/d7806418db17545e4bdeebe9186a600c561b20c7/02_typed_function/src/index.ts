type tuple = [string,number];
function handleTuple(tuple:[string,number]): void {
  tuple.forEach(element => {
    if (typeof element == "string")
    console.log(element + `The type of ${element} is string `);
    if (typeof element == "number")
    console.log(element + `The type of value ${element} is number`);
  });
  
}

// Leave the line below for tests to work properly.
export { handleTuple };



