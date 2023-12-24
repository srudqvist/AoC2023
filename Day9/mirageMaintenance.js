const fs = require("fs");

let lines = fs.readFileSync("./testInput.txt").toString().trim().split("\n");

lines.forEach((line, index) => {
  lines[index] = line.split(" ").map((c) => parseInt(c, 10));
});

let sumValues = 0;

for (const line in lines) {
  console.log(lines[line]);
  let allDiffs = [];
  allDiffs.push(getDifferences(line));
}

function getDifferences(line) {
  let differences = [];
  for (let i = 0; i < lines[line].length - 1; i++) {
    console.log(lines[line][i]);
    let difference = lines[line][i + 1] - lines[line][i];
    console.log(`Difference: ${difference}`);
    differences.push(difference);
    console.log(differences);
  }
  return differences;
}
