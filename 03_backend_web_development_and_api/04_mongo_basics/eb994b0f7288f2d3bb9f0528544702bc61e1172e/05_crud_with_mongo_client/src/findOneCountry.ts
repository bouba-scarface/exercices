import * as mongo from "mongodb";
import { type } from "os";

type Pays = {
  name: string;
  capital: string;
  continent: string;
};
export function findOneCountry(db: mongo.Db): Promise<Pays> {
  // code your function here
  return db.collection("worldAtlas").findOne({ name: "Iceland" });
}
