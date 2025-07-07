const range = {
  "QQ": "raise", "JJ": "raise", "TT": "raise", "99": "raise", "88": "raise",
  "77": "raise", "66": "call", "55": "call", "44": "call",
  "AQs": "raise", "AJs": "raise", "ATs": "raise", "KQs": "raise", "KJs": "call",
  "QJs": "call", "JTs": "call", "T9s": "call", "98s": "call",
  "AQo": "raise", "AJo": "raise", "KQo": "call"
};

let currentHand = "";

function getRandomHand() {
  const keys = Object.keys(range);
  const hand = keys[Math.floor(Math.random() * keys.length)];
  return hand;
}

function displayHand(hand) {
  const card1 = hand[0];
  const card2 = hand[1];
  const suited = hand[2] === "s";

  const suits = ["♠", "♥", "♦", "♣"];
  const suit1 = suits[Math.floor(Math.random() * 4)];
  let suit2 = suits[Math.floor(Math.random() * 4)];

  if (suited) {
    suit2 = suit1;
  } else {
    while (suit2 === suit1) {
      suit2 = suits[Math.floor(Math.random() * 4)];
    }
  }

  document.getElementById("hand").innerHTML = `
    <div class="card">${card1}${suit1}</div>
    <div class="card">${card2}${suit2}</div>
  `;
}

function newHand() {
  currentHand = getRandomHand();
  displayHand(currentHand);
  document.getElementById("result").textContent = "";
}

function checkAnswer(action) {
  const correct = range[currentHand];
  if (!correct) {
    document.getElementById("result").textContent = "No data for this hand.";
    return;
  }

  if (action === correct) {
    document.getElementById("result").textContent = "✅ Correct!";
    document.getElementById("result").style.color = "lightgreen";
  } else {
    document.getElementById("result").textContent = `❌ Wrong. Correct: ${correct.toUpperCase()}`;
    document.getElementById("result").style.color = "red";
  }
}

window.onload = newHand;
