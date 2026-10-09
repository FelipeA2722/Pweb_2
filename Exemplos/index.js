console.log("Script externo");
const elTitulo = document.getElementById("titulo");
const elNome = document.getElementById("nome");
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // impede o recarregamento

  if (elNome !== "") {
    elTitulo.textContent = `Bem vindo, ${elNome.value}!`;
  }
});