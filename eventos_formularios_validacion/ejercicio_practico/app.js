const form = document.querySelector("#form-ejercicio");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

// TODO 1: Escuchar el evento submit del formulario y prevenir la recarga de página [11, 17]
form.addEventListener("submit", (e) => {
  // Escribe tu código aquí
});

// TODO 2: Crear una función para verificar que las contraseñas coincidan [29]
function validarContrasenas() {
  // Pista: compara password.value y confirmPassword.value
  // Utiliza confirmPassword.setCustomValidity(...) [29]
}

password.addEventListener("input", validarContrasenas);
confirmPassword.addEventListener("input", validarContrasenas);