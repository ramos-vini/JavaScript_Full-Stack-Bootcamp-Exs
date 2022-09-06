var preco = parseFloat(prompt("Digite o valor do produto."));

var condicao = prompt("Digite o número referente à forma de pagamento:\n\n1 - À vista em dinheiro ou cheque;\n2 - À vista no cartão de crédito;\n3 - Parcelado em 2x;\n4 - Parcelado a partir de 3x.");

switch (condicao) {
    case "1":
        alert(`Obrigado! O valor total a ser pago pelo produto é de R$ ${(preco * 0.9).toFixed(2).replace(".", ",")}.`);
        break;

    case "2":
        alert(`Obrigado! O valor total a ser pago pelo produto é de R$ ${(preco * 0.85).toFixed(2).replace(".", ",")}.`);
        break;

    case "3":
        alert(`Obrigado! O valor total a ser pago pelo produto é de R$ ${(preco).toFixed(2).replace(".", ",")}.`);
        break;

    case "4":
        alert(`Obrigado! O valor total a ser pago pelo produto é de R$ ${(preco * 1.1).toFixed(2).replace(".", ",")}.`);
        break;

    default:
        alert("Forma de pagamento não disponível.");
        break;
}