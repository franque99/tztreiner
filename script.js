const suits = ['♠', '♥', '♦', '♣'];
const values = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

function getRandomCard() {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];
  return `${value}${suit}`;
}

function generateHand() {
  let card1 = getRandomCard();
  let card2 = getRandomCard();

  // Ensure card1 ≠ card2
  while (card1 === card2) {
    card2 = getRandomCard();
  }

  document.getElementById('card1').innerText = card1;
  document.getElementById('card2').innerText = card2;
}

// Gera primeira mão ao carregar
generateHand();
