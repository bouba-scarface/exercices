import * as mongo from "mongodb";

type Validator = {
  [key: string]: unknown;
};

export function createCollectionWithValidator(Db,collectionName:string,valid:Validator): Promise<mongo.Collection<T>>{
  // code

}
