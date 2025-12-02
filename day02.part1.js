import { readInput, printTime } from "./utils.js";

const input = readInput("input.txt", /,/);
const start = performance.now();

let res = 0;

function checkHalves(string) {
  const half = string.length / 2;
  for (let j = 0; j < half; j++) {
    if (string[j] !== string[j + half]) return false;
  }
  return true;
}

input.forEach((line) => {
  const [n1, n2] = line.split("-");
  // If the interval doesn't pass through any number with even digits is not worth doing calculations
  if (n1.length % 2 === 1 && n2.length % 2 === 1 && n2.length - n1.length < 2) {
    return;
  }
  for (let i = Number(n1); i <= Number(n2); i++) {
    const str = String(i);
    // Skip the odd numbers interval
    if (str.length % 2 === 1) {
      i = Math.pow(10, str.length) - 1;
      continue;
    }

    // Check halves
    let halfN = Number(str.slice(0, str.length / 2));
    let halfN2 = Number(str.slice(str.length / 2));
    if (checkHalves(str)) {
      // If equal go to the next equal (Ex: 11 -- Go to --> 22)
      res += i;
      halfN++;
    } else if (halfN < halfN2) {
      // If not equal but second half > first half go to next equal (Ex: 1199 -- Go to --> 1212)
      halfN++;
    }
    // Build number for next iteration. For loop checks interval contraints
    i = Number(`${halfN}${halfN}`) - 1;
  }
});

// ------------------------------
printTime(start);
console.log("Result: ", res);
