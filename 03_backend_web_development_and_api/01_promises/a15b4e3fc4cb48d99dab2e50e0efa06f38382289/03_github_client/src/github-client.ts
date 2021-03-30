import { Response } from "node-fetch";
import { getReposUrlByNickname, listRepos, getOneRepoInfos } from "../utils";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string |number |boolean |null;
}

export type GitHub = {
  message: string;
  repos_url: string;
}

export class GithubClient {
  static getReposUrl(nickname:string):Promise<string> {
    return new Promise((resolve,reject) => { 
      resolve(getReposUrlByNickname(nickname).then(Response => Response.repos_url));
      reject(new Error("The user does not exist"));

    });
  }

  static getRepos(url:string):Promise<string[]> {
    // You code goes here
    return new Promise((resoleve) => {
      resoleve(listRepos(url).then());
    });
  }

  // static printRepos() {
  //   // You code goes here
  // }

  
  static printRepository(referentiel:string):Promise<void> {
    return new Promise((resolve) =>{
      resolve(getOneRepoInfos(referentiel).then(response =>console.log(`${response.name}`)));
    });
  }
  
  static getProjectInformations(url: string):Promise<string> {
    // You code goes here
    return new Promise((resolve) => {
      resolve(getOneRepoInfos(url).then());
    })
  }
}

