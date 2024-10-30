/*Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de
nacimiento separado por comas. Esta entrada de datos se repetirá hasta que el usuario
introduzca la cadena vacía. El programa debe guardar los datos en un array bidimensional.*/

let entrada = prompt("Escribe tu nombre, apellidos, DNI y fecha de nacimiento cadena vacia para acabar");
let personas = [];


while(entrada != ''){

    let persona = cadena.split(",");
    persona.push(persona);
    entrada = prompt("Escribe tu nombre, apellidos, DNI y fecha de nacimiento cadena vacia para acabar");

}

document.write(personas);