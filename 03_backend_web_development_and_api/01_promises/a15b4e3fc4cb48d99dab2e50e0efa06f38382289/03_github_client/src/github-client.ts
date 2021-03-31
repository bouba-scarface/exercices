import { Response } from "node-fetch";
import { getReposUrlByNickname, listRepos, getOneRepoInfos } from "../utils";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export type GitHub = {
  message: string;
  repos_url: string;
};

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string> {
    return getReposUrlByNickname(nickname)
      .then((response) => {
        return response.repos_url;
      })
      .catch((error) => {
        return error.message;
      });
  }

  static getRepos(url: string): Promise<Repo[]> {
    return listRepos(url);
  }

  static printRepos(Repos: Repo[]): void {
    // You code goes here
    return Repos.forEach((element) => console.log(element));
  }

  static printRepository(Repo: Repo): void {
    console.log(`${getOneRepoInfos(Repo)}`);
  }

  static getProjectInformations(url: string): Promise<Repo> {
    // You code goes here
    return getOneRepoInfos(url);
  }
}
