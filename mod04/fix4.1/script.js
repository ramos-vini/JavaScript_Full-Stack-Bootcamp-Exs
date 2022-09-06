let n = parseInt(prompt("Digite um número."));

let tabuadaN = "";

for (let i = 1; i <= 10; i++) {
    tabuadaN += `${n} x ${i} = ${n * i}\n`
}

alert(`Tabuada do número ${n}:\n${tabuadaN}`);