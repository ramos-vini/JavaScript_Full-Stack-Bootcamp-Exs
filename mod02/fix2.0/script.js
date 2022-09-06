let a = Number(prompt("Digite o valor de A."));
let b = Number(prompt("Digite o valor de B."));
let c = Number(prompt("Digite o valor de C."));

if (a + b < c) {
    alert(`Obrigado. A soma de A (${a}) + B (${b}) é menor que C (${c}).`);
} else {
    alert(`Obrigado. A soma de A (${a}) + B (${b}) não é menor que C (${c}).`);
}