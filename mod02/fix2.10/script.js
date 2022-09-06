let numeroId = Number(prompt("Digite o seu número de identificação."))
let nota1 = Number(prompt("Digite a nota de sua 1ª avaliação.").replace(",", "."));
let nota2 = Number(prompt("Digite a nota de sua 2ª avaliação.").replace(",", "."));
let nota3 = Number(prompt("Digite a nota de sua 3ª avaliação.").replace(",", "."));
let me = Number(prompt("Digite a nota de sua média de exercícios.").replace(",", "."));

let ma = (nota1 + (nota2 * 2) + (nota3 * 3) + me) / 7;

let conceito;

if (ma >= 90) {
    conceito = "A";
} else if (ma >= 75) {
    conceito = "B";
} else if (ma >= 60) {
    conceito = "C";
} else if (ma >= 40) {
    conceito = "D";
} else {
    conceito = "E";
}

let situacaoFinal;

if (conceito == "D" || conceito == "E") {
    situacaoFinal = "Reprovado";
} else {
    situacaoFinal = "Aprovado";
}

alert(`
        Número de Identificação: ${numeroId};\n
        1ª Nota: ${nota1.toFixed(1).replace(".", ",")};\n
        2ª Nota: ${nota2.toFixed(1).replace(".", ",")};\n
        3ª Nota: ${nota3.toFixed(1).replace(".", ",")};\n
        Nota média de exercícios: ${me.toFixed(1).replace(".", ",")};\n
        Média de Aproveitamento: ${ma.toFixed(1).replace(".", ",")}\n
        Conceito: ${conceito};\n
        Situação Final: ${situacaoFinal}.`);