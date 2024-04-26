let minhaLista = []

minhaLista.push(1, 2, 3);
console.log('Adicionando elementos: ', minhaLista)

let outrosNumeros = [4, 5, 6];

let novaLista = minhaLista.concat(outrosNumeros);
console.log('Juntando os arrays: ', novaLista);

// novaLista.pop()
// console.log('Removendo o último elemento: ', novaLista);

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Embaralhando novaLista
novaLista = embaralharArray(novaLista);
console.log("Embaralhando a Lista:", novaLista);

function removerDuplicatas(array) {
  return [...new Set(array)];
}

let novaListaSemDuplicatas = removerDuplicatas(novaLista);
console.log('Remover Duplicatas:', novaListaSemDuplicatas);