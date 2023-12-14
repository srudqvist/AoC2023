// hauntedWasteland2.js
//

// follow the LR pattern to navigate from AAA to ZZZ.
// how many steps are needed?

const fs = require("fs");

//let lines = fs.readFileSync("./testInput2.txt").toString().trim().split("\n");
//let lines = fs.readFileSync("./testInput.txt").toString().trim().split("\n");
let lines = fs.readFileSync("./day8Input.txt").toString().trim().split("\n");
const path = lines.shift();
console.log(path);

// remove the empty line
lines.shift();

const goal = "ZZZ";
const nodes = {};

lines.forEach((line) => {
  console.log(line);
  const [key, value] = line.split(" = ");
  const values = value.substring(1, value.length - 1).split(", ");

  nodes[key] = values;
});
console.log(nodes);

findZZZ(nodes, path, goal);

function findZZZ(nodes, path, goal) {
  let steps = 0;
  let goalFound = false;
  const startNode = "AAA";
  let currentNode = startNode;

  while (!goalFound) {
    for (let i = 0; i < path.length; i++) {
      if (path[i] == "L") {
        // go to the left
        currentNode = nodes[currentNode][0];
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
    console.log(`Current Node 2: ${currentNode}`);
  }
  //return steps;
}
