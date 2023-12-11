const fs = require("fs");

let lines = fs.readFileSync("./testInput.txt").toString().split("\n");
let [hands, bids] = fs.readFileSync("./testInput.txt").toString().split("\n");
//let [hands2, bids2] = readFile("./testInput.txt").toString().split("\n");
console.log(`Hands: ${hands} Bids: ${bids}`);

//console.log(`Hands2: ${hands2} Bids2: ${bids2}`);

for (let i = 0; i < lines.length; i++) {
  console.log(`Lines: ${lines[i]}`);
}
