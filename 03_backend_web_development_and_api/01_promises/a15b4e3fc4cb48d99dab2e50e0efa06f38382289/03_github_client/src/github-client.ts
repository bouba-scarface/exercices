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
    return getReposUrlByNickname(nickname).then((response) => {
      if (response.message === "Not Found") {
        return `${nickname}${response.message}`;
      } else {
        return response.repos_url;
      }
    });
  }

  static getRepos(url: string): Promise<Repo[]> {
    return listRepos(url);
  }

  static printRepos(Repo: Repo[]): Repo[] {
    // You code goes here
    Repo.forEach((element, index) => {
      console.log(`${index + 1}-${element.name}`);
    });
    return Repo;
  }

  static printRepository(ref: Repo): void {
    console.log(ref.name);
    console.log(ref.description);
    console.log(ref.subscribers_count);
    console.log(ref.stargazers_count);
    console.log(ref.language);
    console.log(ref.url);
  }

  static getProjectInformations(url: string): Promise<Repo> {
    // You code goes here
    return getOneRepoInfos(url);
  }
}
