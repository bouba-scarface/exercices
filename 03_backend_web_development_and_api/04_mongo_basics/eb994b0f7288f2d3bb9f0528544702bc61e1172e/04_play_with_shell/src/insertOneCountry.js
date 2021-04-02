/* global db */

// write your MongoDB shell command here
const pays = {
  name: "France",
  capital: "Paris",
  continent: "Europe",
};
db.worldAtlas.insertOne(pays);
