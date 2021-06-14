// Paste the content of your GithubClient file here

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
    return getReposUrlByNickname(nickname);
  }

  static getRepos(url: string): Promise<Repo[]> {
    return listRepos(url);
  }

  static printRepos(Repo: Repo[]): Repo[] {
    Repo.forEach((element, index) => {
      console.log(`${index + 1}-${element.name}`);
    });
    return Repo;
  }

  static printRepository(ref: Repo): void {
    console.log(`Repository: ${ref.name}`);
    console.log(`Description: ${ref.description}`);
    console.log(`Subscribers count: ${ref.subscribers_count}`);
    console.log(`Stars count: ${ref.stargazers_count}`);
    console.log(`Language: ${ref.language}`);
    console.log(`Url: ${ref.url}`);
  }

  static getProjectInformations(url: string): Promise<Repo> {
    // You code goes here
    return getOneRepoInfos(url);
  }
}
