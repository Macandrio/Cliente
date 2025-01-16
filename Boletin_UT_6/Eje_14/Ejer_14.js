window.addEventListener('load', inicializar);

function inicializar() {
    const elementos = document.querySelectorAll('.elemento');
    const contenedores = document.querySelectorAll('.contenedor');
    const papelera = document.getElementById('papelera');

    let elementoArrastrado = null;

    // Configurar eventos para los elementos arrastrables
    elementos.forEach((elemento) => {
        elemento.addEventListener('dragstart', (e) => {
            elementoArrastrado = elemento;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', elemento.textContent);
            elemento.style.opacity = '0.5';
        });

        elemento.addEventListener('dragend', () => {
            elementoArrastrado = null;
            elemento.style.opacity = '1';
        });
    });

    // Configurar eventos para los contenedores
    contenedores.forEach((contenedor) => {
        contenedor.addEventListener('dragover', (e) => {
            e.preventDefault(); // Permitir el drop
            e.dataTransfer.dropEffect = 'move';
            contenedor.classList.add('over');
        });

        contenedor.addEventListener('dragleave', () => {
            contenedor.classList.remove('over');
        });

        contenedor.addEventListener('drop', (e) => {
            e.preventDefault();
            contenedor.classList.remove('over');
            if (contenedor !== papelera && elementoArrastrado) {
                contenedor.appendChild(elementoArrastrado);
            }
        });
    });

    // Configurar eventos para la papelera
    papelera.addEventListener('dragover', (e) => {
        e.preventDefault(); // Permitir el drop
        e.dataTransfer.dropEffect = 'move';
    });

    papelera.addEventListener('drop', (e) => {
        e.preventDefault();
        if (elementoArrastrado) {
            elementoArrastrado.remove(); // Eliminar el elemento
            elementoArrastrado = null;
        }
    });
}
