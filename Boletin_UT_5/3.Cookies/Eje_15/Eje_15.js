window.addEventListener('load', inicializar);

function inicializar() {
    const formulario = document.getElementById('formDireccion');
    const direccionInput = document.getElementById('direccion');
    const mensaje = document.getElementById('mensaje');

    // Comprobar si ya hay una cookie para la dirección
    const direccionGuardada = getCookie('direccion');
    if (direccionGuardada) {
        direccionInput.value = direccionGuardada; // Rellenar la dirección guardada
        mensaje.textContent = `Dirección recuperada: ${direccionGuardada}`;
    }

    // Guardar la dirección en una cookie al enviar el formulario
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        const direccion = direccionInput.value.trim();
        if (direccion) {
            setCookie('direccion', direccion, 365); // Guardar dirección en cookie por un año
            mensaje.textContent = `Dirección guardada: ${direccion}`;
        } else {
            mensaje.textContent = 'Por favor, introduce una dirección válida.';
        }
    });
}

// Función para crear una cookie
function setCookie(nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    const expiracion = `expires=${fecha.toUTCString()}`;
    document.cookie = `${nombre}=${encodeURIComponent(valor)}; ${expiracion}; path=/`;
}

// Función para obtener una cookie por su nombre
function getCookie(nombre) {
    const nombreEQ = nombre + "=";
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.indexOf(nombreEQ) === 0) {
            return decodeURIComponent(cookie.substring(nombreEQ.length, cookie.length));
        }
    }
    return null;
}
