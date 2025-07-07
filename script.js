// Exemplo de range GTO simplificado para CO vs BU com 40bb
const gtoRange = {
  "AKs": "Raise",
  "AQs": "Raise",
  "AJs": "Raise",
  "ATs": "Call",
  "KQs": "Raise",
  "KJs": "Call",
  "QJs": "Call",
  "JTs": "Call",
  "TT": "Raise",
  "99": "Call",
  "88": "Call",
  "77": "Fold",
  "A2s": "Fold",
  "65s": "Fold",
  "KTo": "Fold",
  "QTo": "Fold",
  "J9s": "Fold"
};

const hands = Object.keys(gtoRange);
let currentHand = "";

const handDisplay = document.getElementById("hand");
const feedback = document.getElementById("feedback");

function getRandomHand() {
  const index = Math.floor(Math.random() * hands.length);
  return hands[index];
}

function showNewHand() {
  currentHand = getRandomHand();
  handDisplay.textContent = currentHand;
  feedback.textContent = "";
}

function checkAnswer(action) {
  const correctAction = gtoRange[currentHand];
  if (action === correctAction) {
    feedback.textContent = "✔️ Correto!";
    feedback.style.color = "lime";
  } else {
    feedback.textContent = `❌ Errado! Correto: ${correctAction}`;
    feedback.style.color = "red";
  }
}

// Botões
document.getElementById("foldBtn").onclick = () => checkAnswer("Fold");
document.getElementById("callBtn").onclick = () => checkAnswer("Call");
document.getElementById("raiseBtn").onclick = () => checkAnswer("Raise");
document.getElementById("newHandBtn").onclick = showNewHand;

// Inicializa primeira mão
showNewHand();
