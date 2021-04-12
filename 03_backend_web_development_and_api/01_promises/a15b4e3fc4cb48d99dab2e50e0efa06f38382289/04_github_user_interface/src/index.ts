import { ask, closeRl } from "../interface";
//import { listRepos } from "../utils";
import { GithubClient } from "./github-client";

ask("Github nickname\n> ")
  .then((nickname) => GithubClient.getReposUrl(nickname))
  .then((url) => GithubClient.getRepos(url))
  .then((showRepos) => GithubClient.printRepos(showRepos))
  .then((repos) => {
    ask("Choose a repo number\n> ")
      .then((choise) => GithubClient.getProjectInformations(repos[parseInt(choise) - 1].url))
      .then((element) => {
        GithubClient.printRepository(element);
        closeRl();
      });
  });
