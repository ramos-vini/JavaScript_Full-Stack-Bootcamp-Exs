        // Adicione uma variáve de tipo string para salvar seu nome
        let nome = "Vinícius";

        // Adicione uma variável de tipo inteiro para salvar sua idade
        let idade = parseInt("21");

        // Adicione uma ou mais variáveis para armazenar os dados do seu nascimento e salvá-lo no formato de data.
        let data = new Date("06-23-2001");
        let dia = data.getDate();
        let mes = data.getMonth();
        let ano = data.getFullYear();

        // Utilize a função prompt para dinamizar essas variáveis
        nome = prompt("Digite seu nome.");
        idade = parseInt(prompt("Digite a sua idade."));

        let dataString = prompt('Digite a sua data de nascimento no formato "MM-DD-AAAA".');

        data = new Date(dataString);
        dia = (`0${data.getDate()}`).slice(-2);
        mes = (`0${data.getMonth() + 1}`).slice(-2);
        ano = data.getFullYear();

        // Utilize a função console para exibir uma mensagem informando seu nome, idade e data de nascimento.
        console.log(`Meu nome é ${nome}, tenho ${idade} anos e nasci em ${dia}/${mes}/${ano}.`);