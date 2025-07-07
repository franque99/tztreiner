const range = {
  'QQ': 'raise', 'KK': 'raise', 'AA': 'raise',
  'AKs': 'raise', 'AQs': 'raise', 'AJs': 'raise', 'ATs': 'raise',
  'KQs': 'raise', 'KJs': 'raise', 'QJs': 'raise',
  'JTs': 'raise', 'T9s': 'raise', '98s': 'raise',
  '77': 'raise', '88': 'raise', '99': 'raise', 'TT': 'raise',
  '66': 'call', '55': 'call', '44': 'fold', '33': 'fold',
  'AJo': 'raise', 'KQo': 'raise', 'QJo': 'call',
  '22': 'fold', '87s': 'call', '76s': 'call',
  'A9s': 'call', 'A8s': 'call', 'A5s': 'call', 'A4s': 'call',
};

function generateHand() {
  const hands = Object.keys(range);
  const index = Math.floor(Math.random() * hands.length);
  return hands[index];
}

let currentHand = '';

function displayCards(hand) {
  const suits = ['♥️', '♠️', '♦️', '♣️'];
  const c1 = hand[0];
  const c2 = hand[1];
  const suited = hand[2] === 's';
  const offsuit = hand[2] === 'o';
  const suit1 = suits[Math.floor(Math.random() * 4)];
  const suit2 = suited ? suit1 : suits.find(s => s !== suit1);

  document.getElementById('cards').innerHTML = `
    ${c1} ${suit1} ${c2} ${suit2}
  `;
}

function newHand() {
  document.getElementById('result').textContent = '';
  currentHand = generateHand();
  displayCards(currentHand);
}

function answer(action) {
  if (!currentHand) return;
  const correct = range[currentHand];
  const result = document.getElementById('result');
  if (action === correct) {
    result.textContent = '✅ Correct play!';
    result.style.color = 'lime';
  } else {
    result.textContent = `❌ Incorrect! Correct action: ${correct.toUpperCase()}`;
    result.style.color = 'red';
  }
}

// Start with a hand
newHand();
