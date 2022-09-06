let v1 = prompt('Digite um valor booleano ("V" para Verdadeiro ou "F" para falso).').toUpperCase();

if (v1 == "V") {
    v1 = true;
} else {
    v1 = false;
}

let v2 = prompt('Digite um segundo valor booleano ("V" para Verdadeiro ou "F" para falso).').toUpperCase();

if (v2 == "V") {
    v2 = true;
} else {
    v2 = false;
}

if (v1 == true && v1 == v2) {
    alert(`Obrigado! Ambos os valores digitados são Verdadeiros.`);
} else if (v1 == false && v1 == v2) {
    alert(`Obrigado! Ambos os valores digitados são Falsos.`);
} else if (v1 == true) {
    alert(`Obrigado! O 1º valor é Verdadeiro e o 2º é Falso.`);
} else {
    alert(`Obrigado! O 1º valor é Falso e o 2º é Verdadeiro.`);
}