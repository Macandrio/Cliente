window.addEventListener('load', inicializar);

function inicializar() {
    document.getElementById('resetear').addEventListener('click', confirmarReseteo);
}

function confirmarReseteo(event) {
    var confirmacion = confirm("¿Estás seguro de que quieres borrar todos los datos?"); //para que salga un alert de confirmacion
    if (!confirmacion) {
        event.preventDefault(); // Evita que se borren los datos si el usuario cancela
    }
}
