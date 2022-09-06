let numeros = [];
for (let i = 1; i <= 10; i++) {
    numeros.push(Number(prompt(`Digite o ${i}º número (${i}/10).`)));
}
let numeros30e90 = numeros.filter((value, index, array) => {
    return value >= 30 && value <= 90;
});

if (numeros30e90.length > 0) {
    alert(`Obrigado! Você digitou ${numeros30e90.length} número(s) entre 30 e 90:\n"${numeros30e90.join(", ")}".`);
} else {
    alert(`Obrigado! Você não digitou nenhum número entre 30 e 90.`);
}