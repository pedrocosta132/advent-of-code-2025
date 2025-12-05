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
      res += checks < 4 ? 1 : 0;
    }
  });
});

// ------------------------------
printTime(start);
console.log("Result: ", res);
