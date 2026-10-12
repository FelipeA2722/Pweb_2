let valor;
valor = parseFloat(prompt("Digite um valor:"));

let valDolar = valor / 4.99;
const resultElement = document.getElementById("result");
resultElement.textContent = "O valor em Dólar é: " + valDolar.toFixed(2);

console.log("O valor em Dólar é: " + valDolar.toFixed(2));
