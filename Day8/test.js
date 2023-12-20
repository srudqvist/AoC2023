const fs = require("fs");

let lines = fs.readFileSync("./day8Input.txt").toString().trim().split("\n");
const path = lines.shift();

lines.shift(); // Remove the empty line

const goal = "ZZZ";
const nodes = {};
const startNodes = {};
const endNodes = {};

lines.forEach((line) => {
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

let endKeys = Object.keys(endNodes);

findZZZ(nodes, path, goal, startNodes);

function findZZZ(nodes, path, goal, startNodes) {
  let steps = 0;
  let goalFound = false;
  let currentNodes = startNodes;

  while (!goalFound) {
    let newCurrentNodes = {};
    let currentKeys = Object.keys(currentNodes);

    for (let i = 0; i < path.length; i++) {
      for (const myCurrentNode in currentNodes) {
        let LR_values = currentNodes[myCurrentNode];
        if (path[i] == "L") {
          let nextNodeKey = LR_values[0];
          newCurrentNodes[nextNodeKey] = nodes[LR_values[0]];
        } else if (path[i] == "R") {
          let nextNodeKey = LR_values[1];
          newCurrentNodes[nextNodeKey] = nodes[LR_values[1]];
        }
      }
      currentNodes = newCurrentNodes;
      steps++;

      if (steps > 1000000000) {
        let matchCount = 0;
        for (let i = 0; i < endKeys.length; i++) {
          if (endKeys[i] == currentKeys[i]) {
            matchCount++;
          }
        }
        if (matchCount == endKeys.length) {
          goalFound = true;
          console.log("\n\n\n\n GOAL FOUND !!!");
          console.log(`Steps: ${steps}`);
        }
      }
    }

    if (steps % 100000 == 0) {
      console.log(steps);
    }
  }
}
