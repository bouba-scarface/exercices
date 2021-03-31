import fetch from "node-fetch";

function getCategories(): Promise<void> {
  // code the function here
  return fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => response.json())
    .then((categories) => console.log(categories))
    .catch((error) => console.error(error))
}

//getCategories().then((resp) => console.log(resp));

// leave line below for tests to work properly
export { getCategories };
