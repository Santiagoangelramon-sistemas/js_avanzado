const form = document.querySelector("#form-registro");
const email = document.querySelector("#email");
const errorEmail = document.querySelector("#error-email");

// Validación en tiempo real usando la API de validación [31, 35]
email.addEventListener("input", () => {
  email.setCustomValidity(""); // Restablece el mensaje personalizado [36]

  if (email.validity.valueMissing) { // Revisa si el campo está vacío [25, 26]
    errorEmail.textContent = "El correo electrónico es obligatorio.";
  } else if (email.validity.typeMismatch) { // Revisa el formato de correo [25, 26]
    errorEmail.textContent = "Introduce una dirección de correo válida.";
  } else if (!email.value.endsWith("@example.com")) { // Regla personalizada JS [35]
    email.setCustomValidity("El correo debe pertenecer al dominio @example.com");
    errorEmail.textContent = "El correo debe pertenecer al dominio @example.com";
  } else {
    errorEmail.textContent = "";
  }
});

form.addEventListener("submit", (e) => {
  if (!email.validity.valid) {
    e.preventDefault(); // Detiene el envío si hay errores [12, 37]
    alert("Por favor, corrige los errores antes de enviar.");
  }
});