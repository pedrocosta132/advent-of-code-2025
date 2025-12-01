import { readInput, printTime } from "./utils.js";

const input = readInput();
const start = performance.now();

let pointer = 50;
let password = 0;

input.forEach((line) => {
  const direction = line[0];
  const steps = parseInt(line.slice(1));
  if (direction === "L") {
    pointer -= steps;
  } else {
    pointer += steps;
  }
  pointer = ((pointer % 100) + 100) % 100;
  if (pointer === 0) {
    password++;
  }
});

// ------------------------------
console.log("Result: ", password);
printTime(start);
