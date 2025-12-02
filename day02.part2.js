import { readInput, printTime } from "./utils.js";

const input = readInput("input.txt", /,/);
const start = performance.now();

let res = 0;

function checkRepetitions(string) {
  const doubled = (string + string).slice(1, -1);
  return doubled.includes(string);
}

input.forEach((line) => {
  const [n1, n2] = line.split("-");
  for (let i = Number(n1); i <= Number(n2); i++) {
    const str = String(i);
    if (checkRepetitions(str)) {
      res += i;
    }
  }
});

// ------------------------------
printTime(start);
console.log("Result: ", res);
