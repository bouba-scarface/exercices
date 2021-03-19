let rock=[
  "    ________        ",
  "---'   _ ,  |       ",
  "      (__(__)       ",
  "      (_____)       ",
  "      (____)        ",
  "---.__(___)         ",
];

// PAPER
const paper=[
  "      _______       ",
  "----'    ____)____  ",
  "            _______)",
  "            _______)",
  "           _______) ",
  "----.__________)    ",
];
// SCISSORS
const scissors =[
  "    ____           ",
  "---'    |________  ",
  "     (__)________) ",
  "        _________) ",
  "      (____)       ",
  "---.__(___)        ",
];

//console.log(rock.toString().split(""));
console.log(rock.map(element =>{
  return element.toString().replace("(","x").replace(")","(").replace("x","(").split("").reverse().join("");
}));
