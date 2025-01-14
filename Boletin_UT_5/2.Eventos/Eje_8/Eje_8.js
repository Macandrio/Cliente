window.addEventListener('load', inicializar);

function inicializar() {
    document.getElementById('formulario').addEventListener('submit', validarFormulario);
}

function validarFormulario(event) {
    event.preventDefault(); // Evita el envío del formulario
    var mensajeError = document.getElementById('mensajeError');
    mensajeError.textContent = ""; // Limpia errores previos

    var nombre = document.getElementById('nombre').value.trim(); //trim elimina espacios al inicio y fin de la cadena
    var email = document.getElementById('email').value.trim();
    var edad = document.getElementById('edad').value.trim();
    var contraseña = document.getElementById('contraseña').value.trim();

    // Validaciones
    if (nombre === "") {
        mensajeError.textContent = "El nombre es obligatorio.";
        return;
    }

    if (!/^[\w.-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
        mensajeError.textContent = "Por favor, introduce un correo válido.";
        return;
    }

    if (edad === "" || isNaN(edad) || parseInt(edad) <= 0) {
        mensajeError.textContent = "Introduce una edad válida.";
        return;
    }

    if (contraseña.length < 6) {
        mensajeError.textContent = "La contraseña debe tener al menos 6 caracteres.";
        return;
    }

    // Si todas las validaciones pasan
    mensajeError.textContent = "";
    alert("Formulario enviado correctamente.");
    // Aquí puedes enviar el formulario al servidor
    event.target.submit(); // Enviar formulario si todo está correcto
}
