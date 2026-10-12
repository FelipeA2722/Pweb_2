const bntCalcular = document.getElementById("bntCalcular");
const resultElement = document.getElementById("result");

function calcularSomaPrimos() {
    let quantidade = parseInt(prompt("Quantos números inteiros você quer digitar?"));
    let contador = 0;
    let somaPrimos = 0;

    while (contador < quantidade) {
        let numero = parseInt(prompt("Digite o " + (contador + 1) + "º número inteiro positivo:"));
        let ehPrimo = true;

        if (numero <= 1) {
            ehPrimo = false;
        } else {
            let divisor = 2;
            while (divisor < numero) {
                if (numero % divisor === 0) {
                    ehPrimo = false;
                }
                divisor++;
            }
        }

        if (ehPrimo) {
            somaPrimos = somaPrimos + numero;
        }
        contador++;
    }
    resultElement.textContent = "A soma dos números primos digitados é: " + somaPrimos;
}
bntCalcular.addEventListener("click", calcularSomaPrimos);