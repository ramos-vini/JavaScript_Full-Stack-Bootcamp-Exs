let n = parseInt(prompt("Vamos criar uma lista numérica. Quantos elementos você deseja inserir?"));

let lista = [];

for (let i = 0; i < n; i++) {
    lista.push(Number(prompt(`Digite o ${i + 1}º número.`)));
}

listaOrdenada = lista.sort((a, b) => {
    return a - b;
});

alert(`Obrigado! A sua lista em ordem crescente é: ${listaOrdenada}.`);