function sayHelloToTeachers(teachers) {
  // Code the function here.
  teachers.forEach(element => {
    console.log(`Hello ${element}`);
  });
}

// Do not remove last lines, it is for tests
const spartaTeachers = ["Clément", "Fenn", "Nicolas", "Martin", "Louis"];
sayHelloToTeachers(spartaTeachers);
