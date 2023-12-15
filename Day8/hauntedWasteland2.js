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

findZZZ(nodes, path, goal, startNodes);

function findZZZ(nodes, path, goal, startNodes) {
  let steps = 0;
  let goalFound = false;
  // Todo:
  //    make startNodes a list of nodes where the key ends with A
  //    make endNodes a list of nodes where the key ends with Z
  //    when the all startNodes have found their endNodes return steps.
  const startNode = "AAA";
  let currentNode = startNode;
  let currentNodes = startNodes;
  console.log("Current Nodes: ", currentNodes);
  let foundNodes = 0;

  while (!goalFound) {
    for (let i = 0; i < path.length; i++) {
      for (const myCurrentNode in currentNodes) {
        console.log("key:", myCurrentNode);
        console.log("left", nodes[myCurrentNode][0]);
        console.log("right", nodes[myCurrentNode][1]);
        if (path[i] == "L") {
          // go to the left
          console.log("\n", "LEEEFT", "\n");
          console.log(
            "current node inside children:",
            nodes[myCurrentNode][0],
            nodes[myCurrentNode][1],
          );

          currentNodes[myCurrentNode] = nodes[myCurrentNode][0]; // see if this works...
          console.log("current node inside:", currentNodes[myCurrentNode]);
          console.log(
            "current node inside children:",
            nodes[myCurrentNode][0],
            nodes[myCurrentNode][1],
          );
          if (myCurrentNode in endNodes) {
            console.log("End Found!");
            goalFound = true;
            return 0;
          }
          steps++;
        } else if ((path[i] = "R")) {
          // go to the right
          console.log("\n", "RIGHT", "\n");
          console.log(
            "current node inside children:",
            nodes[myCurrentNode][0],
            nodes[myCurrentNode][1],
          );
          currentNodes[myCurrentNode] = nodes[myCurrentNode][1]; // see if this works...

          console.log("current node inside:", currentNodes[myCurrentNode]);
          console.log(
            "current node inside children:",
            nodes[myCurrentNode][0],
            nodes[myCurrentNode][1],
          );
          if (myCurrentNode in endNodes) {
            console.log("End Found!");
            goalFound = true;
            return 0;
          }
          steps++;
        } else {
          // Error
        }
      }
      console.log("Here");
    }
    for (const myCurrentNode2 in currentNodes) {
      console.log(`Current Nodes 2: ${myCurrentNode2}`);
    }
    if (steps > 2) {
      break;
    }
  }
  //return steps;
}
