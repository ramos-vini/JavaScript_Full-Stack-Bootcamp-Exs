let sexo = prompt('Digite o seu sexo ("M" para Masculino e "F" para Feminino).').toUpperCase();

let h = Number(prompt("Digite a sua altura em metros (Ex: 1,73).").replace(",", "."));

let pesoIdeal;

if (sexo == "M") {
    pesoIdeal = (72.7 * h) - 58;
} else {
    pesoIdeal = (62.1 * h) - 44.7;
}

alert(`Obrigado! O seu peso ideal é de ${pesoIdeal.toFixed(2)} Kg`);