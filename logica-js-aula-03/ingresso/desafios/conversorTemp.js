
function converterTemperatura(valor, escala) {
  if (escala.toLowerCase() === 'celsius') {
    return (valor * 9 / 5) + 32;
  } else if (escala.toLowerCase() === 'fahrenheit') {
    return (valor - 32) * 5 / 9;
  } else {
    return "Escala inválida";
  }
}


let temperaturaCelsius = 25;
let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, 'celsius');
console.log(temperaturaFahrenheit);  
