import fetch from "node-fetch";
import { getReposUrl } from "./getReposUrl";
import { PresentationRepo } from "./types";

const url: string = getReposUrl(githubNickname: string).then();
function getRepos(url: string): Promise<PresentationRepo[]> {
  // code the function here
  return fetch(`https://developer.github.com/v3/users/${url}`, {
    method: "GET",
  });
}

// Leave the line below for tests and `src/index.ts` to work properly
export { getRepos };
