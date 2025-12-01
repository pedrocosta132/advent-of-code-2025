import { readInput, printTime } from "./utils.js";

const input = readInput();
const start = performance.now();

let pointer = 50;
let password = 0;

input.forEach((line) => {
  const direction = line[0];
  const steps = parseInt(line.slice(1));
  const startPoint = pointer;
  if (direction === "L") {
    pointer -= steps % 100;
  } else {
    pointer += steps % 100;
  }

  //check full rotations
  const rotations = Math.floor(steps / 100);
  password += rotations;

  //check non-full rotation
  if (startPoint !== 0 && (pointer < 0 || pointer > 100)) {
    password++;
  }

  pointer = ((pointer % 100) + 100) % 100;
  if (pointer === 0) {
    password++;
  }
});

// ------------------------------
console.log("Result: ", password);
printTime(start);
