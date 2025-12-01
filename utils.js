import fs from "node:fs";

export const readInput = (file = "input.txt", split = /\r?\n/) => {
  const input = fs.readFileSync(file, "utf8");
  return input.split(split);
};

export const printTime = (startTime) => {
  const endTime = performance.now();
  const duration = endTime - startTime;
  console.log(`Time taken: ${duration.toFixed(2)}ms`);
};
