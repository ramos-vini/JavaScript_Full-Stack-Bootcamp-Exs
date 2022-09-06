let idades = [];
for (let i = 1; i <= 15; i++) {
    let idade = parseInt(prompt(`Digite a idade da ${i}ª pessoa (${i}/15).`));
    idades.push(idade);
}

let faixasIdade = [];
for (let i = 15; i <= 60; i += 15) {
    faixasIdade.push(idades.filter((value, index, array) => {
        return value <= i && value > (i - 15);
    }))
}

faixasIdade.push(idades.filter((value, index, array) => {
    return value >= 61;
}))

console.log(`
Até 15 anos: ${faixasIdade[0].length} pessoas (${(faixasIdade[0].length * 100 / 15).toFixed(0)}%);
De 16 a 30 anos: ${faixasIdade[1].length} pessoas;
De 31 a 45 anos: ${faixasIdade[2].length} pessoas;
De 46 a 60 anos: ${faixasIdade[3].length} pessoas;
Acima de 61 anos: ${faixasIdade[4].length} pessoas (${(faixasIdade[4].length * 100 / 15).toFixed(0)}%).
`)