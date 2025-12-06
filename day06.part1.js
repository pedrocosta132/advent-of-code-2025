import { readInput, printTime } from "./utils.js";

const input = readInput();
const start = performance.now();

let res = 0;
const lines = [];

input.forEach((line) => {
  lines.push(line.trim().split(/\t|\s+/));
});

const operations = lines.pop();
const totals = [];

for (let j = 0; j < lines[0].length; j++) {
  totals[j] = lines[0][j];
  for (let i = 1; i < lines.length; i++) {
    totals[j] = eval(`${totals[j]} ${operations[j]} ${lines[i][j]}`);
  }
}

res = totals.reduce((acc, curr) => acc + curr, res);

// ------------------------------
printTime(start);
console.log("Result: ", res);
