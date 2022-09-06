let n = parseInt(prompt("Digite um número inteiro."));

let listaPares = [];
let listaImpares = [];

if (n > 0) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            listaPares.push(i);
        } else {
            listaImpares.push(i);
        }
    }
} else {
    for (let i = 1; i >= n; i--) {
        if (i % 2 == 0) {
            listaPares.push(i);
        } else {
            listaImpares.push(i);
        }
    }
}

alert(`
Números inteiros Pares de 1 a ${n}:
${n == 1 ? "Não há" : listaPares.join(", ")}.\n
Números inteiros Ímpares de 1 a ${n}:
${listaImpares.join(", ")}.
`);