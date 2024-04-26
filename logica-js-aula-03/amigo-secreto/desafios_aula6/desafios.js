// Função para validar se um número é positivo ou negativo
function validarNumero(numero) {
  if (numero > 0) {
    return 'Positivo';
  } else if (numero < 0) {
    return 'Negativo';
  } else {
    return 'Zero';
  }
}

console.log(validarNumero(-10))

// Verificar se uma pessoa é maior de idade ou não
function verificarIdade(idade) {
  return idade >= 18 ? 'Maior de idade!' : 'Menor de idade!';
}

console.log(verificarIdade(18))

// Valida se uma string é vazia ou não!
function verificarString(texto) {
  return texto === '' ? console.log(`String vazia: ${texto}`) : console.log(`String não vazia: ${texto}`);
}

verificarString('')
verificarString('Hello World!')

// Verificar se o ano é bissexto
function verificarAnoBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return "Ano bissexto";
  } else {
    return "Não é bissexto";
  }
}

console.log(verificarAnoBissexto(2024))

// Implemente uma função que calcule a média de dois números, interrompendo a: execução se algum dos números não for válido.
function calcularMedia(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Um dos números não é válido.";
  }
  return (num1 + num2) / 2;
}

console.log(calcularMedia(8, 5))

// Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
function criarArray() {
  const array = [];
  for (i = 1; i <= 10; i++) {
    array.push(i)
  }
  return array
}

const meuArray = criarArray();
console.log(meuArray)

function medirArray(meuArray) {
  return meuArray.length;
}

console.log(medirArray(meuArray));