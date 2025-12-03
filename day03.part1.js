import { readInput, printTime } from "./utils.js";

const input = readInput();
const start = performance.now();

let res = 0;

input.forEach((line) => {
  const arr = line.split("").map(Number);
  let a = arr[0],
    b = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > a) {
      a = arr[i];
    } else if (arr[i] > b) {
      b = arr[i];
    }
  }
  if (arr[arr.length - 1] > b) {
    b = arr[arr.length - 1];
  }
  res += a * 10 + b;
});

// ------------------------------
printTime(start);
console.log("Result: ", res);
