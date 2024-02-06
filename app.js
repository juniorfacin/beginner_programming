alert('Boas vindas ao jogo do Número Secreto');
let numeroSecreto = 29;
let chute = prompt('Digite um número entre 1 a 30: ');

if (chute === numeroSecreto) {
  alert(`Parabéns você acertou o ${numeroSecreto}`);
} else (
  alert(`Infelizmente não foi dessa vez, o número secreto era ${numeroSecreto}`)
)
