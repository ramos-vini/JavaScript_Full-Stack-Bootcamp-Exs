let n;
do {
    n = parseInt(prompt(`Vamos fazer a sequência de Fibonacci!\n\nDigite um valor inteiro para o tamanho dessa sequência.`));
} while (isNaN(n) || n < 1)

let numeros = [];

function criarSequenciaFibonacci(tamanho) {
    if (tamanho == 1) {
        numeros.push(0);
    } else if (tamanho == 2) {
        numeros.push(0, 1);
    } else {
        numeros.push(0, 1);
        for (let i = 2; i < tamanho; i++) {
            let aux = numeros[i - 1] + numeros[i - 2];
            numeros.push(aux);
        }
    }
}

criarSequenciaFibonacci(n);

alert(`Sequência de Fibonacci com ${n} valores:\n${numeros.join(", ")}.`);