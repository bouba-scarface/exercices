import fetch from "node-fetch";

function getReposUrl(githubNickname: string): Promise<string> {
  // code the function here
  return fetch(`https://developer.github.com/v3/users/?q=${githubNickname}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 404) {
        throw new Error("Page not found");
      }
      return response.json();
    })
    .then((json) => {
      return json.repos_url;
    });
}

// Leave the line below for tests and `src/index.ts` to work properly
export { getReposUrl };
