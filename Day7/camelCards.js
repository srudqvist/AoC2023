const fs = require("fs");

//let lines = fs.readFileSync("./day7Input.txt").toString().trim().split("\n");
let lines = fs.readFileSync("./testInput.txt").toString().trim().split("\n");

//console.log(`Hands2: ${hands2} Bids2: ${bids2}`);

for (let i = 0; i < lines.length; i++) {
  console.log(`Lines: ${lines[i]}`);
}
//const order = ["A", "K", "Q", "J", "T", 9, 8, 7, 6, 5, 4, 3, 2];
const order = [2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K", "A"];
let hands = [];
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

hands = assignRank(hands);
calculateWinnings(hands);

function detectType(cards) {
  cards = cards.split("").sort().join("");
  const frequency = {};
  for (const card of cards) {
    frequency[card] = (frequency[card] || 0) + 1;
  }
  const counts = Object.values(frequency);
  const pairs = counts.filter((count) => count === 2).length;
  const threeOfAKind = counts.includes(3);
  const fourOfAKind = counts.includes(4);
  const fiveOfAKind = counts.includes(5);
  const fullHouse = pairs >= 1 && threeOfAKind;

  if (fullHouse) {
    return 6;
  } else if (fiveOfAKind) {
    return 5;
  } else if (fourOfAKind) {
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
  let sortedHands = hands.sort((a, b) => {
    if (a.type !== b.type) {
      // Sort primarily by type
      return a.type - b.type;
    }

    for (let i = 0; i < a.cards.length; i++) {
      const cardA = a.cards[i];
      const cardB = b.cards[i];

      const indexA = order.indexOf(cardA);
      const indexB = order.indexOf(cardB);

      // Sort within the same type based on cards
      if (indexA !== indexB) {
        return indexA - indexB;
      }
    }
    // If all cards are the same, no need to change their order within the same type
    return 0;
  });
  for (let i = 0; i < sortedHands.length; i++) {
    sortedHands[i].rank = i + 1;
  }
  return sortedHands;
}

function calculateWinnings(hands) {
  let count = 0;
  console.log(hands);
  for (let i = 0; i < hands.length; i++) {
    console.log(hands[i]);
    localCount = hands[i].rank * hands[i].bid;
    count += localCount;
  }
  console.log(count);
}
