let numeroSecreto = gerarNumeroAleatorio();

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número entre 1 e 100:');

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function verificarChute() {
  let chute = document.querySelector('input').value;
  console.log(chute === numeroSecreto);
}