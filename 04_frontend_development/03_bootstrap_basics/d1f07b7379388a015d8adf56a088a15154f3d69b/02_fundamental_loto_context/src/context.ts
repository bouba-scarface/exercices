import { lottery_draw } from "./lottery_draw";

type Draw = number[];

export function contextFunction(ticket: Draw): void {
  // Code the function here
  let win: number = 0;
  const lotteryTableau = lottery_draw();
  for (let i = 0; i < 6; i++) {
    if (ticket[i] === lotteryTableau[i]) {
      win++;
    }
  }
  if (win === 6) {
    console.log("You won the lottery!");
  } else {
    console.log("You lost...");
  }
}
