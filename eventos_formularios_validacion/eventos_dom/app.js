// Selección del elemento mediante querySelector [2]
const boton = document.querySelector("#btn-saludo");
const mensaje = document.querySelector("#mensaje");

// Registro del manejador mediante addEventListener [2, 9]
boton.addEventListener("click", (event) => {
  console.log("Elemento cliqueado:", event.target); // Referencia al objetivo [7, 8]
  mensaje.textContent = "¡Has echo clic en el botón correctamente!";
});