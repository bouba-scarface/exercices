import fetch, { Response } from "node-fetch";
import { Author } from "../@types/author";
import { Book } from "../@types/book";

class AuthorRepository {
  baseUrl = process.env.BASE_URL;

  // Code functions here like this
  /*
  neededFunction() {}
  */
  getAll(): Promise<Response> {
    return fetch(`${this.baseUrl}/authors`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }
  getOne(id: number): Promise<Response> {
    return fetch(`${this.baseUrl}/authors/${id}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }

  getAuthorBooks(id: number): Promise<Response> {
    return fetch(`${this.baseUrl}/authors/${id}/books`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }
  searchByName(term: string): Promise<Response> {
    return fetch(`${this.baseUrl}/authors?q=${term}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }
}

// Leave the line below for tests to work
export { AuthorRepository };
