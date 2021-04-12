import * as mongo from "mongodb";
type Pays = {
  //_id: string;
  name: string;
  capitale: string;
  continent: string;
};

export function insertOneCountry(db: mongo.Db): Promise<Pays> {
  // code your function here
  const newPays: Pays = {
    name: "Guinee",
    capitale: "Conakry",
    continent: "Afrique",
  };
  return db
    .collection("worldAtlas")
    .insertOne(newPays)
    .then((response) => response.ops[0]);
}
