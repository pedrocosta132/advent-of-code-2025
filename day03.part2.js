import { readInput, printTime } from "./utils.js";

const input = readInput();
const start = performance.now();

let res = 0;

input.forEach((line) => {
  const arr = line.split("").map(Number);
  const stack = [];
  let diff = arr.length - 12;
  for (const digit of arr) {
    while (stack.length > 0 && stack[stack.length - 1] < digit && diff > 0) {
      stack.pop();
      diff--;
    }
    stack.push(digit);
  }
  res += Number(stack.slice(0, 12).join(""));
});

// ------------------------------
printTime(start);
console.log("Result: ", res);
