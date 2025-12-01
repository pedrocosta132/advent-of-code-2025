# Advent of Code 🎄

Welcome to my Advent of Code repository! This repo contains my daily solutions for [Advent of Code](https://adventofcode.com/), an annual programming challenge held every December.

## Structure

- Each day and part has its own file (e.g. `day01.part1.js`, `day01.part2.js`, `day02.part2.js` ...) containing:
  - Solution code
  - Input files
  - README or notes (optional)

## Usage

Clone the repository:

```bash
git clone https://github.com/pedrocosta132/advent-of-code-2025.git
cd advent-of-code
```

Each puzzle solution can typically be run via Node.js (for JS solutions):

```bash
node dayX.partY.js
```

## Utilities

Common utilities such as file reading and timing are in [`utils.js`](./utils.js).

## Example Utility Usage

```js
import { readInput, printTime } from "./utils.js";

const input = readInput(); // Reads input.txt by default

const start = performance.now();
// ... solve the puzzle
printTime(start);
```

---

Happy Coding & Merry Advent! 🎅🌟
