import { app } from "../src/server";
import { Server } from "http";
import fetch from "node-fetch";

let server: Server;

beforeEach((done) => {
  server = app.listen(3030, done);
});

afterEach((done) => {
  server.close(done);
});

describe("/games endpoint", () => {
  it("Should respond with a 200 HTTP code", () => {
    expect.assertions(1);

    return fetch("http://localhost:3030/games").then((response) => {
      expect(response.status).toBe(200);
    });
  });

  it("Should return an array of games", () => {
    expect.assertions(2);

    return fetch("http://localhost:3030/games")
      .then((response) => response.json())
      .then((result) => {
        expect(Array.isArray(result)).toBe(true);

        expect(Object.keys(result[0])).toEqual(["name", "slug", "cover"]);
      });
  });
});

