import { getReposUrlByNickname, listRepos, getOneRepoInfos } from "../utils";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export class GithubClient {
  static async getReposUrl(nickname: string): Promise<string | undefined> {
    // You code goes here
    return await getReposUrlByNickname(nickname);
  }

  static getRepos(url: string): Promise<Repo[]> {
    return listRepos(url);
  }

  static getProjectInformations(url: string): Promise<Repo> {
    // You code goes here
    return getOneRepoInfos(url);
  }

  static printRepos(repos: Repo[]): Repo[] {
    repos.forEach((repo, index) => {
      const repoNumber = (index + 1).toString().padStart(3, " ");
      console.log(`${repoNumber} - ${repo.name}`);
    });
    return repos;
  }

  static printRepository(repo: Repo): void {
    const cleanName = repo.name.replace(/\w*\//, "");
    console.log(`Repository:          ${cleanName}`);
    console.log(`Description:         ${repo.description ? repo.description : "No description available"}`);
    console.log(`Subscribers count:   ${repo.subscribers_count}`);
    console.log(`Stars count:         ${repo.stargazers_count}`);
    console.log(`Language:            ${repo.language}`);
    console.log(`Url:                 ${repo.url}`);
  }
}
