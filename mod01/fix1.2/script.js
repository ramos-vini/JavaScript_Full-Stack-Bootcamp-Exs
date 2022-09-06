let c = Number(prompt("Vamos realizar um empréstimo.\n\nQual valor você deseja receber emprestado?"));

let t = Number(prompt("Em quantos meses você pagará esse empréstimo?"));

let i = 0.02;

let m = c * Math.pow((1 + i), t);

alert(`Obrigado. Após ${t} meses, o valor a pagar será de R$ ${m.toFixed(2).replace(".", ",")}.`);