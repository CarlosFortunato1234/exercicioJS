const buttonEx2 = document.getElementById ("EX2")

buttonEx2.addEventListener ("click", () => {

const valorhoraInput = document.getElementById ("valorhora");
const horastrabalhadasmesInput = document.getElementById ("horastrabalhadasmes");
const resultado = document.getElementById("resultado")

  resultado.textContent = Number ( valorhoraInput.value) * Number (horastrabalhadasmesInput.value)







})