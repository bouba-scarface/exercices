import { ServerResponse } from "http";
import * as mongo from "mongodb";

export function deleteOneCountry(db: mongo.Db): Promise<boolean> {
  // code your function here
  return db
    .collection("worldAtlas")
    .deleteOne({ name: "France" })
    .then((response) => (response.deletedCount === 1 ? true : false));
}
