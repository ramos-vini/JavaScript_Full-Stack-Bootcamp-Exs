class Produto {
    constructor(nome, codigo, preco) {
        this.nome = nome;
        this.codigo = codigo;
        this.preco = preco;
    }
}

let produtos = [];

let produto1 = new Produto("Ovo", "1234567890", 5.0);
produtos.push(produto1);

let produto2 = new Produto("Leite", "1234509876", 6.0);
produtos.push(produto2);

let produto3 = new Produto("Mandioca", "0987654321", 7.0);
produtos.push(produto3);

let produto4 = new Produto("Espinafre", "0987612345", 8.0);
produtos.push(produto4);

class Carrinho {

    produtos = [];

    valorTotal = 0;
}

let carrinho = new Carrinho();

function AdicionarProduto() {
    let inCodigo = document.getElementById("inCodigo");
    let inQuantidade = document.getElementById("inQuantidade");
    let outCarrinho = document.getElementById("outCarrinho");
    let outLista = document.getElementById("outLista");

    let codigo = inCodigo.value;
    let quantidade = parseInt(inQuantidade.value);

    if (codigo == "") {
        alert("Por favor, digite um Código de Barras válido.");
        inCodigo.focus();
        return;
    }

    if (isNaN(quantidade) || quantidade < 1) {
        alert("Por favor, digite um Quantidade válida.");
        inQuantidade.focus();
        return;
    }

    let itemDisponivel = false;

    for (let i = 0; i < produtos.length; i++) {
        if (codigo == produtos[i].codigo) {
            itemDisponivel = true;
            for (let j = 0; j < quantidade; j++) {
                carrinho.produtos.push(produtos[i]);
            }
            carrinho.valorTotal += produtos[i].preco * quantidade;
        }
    }

    if (itemDisponivel == false) {
        alert("Por favor, digite um Código de Barras válido.");
        inCodigo.focus();
        return;
    }

    let produtosAdicionados = [];

    for (let i = 0; i < carrinho.produtos.length; i++) {
        if (produtosAdicionados)
            produtosAdicionados.push({ "nome": carrinho.produtos[i].nome, "quantidade": quantidade });
    }

    let lista = "";

    for (produto of carrinho.produtos) {
        lista += `${produto.nome} - R$ ${produto.preco.toFixed(2).replace(".", ",")}<br>`;
    }

    outCarrinho.innerHTML = "Seu Carrinho:";

    outLista.innerHTML = `${lista}<br>------------------------<br><b>TOTAL: R$ ${carrinho.valorTotal.toFixed(2).replace(".", ",")}`;

    inCodigo.value = "";
    inQuantidade.value = "";
    inCodigo.focus();
}
let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", AdicionarProduto);