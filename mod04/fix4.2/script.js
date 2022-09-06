let stringTabuadas = "";

for (let i = 1; i <= 10; i++) {
    let tabuada = `\nTabuada do número ${i}:\n`;
    for (let j = 0; j <= 10; j++) {
        tabuada += `${i} x ${j} = ${i * j}\n`
    }
    stringTabuadas += tabuada;
}

console.log(stringTabuadas);