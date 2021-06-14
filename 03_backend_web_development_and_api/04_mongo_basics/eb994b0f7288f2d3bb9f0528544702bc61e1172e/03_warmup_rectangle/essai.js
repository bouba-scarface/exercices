let rect = [];
let ch = "";
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    ch += "*";
  }
  rect.push(ch);
  ch = "";
}

console.log(rect.join("\n"));
