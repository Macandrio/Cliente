window.addEventListener('load', inicializar);

function inicializar() {
    const formulario = document.getElementById('formDireccion');
    const direccionInput = document.getElementById('direccion');
    const mensaje = document.getElementById('mensaje');

    // Recuperar la dirección guardada en localStorage
    const direccionGuardada = localStorage.getItem('direccion');
    if (direccionGuardada) {
        direccionInput.value = direccionGuardada; // Rellenar la dirección guardada
        mensaje.textContent = `Dirección recuperada: ${direccionGuardada}`;
    }

    // Guardar la dirección en localStorage al enviar el formulario
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        const direccion = direccionInput.value.trim();
        if (direccion) {
            localStorage.setItem('direccion', direccion); // Guardar la dirección
            mensaje.textContent = `Dirección guardada: ${direccion}`;
        } else {
            mensaje.textContent = 'Por favor, introduce una dirección válida.';
        }
    });
}
