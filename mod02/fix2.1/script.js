let nome = prompt("Digite o seu nome.");

let sexo = prompt('Digite o seu sexo ("M" para Masculino ou "F" para Feminino).').toUpperCase();

let estadoCivil = prompt("Digite o seu estado civil.");

if (sexo == "F" && estadoCivil.toUpperCase() == "CASADA") {
    let tempoCasada = prompt("Digite o seu tempo de casada (anos).");
    alert(`Obrigado!\n\nNome: ${nome};\nSexo: ${sexo};\nEstado Civil: ${estadoCivil};\nTempo de casada: ${tempoCasada} anos.`);
} else {
    alert(`Obrigado!\n\nNome: ${nome};\nSexo: ${sexo};\nEstado Civil: ${estadoCivil}.`);
}