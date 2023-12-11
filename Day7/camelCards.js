const fs = require("fs");

let lines = fs.readFileSync("./testInput.txt").toString().trim().split("\n");

//console.log(`Hands2: ${hands2} Bids2: ${bids2}`);

for (let i = 0; i < lines.length; i++) {
  console.log(`Lines: ${lines[i]}`);
}

const hands = [];
lines.forEach((line) => {
  const [cards, bid] = line.split(" ");
  let type;
  let rank;
  detectType(cards);

  const hand = {
    cards: cards,
    bid: parseInt(bid),
    type: type,
    rank: rank,
  };
  hands.push(hand);
});

function detectType(cards) {
  console.log(`Cards: ${cards}`);
  cards = cards.split("").sort().join("");
  console.log(`Cards: ${cards}`);
  console.log("\n");
  for (let i = 0; i < cards.length - 1; i++) {}
}
