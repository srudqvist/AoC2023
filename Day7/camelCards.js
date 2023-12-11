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

  const hand = {
    cards: cards,
    bid: parseInt(bid),
    type: type,
    rank: rank,
  };
  hands.push(hand);
});

for (let i = 0; i < hands.length; i++) {
  console.log(`Hands: ${hands[i].cards}, ${hands[i].bid}`);
}
