const inputNumeros = document.getElementById("numeros");
const bntCalcular = document.getElementById("bntCalcular");
const resultElement = document.getElementById("result");

function produtorio() {
    let textoInput = inputNumeros.value;
    let numeros = textoInput.split(",");

    let total = 1;
    let i = 0;

    while (i < numeros.length) {
        let n = Number(numeros[i]);
        total = total * n;
        i++;
    }

    resultElement.textContent = "Resultado do produtório: " + total;
}

bntCalcular.addEventListener("click", produtorio);