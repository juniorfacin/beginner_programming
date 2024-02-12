let nota1 = 10;
let nota2 = 5;
let nota3 = 8;
let nota4 = 7;

function calcularMedia(nota1, nota2, nota3, nota4) {
  let resultadoMedia = (nota1 + nota2 + nota3 + nota4) / 4;
  return resultadoMedia;
}

function verificarMedia(media) {
  return media >= 5 ? 'Aprovado' : 'Reprovado';
}

let mediaCalculada = calcularMedia(nota1, nota2, nota3, nota4);
let resultado = verificarMedia(mediaCalculada);

console.log(`Média: ${mediaCalculada}\nResultado: ${resultado}`);