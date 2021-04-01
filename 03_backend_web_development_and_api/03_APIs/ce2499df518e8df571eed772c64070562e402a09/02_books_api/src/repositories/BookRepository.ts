import fetch, { Response } from "node-fetch";
import { Book } from "../@types/book";
import { Comment } from "../@types/comment";

class BookRepository {
  baseUrl = process.env.BASE_URL;

  // Code functions here like this
  /*
  neededFunction() {}
  */
  getAll(): Promise<Response> {
    return fetch(`${this.baseUrl}/books`, {
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
    return fetch(`${this.baseUrl}/books/${id}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }
  getBookComments(id: number): Promise<Response> {
    return fetch(`${this.baseUrl}/books/${id}/comments`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }
  searchByTitle(term: string): Promise<Response> {
    return fetch(`${this.baseUrl}/books?q=${term}`, {
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
export { BookRepository };
