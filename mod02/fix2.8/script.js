let peso = Number(prompt("Digite o seu Peso."));

let h = Number(prompt("Digite a sua altura em metros (Ex: 1,73).").replace(",", "."));

let imc = peso / (h * 2);

if (imc < 18.5) {
    alert(`Obrigado! Segundo a OMS, você está abaixo do peso normal.`);
} else if (imc < 25) {
    alert(`Obrigado! Segundo a OMS, você está dentro do peso normal.`);
} else if (imc < 30) {
    alert(`Obrigado! Segundo a OMS, você está acima do peso normal.`);
} else {
    alert(`Obrigado! Segundo a OMS, você está obeso.`);
}