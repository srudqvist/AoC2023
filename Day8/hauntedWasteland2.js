// hauntedWasteland2.js
//

// follow the LR pattern to navigate from AAA to ZZZ.
// how many steps are needed?

const fs = require("fs");

//let lines = fs.readFileSync("./testInput2.txt").toString().trim().split("\n");
//let lines = fs.readFileSync("./testInput.txt").toString().trim().split("\n");
let lines = fs
  .readFileSync("./testInputPart2.txt")
  .toString()
  .trim()
  .split("\n");
//let lines = fs.readFileSync("./day8Input.txt").toString().trim().split("\n");
const path = lines.shift();
console.log(path);

// remove the empty line
lines.shift();

const goal = "ZZZ";
const nodes = {};
let startNodes = {};
let endNodes = {};

lines.forEach((line) => {
  console.log(line);
  const [key, value] = line.split(" = ");
  const values = value.substring(1, value.length - 1).split(", ");

  nodes[key] = values;
  if (key.endsWith("A")) {
    startNodes[key] = values;
  }
  if (key.endsWith("Z")) {
    endNodes[key] = values;
  }
});
console.log(nodes);
console.log("START NODES\n", startNodes);
console.log("\nEND NODES\n", endNodes);

findZZZ(nodes, path, goal);

function findZZZ(nodes, path, goal) {
  let steps = 0;
  let goalFound = false;
  // Todo:
  //    make startNodes a list of nodes where the key ends with A
  //    make endNodes a list of nodes where the key ends with Z
  //    when the all startNodes have found their endNodes return steps.
  const startNode = "AAA";
  let currentNode = startNode;
  let currentNodes = startNodes;

  while (!goalFound) {
    for (let i = 0; i < path.length; i++) {
      for (let j = 0; j < currentNodes.length; j++) {
        if (path[i] == "L") {
          // go to the left
          currentNode = nodes[currentNode][0];
          currentNodes[j] = nodes[currentNodes][j][0]; // see if this works...
          steps++;
          if (currentNode == goal) {
            console.log("Goal Found");
            console.log("Steps", steps);
            goalFound = true;
          }
        } else if ((path[i] = "R")) {
          // go to the right
          currentNode = nodes[currentNode][1];
          steps++;
          if (currentNode == goal) {
            console.log("Goal Found");
            console.log("Steps", steps);
            goalFound = true;
          }
        } else {
          // Error
        }
      }
    }
    console.log(`Current Node 2: ${currentNode}`);
  }
  //return steps;
}
