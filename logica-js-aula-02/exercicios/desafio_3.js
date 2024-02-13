
// IMC Calculator
function calculateImc(weight, height) {
  let imc = weight / (height * height);
  return imc.toFixed(2);
}

console.log(calculateImc(110, 1.87));

// Dollar Converter
function convertDollar(value) {
  let dollar = 4.80;
  const conversion = value * dollar;
  return conversion;
}

console.log(convertDollar(100));

// Room Area
function showAreaRoom(height, width) {
  const area = height * width;
  const perimeter = 2 * (height + width);

  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimeter} metros`);
}

showAreaRoom(10, 20);

// Circle Area and Perimeter
function calculateCircle(radius) {
  const pi = 3.14;

  const circleArea = pi * (radius * radius);
  const circlePerimeter = 2 * pi * radius;
  console.log(`Área do círculo é ${circleArea.toFixed(2)} e o perímetro: ${circlePerimeter.toFixed(2)}`);
}

calculateCircle(8);

// Mostrar Tabuada
function mostrarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

let numero = 4
mostrarTabuada(numero);

