import {greet} from "./index";


test("vous devez retourner Hello WORLD!", () =>{
  expect(greet()).toBe("Hello WORLD!")
  expect(greet("Francis")).toBe("Hello FRANCIS!")
})