/*Diseña un programa que valide un código postal español, debe tener 5 números y el
código postal «más alto» debería ser 52999. Es decir, no existe un código postal en
España que empiece por 53 o superior*/

var codigoPostal = window.prompt('Ingresa un código postal español de 5 dígitos');

// Expresión regular para validar un código postal de 5 dígitos
var patron = /^\d{5}$/;

if (patron.test(codigoPostal)) {
    var codigoNumerico = parseInt(codigoPostal);
    if (codigoNumerico <= 52999) {
        document.write("Código postal válido: " + codigoPostal);
    } else {
        document.write("Código postal no válido: el valor es superior al máximo permitido (52999).");
    }
} else {
    document.write("Código postal no válido: debe ser un número de 5 dígitos.");
}
