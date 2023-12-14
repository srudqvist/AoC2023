// hauntedWasteland.js
//

// follow the LR pattern to navigate from AAA to ZZZ.
// how many steps are needed?

const fs = require("fs");

let lines = fs.readFileSync("./testInput2.txt").toString().trim().split("\n");
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
  let currentIndex = 0;
  const startNode = "AAA";
  console.log(`Start: ${startNode}`);
  console.log(`Left: ${nodes[startNode][0]}`);
  console.log(`Right: ${nodes[startNode][1]}`);
  const lastIndex = path.length - 1;
  console.log(lastIndex);
  let currentNode = startNode;
  while (!goalFound) {
    console.log(`Current Node: ${currentNode}`);
    for (let i = 0; i < path.length; i++) {
      if (path[i] == "L") {
        // go to the left
        currentNode = nodes[currentNode][0];
        steps++;
        console.log("L");
        console.log("test", nodes[currentNode][0]);
      } else if ((path[i] = "R")) {
        // go to the right
        currentNode = nodes[currentNode][1];
        steps++;
        console.log("R");
        console.log("test", nodes[currentNode][1]);
        if (currentNode == goal) {
          console.log("Goal Found");
          console.log("Steps", steps);
          goalFound = true;
        }
      } else {
        // Error
      }
      // if (i == 2) {
      //   goalFound = true;
      // }
    }
    console.log(`Current Node 2: ${currentNode}`);
  }
  //return steps;
}
