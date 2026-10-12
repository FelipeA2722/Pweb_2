const nota_1 = document.getElementById('nota1');
const nota_2 = document.getElementById('nota2');
const bntCalcular = document.getElementById("bntCalcular");
const resultElement = document.getElementById("result");

function calcularMedia() {
    const nota1 = parseFloat(nota_1.value);
    const nota2 = parseFloat(nota_2.value);
    let media = (nota1 * 2 + nota2 * 3) / 5;

    if (media >= 7) {
        resultElement.textContent = "A média das notas é: " + media.toFixed(2) + ". Parabéns, você foi aprovado!";
    } else if (media >= 5) {
        resultElement.textContent = "A média das notas é: " + media.toFixed(2) + ". Você está de recuperação.";
    } else {
        resultElement.textContent = "A média das notas é: " + media.toFixed(2) + ". Infelizmente, você foi reprovado.";
    }
}

bntCalcular.addEventListener("click", calcularMedia);