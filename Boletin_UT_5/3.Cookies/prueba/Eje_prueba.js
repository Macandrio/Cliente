window.addEventListener('load', inicializar);

function inicializar() {  
    document.getElementById('enviar').addEventListener('click', recogerDatos);
}

function recogerDatos() {
    var nombre = document.getElementById('name').value;
    var numero_habitacion = document.getElementById('room').value;

    // Convertir NodeList a Array para usar forEach
    var cafes = document.getElementsByName('caffe');
    var seleccionar = [];

    cafes.forEach(cafe => {
        if(cafe.checked){
            seleccionar.push(cafe.value);
        }
    });

    if (nombre && numero_habitacion && seleccionar) {
        // Crear las cookies para cada valor ingresado
        document.cookie = `nombre=${nombre}; path=/; max-age=86400`; // Se guarda en todas las paginas y Expira en 1 día (86400 segundos)
        document.cookie = `numero_habitacion=${numero_habitacion}; path=/; max-age=86400`;
        document.cookie = `favorito=${seleccionado.join(',')}; parth=/; max-age=86400`;

    }

    
}
