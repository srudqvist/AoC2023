const fs = require("fs");

let lines = fs.readFileSync("./testInput.txt").toString().trim().split("\n");

//console.log(`Hands2: ${hands2} Bids2: ${bids2}`);

for (let i = 0; i < lines.length; i++) {
  console.log(`Lines: ${lines[i]}`);
}
const order = ["A", "K", "Q", "J", "T", 9, 8, 7, 6, 5, 4, 3, 2];
const hands = [];
lines.forEach((line) => {
  const [cards, bid] = line.split(" ");
  let type = detectType(cards);
  let rank;

  const hand = {
    cards: cards,
    bid: parseInt(bid),
    type: type,
    rank: rank,
  };
  hands.push(hand);
  console.log(`Hand: ${hand.cards}, ${hand.bid}\n${hand.type}\n`);
});


function detectType(cards) {
  cards = cards.split("").sort().join("");
  // for (let i = 0; i < cards.length - 1; i++) {
  //
  // }
  const frequency = {};
  for (const card of cards) {
    frequency[card] = (frequency[card] || 0) + 1;
  }
  const counts = Object.values(frequency);
  const pairs = counts.filter((count) => count === 2).length;
  const threeOfAKind = counts.includes(3);
  const fourOfAKind = counts.includes(4);
  const fiveOfAKind = counts.includes(5);
  const fullHouse;
  if (fiveOfAKind) {
    return 5;
  } else if (fourOfAKind){
    return 4;
  } else if (threeOfAKind) {
    return 3;
  } else if (pairs === 2) {
    return 2;
  } else if (pairs === 1) {
    return 1;
  } else {
    return 0;
  }
}

function assignRank(hands) {

}
