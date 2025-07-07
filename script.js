
let hands = [];
let current = 0;

function carregarJSON() {
  fetch('gto_40bb.json')
    .then(res => res.json())
    .then(data => {
      hands = data;
      mostrarMao();
    })
    .catch(err => console.error("Erro ao carregar JSON:", err));
}

function mostrarMao() {
  const hand = hands[current];
  document.getElementById('action').innerText = `Situação: ${hand.action}`;

  const optionsBox = document.getElementById('options');
  optionsBox.innerHTML = '';

  hand.options.forEach(op => {
    const btn = document.createElement('button');
    btn.textContent = op;
    btn.onclick = () => verificarResposta(op, hand.correctPlay);
    optionsBox.appendChild(btn);
  });

  document.getElementById('feedback').innerText = '';

  // Mostrar cartas na mesa
  document.getElementById('carta1').innerText = hand.heroHand[0];
  document.getElementById('carta2').innerText = hand.heroHand[1];
}

function verificarResposta(escolha, correta) {
  const feedback = document.getElementById('feedback');
  if (escolha === correta) {
    feedback.innerText = "✅ Correto!";
    feedback.style.color = "#00c896";
  } else {
    feedback.innerText = `❌ Errado. Resposta correta: ${correta}`;
    feedback.style.color = "#ff4d4f";
  }
}

document.getElementById("next-btn").addEventListener("click", () => {
  current = (current + 1) % hands.length;
  mostrarMao();
});

carregarJSON();
