/* global db */

// write your MongoDB shell command here

const newPays = [
  {
    name: "Italie",
    capital: "Rome",
    continent: "Europe",
  },
  {
    name: "Espagne",
    capital: "Madrid",
    continent: "Europe",
  },
  {
    name: "Belgique",
    capital: "Bruxells",
    continent: "Europe",
  },
];

db.worldAtlas.insertMany(newPays);
