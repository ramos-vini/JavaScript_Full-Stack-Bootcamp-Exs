let a = parseInt(prompt("Digite um valor inteiro para A."));

let b = parseInt(prompt("Digite um valor inteiro para B."));

let c;

if (a == b) {
    c = a + b;
    alert(`Obrigado. A (${a}) + B (${b}) = ${c}.`);
} else {
    c = a * b;
    alert(`Obrigado. A (${a}) x B (${b}) = ${c}.`);
}