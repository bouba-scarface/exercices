export function mumble(input: string): string {
  const strCopy = input.toLowerCase().split("");
  const chaine = strCopy.map((element, index) => {
    return element.repeat(index + 1);
  });
  return chaine.join("-");
}


