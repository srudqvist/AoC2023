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
      let newCurrentNodes = {};
      for (const myCurrentNode in currentNodes) {
        console.log(`Current Node: ${myCurrentNode}`);
        if (path[i] == "L") {
          // go to the left
          console.log("LEEEFT");

          console.log(
            "current node children before change:",
            nodes[myCurrentNode][0],
            nodes[myCurrentNode][1],
          );

          currentNodes[myCurrentNode] = nodes[myCurrentNode][0]; // see if this works...
          newCurrentNodes[nodes[myCurrentNode][1]];
          //console.log("current node inside:", currentNodes[myCurrentNode]);
          // console.log(
          //   "current node inside children:",
          //   nodes[myCurrentNode][0],
          //   nodes[myCurrentNode][1],
          // );
          if (currentNodes[myCurrentNode] in endNodes) {
            console.log("End Found!");
            goalFound = true;
            return 0;
          }
        } else if ((path[i] = "R")) {
          // go to the right
          console.log("RIGHT");
          console.log(
            "current node children before change:",
            nodes[myCurrentNode][0],
            nodes[myCurrentNode][1],
          );
          currentNodes[myCurrentNode] = nodes[myCurrentNode][1]; // see if this works...
          newCurrentNodes[nodes[myCurrentNode][1]];
          //console.log("current node inside:", currentNodes[myCurrentNode]);
          // console.log(
          //   "current node inside children:",
          //   nodes[myCurrentNode][0],
          //   nodes[myCurrentNode][1],
          // );
          if (currentNodes[myCurrentNode] in endNodes) {
            console.log("End Found!");
            goalFound = true;
            return 0;
          }
        } else {
          // Error
        }
      }
      //currentNodes = newCurrentNodes;
      steps++;
      for (const myCurrentNode2 in currentNodes) {
        console.log(`Current Nodes 2: ${myCurrentNode2} \n\n`);
        if (myCurrentNode2 in endNodes) {
          console.log("End Node Found");
        }
      }
    }

    if (steps > 3) {
      break;
    }
  }
  //return steps;
}
