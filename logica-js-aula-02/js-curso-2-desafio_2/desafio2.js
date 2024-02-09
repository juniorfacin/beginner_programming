// 1. Criar uma função que exibe "Olá, mundo!" no console.
function showPhrase() {
  console.log('Olá, mundo!');
}

showPhrase();

// 2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function showName(name) {
  console.log('Olá', name);
}

showName('Junior');

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calculate(number1, number2) {
  return number1 * number2;
}

let result = calculate(2, 5);
console.log(result);

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calculateAverage(valor1, valor2, valor3) {
  let average = (valor1 + valor2 + valor3) / calculateAverage.length;
  return average.toFixed(2);
}

let resultAverage = calculateAverage(10, 20, 40);
console.log(resultAverage);

// // 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
// function findLargest() {
//   let number1 = parseInt(prompt('Informe o primeiro número:'));
//   let number2 = parseInt(prompt('Informe o segundo número:'));

//   const largestNumber = number1 > number2 ? number1 : number2;
//   console.log(`O maior número é: ${largestNumber}`);
// }
// findLargest();

// 6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function multiplication(number) {
  const result = number * number;
  console.log(`Resultado da multiplicação: ${result}`)
  return result;
}

multiplication(10);
