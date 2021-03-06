// ⚠️ Don't change this file

import ask from "./ask";
import { closeRl } from "../interface";

ask("Enter something\n> ")
  .then((input) => {
    console.log(`Your input is:\n"${input}"`);
    closeRl(); // Close the reader at the end of the resolution
  })
  .catch((e) => {
    console.error(e);
    closeRl(); // Close the reader when an error occured
  });
