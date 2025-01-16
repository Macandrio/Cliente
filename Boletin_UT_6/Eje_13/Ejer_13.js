window.addEventListener('load', inicializar);

function inicializar() {
    document.addEventListener('mousemove', cambiarColorFondo);
}

function cambiarColorFondo(event) {
    const x = event.clientX; // Coordenada X del ratón
    const y = event.clientY; // Coordenada Y del ratón

    const ancho = window.innerWidth; // Ancho de la ventana
    const alto = window.innerHeight; // Alto de la ventana

    // Calcular componentes RGB basados en las coordenadas
    const rojo = Math.round((x / ancho) * 255);
    const verde = Math.round((y / alto) * 255);
    const azul = Math.round(((x + y) / (ancho + alto)) * 255);

    // Cambiar el color de fondo del cuerpo
    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}
