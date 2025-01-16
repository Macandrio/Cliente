window.addEventListener('load', inicializar);

function inicializar() {
    const elementos = document.querySelectorAll('.elemento');
    const destino = document.getElementById('destino');

    // Configurar eventos para los elementos arrastrables
    elementos.forEach((elemento) => {
        elemento.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', elemento.textContent); // Pasar el contenido del elemento
            e.dataTransfer.effectAllowed = 'copy';
        });
    });

    // Configurar eventos para el contenedor destino
    destino.addEventListener('dragover', (e) => {
        e.preventDefault(); // Permitir el drop
        e.dataTransfer.dropEffect = 'copy';
        destino.classList.add('over');
    });

    destino.addEventListener('dragleave', () => {
        destino.classList.remove('over');
    });

    destino.addEventListener('drop', (e) => {
        e.preventDefault();
        destino.classList.remove('over');
        const contenido = e.dataTransfer.getData('text/plain'); // Obtener el contenido arrastrado

        // Crear una copia del elemento en el contenedor destino
        const nuevoElemento = document.createElement('div');
        nuevoElemento.className = 'elemento';
        nuevoElemento.textContent = contenido;
        destino.appendChild(nuevoElemento);
    });
}
