/*Con expresiones regulares, leer desde teclado una cadena con una serie de
nombres. Contar cuántos nombres se han leído, cuántos comienzan C */

var nombreinput = window.prompt('Ingresa varios nombres');

const nombres = nombreinput.match(/[^,]+/g) || [];

let totalNombres = nombres.length;
let nombresConC = 0;

nombres.forEach(nombre => {
    if (/^C/i.test(nombre.trim())) {    
        nombresConC ++;
    }

});

document.write("Hay " + totalNombres + " nombres y " + nombresConC + " que empiezan con 'C'");


