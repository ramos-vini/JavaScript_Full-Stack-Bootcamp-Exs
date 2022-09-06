let produto = prompt("Digite o nome de um produto.");

let precoCusto = Number(prompt("Agora digite o preço de custo desse produto."));

let precoVenda = alert(`Obrigado. O preço de venda do produto "${produto}" será de R$ ${(precoCusto * 1.65).toFixed(2).replace(".", ",")}.`);