const formulario = document.querySelector("#mi-formulario");
const campoNombre = document.querySelector("#nombre");
const resultado = document.querySelector("#resultado");

// Capturar el envío del formulario [17]
formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita la recarga de página por defecto [11, 13, 14]

  // Lectura del valor del campo dentro del callback [10, 18]
  const valorNombre = campoNombre.value;
  resultado.textContent = `Formulario enviado con el nombre: ${valorNombre}`;
});

// Evento en tiempo real al escribir [13]
campoNombre.addEventListener("input", () => {
  console.log("Texto actual:", campoNombre.value);
});
