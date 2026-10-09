let inicio = 1;
let fim = 0;
let sum=0;
let cont = 0;

inicio = parseInt(prompt("Digite o valor inicial:"));
fim = parseInt(prompt("Digite o valor final:"));

while (true) {
    if (inicio%2 === 1){
        sum+=inicio;
        cont += 1;
    }
    if (cont === 5){
        break;
    }
    inicio+=1
    if (cont != 5 && inicio === fim){
        console.log("O numero não tem 5 impares no interevalo")
        inicio = parseInt(prompt("Digite o valor inicial:"));
        fim = parseInt(prompt("Digite o valor final:"));
    }
 
}
console.log("A soma dos 5 primeiros numeros impares é: " + sum);