const pi = 3.14;
const inputRaio = document.getElementById("raio");
const bntCalcular = document.getElementById("bntCalcular");
const resultElement = document.getElementById("result");

function calcularArea() {
const raio = parseFloat(inputRaio.value);
let area = 2 * pi * raio;
const resultElement = document.getElementById("result");
resultElement.textContent = "A área do círculo é: " + area.toFixed(2);

}
bntCalcular.addEventListener("click", calcularArea);