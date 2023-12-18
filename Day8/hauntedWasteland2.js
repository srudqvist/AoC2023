// hauntedWasteland2.js
//

// follow the LR pattern to navigate from AAA to ZZZ.
// how many steps are needed?

const fs = require("fs");

//let lines = fs.readFileSync("./testInput2.txt").toString().trim().split("\n");
//let lines = fs.readFileSync("./testInput.txt").toString().trim().split("\n");
// let lines = fs
//   .readFileSync("./testInputPart2.txt")
//   .toString()
//   .trim()
//   .split("\n");
let lines = fs.readFileSync("./day8Input.txt").toString().trim().split("\n");
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
let endKeys = [];
for (const endNode in endNodes) {
  endKeys.push(endNode);
}

findZZZ(nodes, path, goal, startNodes);

function findZZZ(nodes, path, goal, startNodes) {
  let steps = 0;
  let goalFound = false;
  let currentNodes = startNodes;
  console.log("Current Nodes: ", currentNodes);

  while (!goalFound) {
    for (let i = 0; i < path.length; i++) {
      let newCurrentNodes = {};
      for (const myCurrentNode in currentNodes) {
        let LR_values = currentNodes[myCurrentNode];
        //console.log(`Current Node: ${myCurrentNode}`);
        //console.log("LR_values:", LR_values);
        if (path[i] == "L") {
          // go to the left
          let nextNodeKey = LR_values[0];
          let nextNodeValues = nodes[LR_values[0]];
          //console.log(`Next Node: ${nextNodeKey}: [${nextNodeValues}]`);
          newCurrentNodes[nextNodeKey] = nextNodeValues;
        } else if (path[i] == "R") {
          // go to the right
          //console.log("RIGHT");
          let nextNodeKey = LR_values[1];
          let nextNodeValues = nodes[LR_values[1]];
          //console.log(`Next Node: ${nextNodeKey}: [${nextNodeValues}]`);
          newCurrentNodes[nextNodeKey] = nextNodeValues;
        } else {
          // Error
        }
      }
      currentNodes = newCurrentNodes;
      steps++;
      let currentKeys = [];
      for (const currentNode in currentNodes) {
        currentKeys.push(currentNode);
      }
      //console.log(`Current keys: ${currentKeys}\nEnd keys: ${endKeys}`);
      let matchCount = 0;
      for (let i = 0; i < endKeys.length; i++) {
        if (endKeys[i] == currentKeys[i]) {
          matchCount++;
        }
      }
      for (let i = 0; i < currentKeys.length; i++) {
        if (currentKeys[i].endsWith("Z")) {
          break;
        }
        if (i == currentKeys.length) {
          goalFound = true;
          console.log("\n\n\n\n GOAL FOUND 1 !!!");
          console.log(`Steps: ${steps}`);
          break;
        }
      }
      if (matchCount == endKeys.length) {
        goalFound = true;
        console.log("\n\n\n\n GOAL FOUND !!!");
        console.log(`Steps: ${steps}`);
      }
    }
  }
  //return steps;
}
