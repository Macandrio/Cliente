window.addEventListener('load', inicializar);

function inicializar() {  
    document.getElementById('enviar').addEventListener('click', recogerDatos);
}

function recogerDatos() {
    var nombre = document.getElementById('name').value;
    var numero_habitacion = document.getElementById('room').value;

    // Convertir NodeList a Array para usar forEach
    var seleccionado = document.getElementBy('coffee').value;


    if (nombre && numero_habitacion && seleccionado) {
        // Crear las cookies para cada valor ingresado
        document.cookie = `nombre=${nombre}; path=/; max-age=86400`; // Expira en 1 día (86400 segundos)
        document.cookie = `numero_habitacion=${numero_habitacion}; path=/; max-age=86400`;
        document.cookie = `seleccionado=${seleccionado.value}; path=/; max-age=86400`;

        alert("Datos guardados en cookies");
    } else {
        alert("Por favor, complete todos los campos antes de guardar.");
    }
}
