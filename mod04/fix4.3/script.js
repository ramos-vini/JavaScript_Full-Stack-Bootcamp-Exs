let idades = [];

for (let i = 1; i <= 10; i++) {
    let idade = parseInt(prompt(`Digite a idade da ${i}ª pessoa (${i}/10).`));
    idades.push(idade);
}

let maiorIdades = idades.filter((value, index, array) => {
    return value >= 18;
})

alert(`Obrigado! O número de pessoas com idade maior ou igual a 18 anos é de ${maiorIdades.length} pessoas.`);