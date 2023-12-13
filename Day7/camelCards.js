const fs = require("fs");

//let lines = fs.readFileSync("./testInput2.txt").toString().trim().split("\n");
let lines = fs.readFileSync("./day7Input.txt").toString().trim().split("\n");
//let lines = fs.readFileSync("./testInput.txt").toString().trim().split("\n");

//console.log(`Hands2: ${hands2} Bids2: ${bids2}`);

//const order = ["A", "K", "Q", "J", "T", 9, 8, 7, 6, 5, 4, 3, 2];
//const order = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
const order = ["J", "2", "3", "4", "5", "6", "7", "8", "9", "T", "Q", "K", "A"];

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
  //console.log(`Hand: ${hand.cards}, ${hand.bid}\n${hand.type}\n`);
});

hands = assignRank(hands);
calculateWinnings(hands);

function detectType(cards) {
  cards = cards.split("").sort().join("");
  const frequency = {};
  let jCount = 0;
  for (const card of cards) {
    if (card === "J") {
      jCount++;
    }
    frequency[card] = (frequency[card] || 0) + 1;
  }
  console.log(jCount);
  const counts = Object.values(frequency);
  const pairs = counts.filter((count) => count === 2).length;
  const threeOfAKind = counts.includes(3);
  const fourOfAKind = counts.includes(4);
  const fiveOfAKind = counts.includes(5);
  const fullHouse = pairs >= 1 && threeOfAKind;

  // TODO:
  //   - check if there is one or more jokers that could bump the
  //     type of the hand.
  //   - how to make the best hand.

  if (fiveOfAKind) {
    return 6;
  } else if (fourOfAKind) {
    // Four of a kind always turns into 5 of a kind if J is present
    if (jCount > 0) {
      return 6;
    }
    return 5;
  } else if (fullHouse) {
    // Cases: 3J, 2J always turns into 5 of a kind
    if (jCount == 2 || jCount == 3) {
      return 6;
    }
    return 4;
  } else if (threeOfAKind) {
    // Cases: 1J, 3J > turn into another existing number > fourOfAKind
    if (jCount == 1) {
      return 5;
    } else if (jCount == 3) {
      return 5;
    }
    return 3;
  } else if (pairs === 2) {
    // Cases: 1J, 2J. If 1J make a fullHouse, if 2J make fourOfAKind.
    if (jCount == 1 || jCount == 2) {
      return 3 + jCount;
    }
    return 2;
  } else if (pairs === 1) {
    // Cases: 1J
    // if 3J it would have been fullHouse
    // if 2J it would have been 2 pair
    if (jCount > 0) {
      return 3;
    }
    return 1;
  } else {
    // 1J but no pairs
    if (jCount == 1) {
      return 1;
    }
    return 0;
  }
}

function assignRank(hands) {
  let sortedHands = hands.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type - b.type; // Sort primarily by type
    }
    return 0;
  });

  for (let i = 0; i < sortedHands.length; i++) {
    sortedHands[i].rank = i + 1;
  }
  let superSorted = sortedHands.sort((a, b) => {
    if (a.type == b.type) {
      for (let i = 0; i < a.cards.length; i++) {
        const indexA = order.indexOf(a.cards[i]);
        const indexB = order.indexOf(b.cards[i]);
        if (indexA !== indexB) {
          return indexA - indexB;
        }
      }
    }
  });
  for (let i = 0; i < superSorted.length; i++) {
    superSorted[i].rank = i + 1;
  }
  return superSorted;
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
