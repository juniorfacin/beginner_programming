function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * calculateFactorial(number - 1);
  }
}

const inputNumber = parseInt(prompt('Informe um número para calcularmos o fatorial:'));
const result = calculateFactorial(inputNumber);

alert(`O fatorial de ${inputNumber} é ${result}`);