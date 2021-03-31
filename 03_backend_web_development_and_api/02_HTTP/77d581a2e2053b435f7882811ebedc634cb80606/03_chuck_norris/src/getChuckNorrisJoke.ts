import fetch from "node-fetch";

function getChuckNorrisJoke(category: string): Promise<void> {
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => response.json())
    .then((html) => console.log(html))
    .catch((error) => console.error(error))
}

//getChuckNorrisJoke().then((resp) => console.log(resp));
// leave line below for tests to work properly
export { getChuckNorrisJoke };
