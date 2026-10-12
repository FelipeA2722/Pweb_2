const inputN1 = document.getElementById("n1");
const inputN2 = document.getElementById("n2");
const inputOperacao = document.getElementById("operacao");
const bntCalcular = document.getElementById("bntCalcular");
const resultElement = document.getElementById("result");

function calculadora(n1, n2, operacao) {
    switch (operacao) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            if (n2 === 0) {
                return "Erro: divisão por zero";
            }
            return n1 / n2;
        default:
            return "Erro: operação inválida";
    }
}

function executarCalculo() {
    let n1 = Number(inputN1.value);
    let n2 = Number(inputN2.value);
    let operacao = inputOperacao.value;

    let resultado = calculadora(n1, n2, operacao);
    resultElement.textContent = "Resultado: " + resultado;
}

bntCalcular.addEventListener("click", executarCalculo);