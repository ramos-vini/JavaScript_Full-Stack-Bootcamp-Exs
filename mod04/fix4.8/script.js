while (true) {
    function gerarNumeroRandom() {
        return Math.floor(Math.random() * 10 + 1);
    }

    let nRandom = gerarNumeroRandom();
    console.log(nRandom);

    let nDigitado;

    do {
        nDigitado = parseInt(prompt("Tente achar o número escondido!\nDigite um número de 1 a 10."));
        if (isNaN(nDigitado) || nDigitado < 1 || nDigitado > 10) {
            alert("Inválido. Digite um número inteiro de 1 a 10.");
        }
    } while (isNaN(nDigitado) || nDigitado < 1 || nDigitado > 10)

    if (nDigitado == nRandom) {
        alert(`Parabéns! Você acertou o número escondido (${nRandom}).`);
    } else {
        alert(`Não foi dessa vez... O número sorteado era ${nRandom}.\nTente novamente!`);
    }
}