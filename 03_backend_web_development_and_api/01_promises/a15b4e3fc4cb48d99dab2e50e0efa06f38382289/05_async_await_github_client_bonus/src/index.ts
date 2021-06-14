import { closeRl, ask } from "../interface";
import { GithubClient } from "./github-client";

async function start() {
  // You code goes here
  ask("Github nickname\n> ");
  await ((nickname) => GithubClient.getReposUrl(nickname));
  await ((url) => GithubClient.getRepos(url));
  await ((showRepos) => GithubClient.printRepos(showRepos));
  await ((repos) => {
    ask("Choose a repo number\n> ");
    await((choise) => GithubClient.getProjectInformations(repos[parseInt(choise) - 1].url));
    await((element) => {
      GithubClient.printRepository(element);
      closeRl();
    });
  });
}

start();
