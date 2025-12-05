import { readInput, printTime } from "./utils.js";

const input = readInput("input.txt", /\n\s*\n/);
const start = performance.now();

let res = 0;

const intervals = input[0]
  .split("\n")
  .map((line) => line.split("-").map(Number))
  .sort((a, b) => a[0] - b[0]);
const ids = input[1].split("\n").map(Number);

const intervalsNoOverlap = [intervals[0]];
for (let i = 1; i < intervals.length; i++) {
  if (intervals[i][0] > intervals[i - 1][1]) {
    intervalsNoOverlap.push([intervals[i][0], intervals[i][1]]);
  } else if (
    intervals[i][1] < intervalsNoOverlap[intervalsNoOverlap.length - 1][1]
  ) {
    intervals[i][1] = intervalsNoOverlap[intervalsNoOverlap.length - 1][1];
  }
}

ids.forEach((id) => {
  for (let interval of intervals) {
    if (id >= interval[0] && id <= interval[1]) {
      res += 1;
      break;
    }
    if (id < interval[0]) {
      break;
    }
  }
});

// ------------------------------
printTime(start);
console.log("Result: ", res);
