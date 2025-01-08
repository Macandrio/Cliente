window.addEventListener('DOMContentLoaded', inicializar);

function inicializar() {

    // 1. Seleccionar todos los elementos de la lista

    var listacoches = document.getElementById('lista-coches');
    var elementos = listacoches.getElementsByTagName('li');

    // 2. Añadir estilo de cuadradillo (usando CSS inline por simplicidad)

    for (const elemento of elementos) {
        elemento.style.listStyleType = 'square'; // Cambia el estilo a cuadradillo
        elemento.style.margin = '10px 0'; // Añade un margen entre elementos
        elemento.style.fontWeight = 'bold'; // Estiliza el texto
    }
    
    // 3. Añadir un nuevo modelo al principio

    var nuevomodeloinicio = document.createElement('li');
    nuevomodeloinicio.textContent = 'Toyota';
    listacoches.insertBefore(nuevomodeloinicio,listacoches.firstChild)
    
    // 4. Añadir un nuevo modelo al final
    
    var nuevomodelofinal = document.createElement('li');
    nuevomodelofinal.textContent = 'Ferrari';
    listacoches.appendChild(nuevomodelofinal);

    // 5. Añadir un nuevo modelo en una posición intermedia

    var nuevomodelointermedio = document.createElement('li');
    nuevomodelointermedio.textContent = 'Porsche';
    var posicion = listacoches.children[2]; //Antyes del tercer elemento
    listacoches.insertBefore(nuevomodelointermedio, posicion);

    // 6. Añadir un modelo antes y después de "BMW"

    for (var elemento of elementos) {
        if(elemento.textContent === 'BMW'){
            
            // Modelo antes de BMW

            var modeloantes = document.createElement('li');
            modeloantes.textContent('Audi');
            listacoches.insertBefore(modeloantes,elemento)

            // Modelo después de BMW

            const modelodespues = document.createElement('li');
            modelodespues.textContent = 'Mercedes';
            listaCoches.insertBefore(modelodespues, elemento.nextSibling);
            break; // Salimos del bucle para evitar duplicados
        }

    }
        
    }