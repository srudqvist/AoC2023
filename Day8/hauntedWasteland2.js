// how many steps are needed?

const fs = require("fs");

let lines = fs.readFileSync("./day8Input.txt").toString().trim().split("\n");
const path = lines.shift();

// remove the empty line
lines.shift();

const nodes = {};
let startNodes = {};
let stepList = [];

lines.forEach((line) => {
  console.log(line);
  const [key, value] = line.split(" = ");
  const values = value.substring(1, value.length - 1).split(", ");

  nodes[key] = values;
  if (key.endsWith("A")) {
    startNodes[key] = values;
  }
});

for (const startNode in startNodes) {
  stepList.push(findZZZ(nodes, path, startNode));
}

const result = calculateLCM(stepList);
console.log(`Total steps: ${result}`);

function findZZZ(nodes, path, startNode) {
  let steps = 0;
  let goalFound = false;
  let currentNode = startNode;

  while (!goalFound) {
    for (let i = 0; i < path.length; i++) {
      if (path[i] == "L") {
        // go to the left
        currentNode = nodes[currentNode][0];
      } else if (path[i] == "R") {
        // go to the right
        currentNode = nodes[currentNode][1];
      }
      steps++;
      if (currentNode.endsWith("Z")) {
        goalFound = true;
      }
    }
  }
  return steps;
}

function calculateLCM(stepList) {
  if (stepList.length === 0) {
    return null;
  }
  let result = stepList[0];
  for (let i = 1; i < stepList.length; i++) {
    result = lcm(result, stepList[i]);
  }
  return result;
}

function gcd(a, b) {
  // Implement GCD calculation (for example, using Euclidean algorithm)
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function lcm(a, b) {
  // LCM formula: LCM(a, b) = (a * b) / GCD(a, b)
  return (a * b) / gcd(a, b);
}
