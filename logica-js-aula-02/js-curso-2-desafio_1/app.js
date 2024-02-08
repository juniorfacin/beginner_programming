
let pageTitle = document.querySelector('title');
pageTitle.innerHTML = 'Primeiro Desafio JS';

let newTitle = document.querySelector('h1');
newTitle.innerHTML = 'Hora do Desafio';

function checkBtnConsole() {
  console.log('O botão console foi clicado!');
}

function btnAlert() {
  alert('Eu amo JS!');
}

function activePrompt() {
  let city = prompt('Digite uma cidade do Brasil que você já visitou:');
  alert(`Legal, você já esteve em ${city}!`)
}

function additionBtn() {
  let value1 = parseInt(prompt('Digite o primeiro número:'));
  let value2 = parseInt(prompt('Digite o segundo número:'));
  let result = value1 + value2;
  alert(`O resultado é: ${result}!`);
}