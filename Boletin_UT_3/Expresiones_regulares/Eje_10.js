/*Diseña un programa que indique el carácter más repetido dentro de una cadena de
caracteres*/

var texto = window.prompt('Ingresa una cadena de texto para encontrar el carácter más repetido').toLowerCase();
var frecuencia = {};
var maxRepetido = '';
var maxConteo = 0;

// Calcular la frecuencia de cada carácter
for (var i = 0; i < texto.length; i++) {
    var caracter = texto[i];
    if (caracter !== ' ') {  // Ignorar espacios
        frecuencia[caracter] = (frecuencia[caracter] || 0) + 1;
        if (frecuencia[caracter] > maxConteo) {
            maxConteo = frecuencia[caracter];
            maxRepetido = caracter;
        }
    }
}

document.write("El carácter más repetido es: '" + maxRepetido + "' con " + maxConteo + " apariciones.");
