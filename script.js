const hands = {
  "AKs": "Raise", "AQs": "Raise", "AJs": "Raise", "ATs": "Raise", "A9s": "Call",
  "KQs": "Raise", "KJs": "Raise", "KTs": "Call", "QJs": "Call",
  "JTs": "Call", "T9s": "Call", "98s": "Call", "87s": "Call", "76s": "Call",
  "AKo": "Raise", "AQo": "Raise", "AJo": "Call", "KQo": "Call"
};

function getRandomHand() {
  const keys = Object.keys(hands);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return randomKey;
}

function displayHand(hand) {
  const rank1 = hand[0];
  const rank2 = hand[1];
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

  document.getElementById("card1").textContent = `${rank1}${suit1}`;
  document.getElementById("card2").textContent = `${rank2}${suit2}`;
}

function generateNewHand() {
  const newHand = getRandomHand();
  displayHand(newHand);

  document.querySelectorAll(".fold-btn, .call-btn, .raise-btn").forEach(btn => {
    btn.onclick = () => {
      const action = btn.textContent;
      const correctAction = hands[newHand];
      const resultText = action === correctAction ? "✅ Correto!" : `❌ Errado! Ação correta: ${correctAction}`;
      document.getElementById("result").textContent = resultText;
    };
  });

  document.getElementById("result").textContent = "";
}

// Inicializa primeira mão
generateNewHand();
