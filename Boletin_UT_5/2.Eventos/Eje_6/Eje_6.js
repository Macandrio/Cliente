window.addEventListener('load', inicializar);

function inicializar() {
    document.getElementById('formulario').addEventListener('submit', nombremayuscula);
}

function nombremayuscula(event) {
    event.preventDefault(); // Evita el envío del formulario
    const nombre = document.getElementById('nombre').value;

    if (nombre === "") {
        mensajeError.textContent = "El campo no puede estar vacío.";
        return; //El return está ahí para detener la ejecución de la función si se encuentra un error en la validación
    }

    if (nombre != nombre.toUpperCase()) {
        mensajeError.textContent = "El nombre debe estar en mayúsculas.";
        return;
    }

    alert("Formulario enviado correctamente.");
    // Aquí puedes agregar el código para enviar el formulario al servidor
    // Por ejemplo, usando fetch o un método similar.
}
