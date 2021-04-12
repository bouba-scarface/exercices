import * as mongo from "mongodb";

export function deleteManyCountries(db: mongo.Db): Promise<boolean> {
  // code your function here
  return db
    .collection("worldAtlas")
    .deleteMany({ continent: "Europe" })
    .then((response) => {
      if (response.deletedCount > 0) return true;
      else return false;
    });
}

