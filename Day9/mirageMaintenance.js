const fs = require("fs");

let lines = fs.readFileSync("./testInput.txt").toString().trim().split("\n");

lines.forEach((line, index) => {
  lines[index] = line.split(" ").map((c) => parseInt(c, 10));
});
console.log(lines);
