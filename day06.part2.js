import { readInput, printTime } from "./utils.js";

const input = readInput();
const start = performance.now();

let res = 0;

const lines = input.map((line) => line.split(""));
const operations = lines.pop();

let currValue = 0;
let currOperation = operations[0];

for (let i = 0; i < operations.length; i++) {
  let number = "";
  for (let j = 0; j < lines.length; j++) {
    number += lines[j][i];
  }
  number = number.trim();

  if (number === "") {
    res += currValue;
    continue;
  }
  if (operations[i] !== " ") {
    currOperation = operations[i];
    currValue = currOperation === "*" ? 1 : 0;
  }
  currValue = eval(`${currValue} ${currOperation} ${Number(number)}`);
}
res += currValue;

// ------------------------------
printTime(start);
console.log("Result: ", res);
