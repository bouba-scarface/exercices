import * as mongo from "mongodb";

export function updateManyCountries(db: mongo.Db): Promise<string[]> {
  // code your function here
  db.collection("worldAtlas").updateMany({ continent: "Europe" }, { $set: { continent: "EU" } });
  return db.collection("worldAtlas").find({ continent: "EU" }).toArray();
}
