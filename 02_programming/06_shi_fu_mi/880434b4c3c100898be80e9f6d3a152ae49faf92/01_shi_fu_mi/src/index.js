//importation des modules externes
const readline = require("readline");
const welcome = require("./welcome");
const clear = require("./clear");

//le module pour recuperer la saisie de l'user
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//les choix des users
// ROCK
const rock=[
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


function ffhf(tableau)

//Afficher le message d'acceuil
welcome(reader,rock,paper,scissors,clear);

