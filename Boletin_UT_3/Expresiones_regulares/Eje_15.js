/*Los números pueden tener entre 1 y 3 dígitos. Solicita el ingreso de la cordenada de
un punto. El formato a ingresar por teclado es (999,999)*/

var coordenada = window.prompt('Ingresa una coordenada en el formato (999,999)');

// Expresión regular para validar el formato (999,999)
var patron = /^\(\d{1,3},\d{1,3}\)$/;

if (patron.test(coordenada)) {
    document.write("La coordenada ingresada es válida: " + coordenada);
} else {
    document.write("La coordenada ingresada no es válida. Debe estar en el formato (999,999) con números de 1 a 3 dígitos.");
}
