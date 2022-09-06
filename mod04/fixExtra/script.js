let op;
do {
    do {
        op = prompt("Escolha uma das opções abaixo:\n1 - Média aritmética\n2 - Média ponderada\n3 - Sair");
        if (op != "1" && op != "2" && op != "3") {
            alert("Opção inválida.")
        }
    } while (op != "1" && op != "2" && op != "3")

    switch (op) {
        case "1": {
            let notas = [];

            for (let i = 1; i <= 2; i++) {
                let n;

                do {
                    n = Number(prompt(`Digite a sua ${i}ª Nota (${i}/2)`));

                    if (isNaN(n)) {
                        alert("Digite uma nota válida.");
                    }
                } while (isNaN(n))

                notas.push(n);
            }

            let media = 0;

            for (let i = 0; i < notas.length; i++) {
                media += notas[i];
            }

            media /= notas.length;

            alert(`Média Aritmética das Notas: ${media.toFixed(1).replace(".", ",")}`);

            break;
        }

        case "2": {
            let notas = [];

            for (let i = 1; i <= 3; i++) {
                let n;

                do {
                    n = Number(prompt(`Digite a sua ${i}ª Nota (${i}/3)`));

                    if (isNaN(n)) {
                        alert("Digite uma nota válida.");
                    }
                } while (isNaN(n))

                notas.push(n);
            }

            let media = 0;
            let pesoTotal = 0;

            for (let i = 0; i < notas.length; i++) {
                media += notas[i] * (i + 1);
                pesoTotal += (i + 1);
            }

            media /= pesoTotal;

            alert(`Média Ponderada das Notas: ${media.toFixed(1).replace(".", ",")}`);
            break;
        }

        case "3": {
            alert("Obrigado, até breve!");
            break;
        }

        default:
            break;
    }
} while (op != "3")