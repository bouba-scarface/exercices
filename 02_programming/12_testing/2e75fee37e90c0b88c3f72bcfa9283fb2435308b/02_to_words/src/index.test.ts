import { toWords } from "./index";
test("when i call .split, return an", () => {
  const chipolata = "je suis un chat";
  expect(toWords(chipolata)).toMatchObject([ 'je', 'suis', 'un', 'chat' ]);
});
