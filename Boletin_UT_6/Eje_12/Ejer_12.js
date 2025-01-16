window.addEventListener('load', inicializar);

function inicializar() {
    const seguidor = document.getElementById('seguidor');

    // Escuchar el movimiento del ratón
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX; // Coordenada X del ratón
        const y = event.clientY; // Coordenada Y del ratón

        // Mover el div seguidor a las coordenadas del ratón
        seguidor.style.left = `${x}px`;
        seguidor.style.top = `${y}px`;
    });
}
