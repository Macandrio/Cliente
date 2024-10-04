/*Hacer un programa en el que el usuario introduzca, nombre, profesión y edad
separado por comas. Después el programa debe mostrar la edad del usuario por
pantalla.*/


/*
^      : Empieza desde el principio.

([^,]+): Captura el nombre (sin comas).

,\s*   : Busca una coma, posiblemente rodeada de espacios.

([^,]+): Captura la profesión (sin comas).

,\s*   : Busca otra coma, posiblemente rodeada de espacios.

(\d+)  : Captura la edad (solo números).

$      : Termina en el final de la cadena.
*/

function mostrarEdad() {
    // Pedimos al usuario que ingrese su nombre, profesión y edad separados por comas
    let datos = prompt("Introduce tu nombre, profesión y edad separados por comas (por ejemplo: Juan, Ingeniero, 30):");

    // Expresión regular para capturar nombre, profesión y edad
    let regex = /^([^,]+),\s*([^,]+),\s*(\d+)$/;

    // Buscar coincidencias usando la expresión regular
    let coincidencia = datos.match(regex);

    if (coincidencia) {
        // Extraemos la edad del grupo de captura correspondiente
        let edad = coincidencia[3];
        alert("La edad del usuario es: " + edad);
    } else {
        // Si el formato no es válido, mostramos un error
        alert("Por favor, introduce los datos en el formato correcto: Nombre, Profesión, Edad");
    }
}

// Llamamos a la función para ejecutarla
mostrarEdad();
