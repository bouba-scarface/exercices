import * as mongo from "mongodb";
import { countries } from "../utils/countries";

export function insertManyCountries(db: mongo.Db): Promise<string[]> {
  // code your function here
  const newCountries = [
    {
      name: "Senegal",
      capitale: "Dakar",
      continent: "AF",
    },
    {
      name: "Mali",
      capitale: "Bamako",
      continent: "AF",
    },
  ];
  db.collection("worldAtlas").insertMany(newCountries);
  return db.collection("worldAtlas").find({ continent: "AF" }).toArray();
}
