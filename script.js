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

function gerarMao() {
  const cartas = Object.keys(range);
  const index = Math.floor(Math.random() * cartas.length);
  return cartas[index];
}

let maoAtual = '';

function mostrarCartas(mao) {
  const naipes = ['♥️', '♠️', '♦️', '♣️'];
  const carta1 = mao[0];
  const carta2 = mao[1];
  const suited = mao[2] === 's';
  const off = mao[2] === 'o';
  const naipe = naipes[Math.floor(Math.random() * 4)];
  const naipe2 = suited ? naipe : naipes.find(n => n !== naipe);

  document.getElementById('cards').innerHTML = `
    ${carta1} ${naipe} ${carta2} ${naipe2}
  `;
}

function novaMao() {
  document.getElementById('resultado').textContent = '';
  maoAtual = gerarMao();
  mostrarCartas(maoAtual);
}

function responder(acao) {
  if (!maoAtual) return;
  const correta = range[maoAtual];
  const resultado = document.getElementById('resultado');
  if (acao === correta) {
    resultado.textContent = '✅ Jogada Correta!';
    resultado.style.color = 'lime';
  } else {
    resultado.textContent = `❌ Errado! Correto seria: ${correta.toUpperCase()}`;
    resultado.style.color = 'red';
  }
}

// Inicia com uma mão
novaMao();
