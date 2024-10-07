/*Con expresiones regulares, leer desde teclado una cadena con una serie de
nombres. Contar cuántos nombres se han leído, cuántos comienzan C */

var nombres = window.prompt('Ingresa una varios nombres');

const nombres = input.match(/[^,]+/g);

let totalNombres = 0;
let nombresConC = 0;

if (nombres) {
    totalNombres = nombres.length;

    nombresConC = nombres.filter(nombre => /^C/i.test(nombre)).length;
}

alert("Hay " + resultado)

