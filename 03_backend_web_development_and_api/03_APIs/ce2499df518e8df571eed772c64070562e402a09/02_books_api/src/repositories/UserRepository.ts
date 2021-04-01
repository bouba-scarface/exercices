import fetch, { Headers, Response } from "node-fetch";
import { Comment } from "../@types/comment";
import { User } from "../@types/user";

class UserRepository {
  baseUrl = process.env.BASE_URL;

  // Code functions here like this
  /*
  neededFunction() {}
  */
  getAll(): Promise<Response> {
    return fetch(`${this.baseUrl}/users`, {
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
    return fetch(`${this.baseUrl}/users/${id}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }
  getUserComments(id: number): Promise<Response> {
    return fetch(`${this.baseUrl}/users/${id}/comments`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }

  create(params: Record<string, unknown>): Promise<Response> {
    return fetch(`${this.baseUrl}/users`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }
  update(id: number, params: Record<string, unknown>): Promise<Response> {
    return fetch(`${this.baseUrl}/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(params),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }

  delete(id: number): Promise<Response> {
    return fetch(`${this.baseUrl}/users/${id}`, {
      method: "DELETE",
      //body: JSON.stringify(params),
      headers: { "Content-Type": "application/json" },
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
export { UserRepository };
