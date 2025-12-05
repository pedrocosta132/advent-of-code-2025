import { readInput, printTime } from "./utils.js";

const input = readInput();
const matrix = input.map((line) => line.split(""));
const start = performance.now();

let res = 0;

function check(x, y) {
  if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) {
    return 0;
  }
  return matrix[x][y] === "@" ? 1 : 0;
}

//CPU GO BRRRRRRRR
//DO ACTUAL SOLUTION IF REAL_TIME_AVAILABLE > 0
let out = false;
while (!out) {
  const toRemove = [];
  matrix.forEach((row, x) => {
    row.forEach((cell, y) => {
      if (cell === "@") {
        const checks =
          check(x - 1, y - 1) +
          check(x + 1, y + 1) +
          check(x + 1, y - 1) +
          check(x - 1, y + 1) +
          check(x, y - 1) +
          check(x, y + 1) +
          check(x - 1, y) +
          check(x + 1, y);
        if (checks < 4) {
          toRemove.push([x, y]);
        }
      }
    });
  });
  res += toRemove.length;
  toRemove.forEach(([x, y]) => {
    matrix[x][y] = ".";
  });
  if (toRemove.length === 0) {
    out = true;
  }
}

// ------------------------------
printTime(start);
console.log("Result: ", res);
