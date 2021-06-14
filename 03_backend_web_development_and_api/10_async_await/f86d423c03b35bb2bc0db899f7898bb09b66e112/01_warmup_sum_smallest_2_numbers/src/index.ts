export function sumTwoSmallestNumbers(nombre: number[]): number {
  const positiv = nombre.find((numb) => numb < 0);
  if (nombre.length < 4 || positiv < 0) {
    throw new Error();
  } else {
    const newNombre: number[] = nombre.sort((a, b) => a - b);
    return newNombre[0] + newNombre[1];
  }
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
