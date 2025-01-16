window.addEventListener('load', inicializar);

function inicializar() {
    const formulario = document.getElementById('formulario');
    const inputCodigo = document.getElementById('codigo');
    const mensaje = document.getElementById('mensaje');

    // Expresión regular para validar el código
    const regexCodigo = /^[A-Z]{3}-\d{1,5}$/;

    formulario.addEventListener('submit', (event) => {
        const codigo = inputCodigo.value;

        if (!regexCodigo.test(codigo)) {
            event.preventDefault(); // Evita que el formulario se envíe
            mensaje.textContent = "El código debe tener tres letras mayúsculas, un guion y de 1 a 5 números (ej: ASX-123).";
            mensaje.setAttribute("class", "error");
        } else {
            // Almacenar el código en el almacenamiento local
            localStorage.setItem('codigoProducto', codigo);

            mensaje.textContent = "El código se ha guardado correctamente.";
            mensaje.setAttribute("class", "success");

            // Permitir el envío del formulario
            // No se llama a event.preventDefault() en este caso.
        }
    });
}
