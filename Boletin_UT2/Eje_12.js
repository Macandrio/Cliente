/*Realizar un algoritmo que permita introducir la nota de una asignatura por teclado, la
valide para que esté comprendida entre 0 y 10 y se escriba en letras de la siguiente
manera:

SUSPENSO si es menor que 5
APROBADO mayor que 5 y menor que 6
BIEN entre 6 y 7
NOTABLE entre 7 y 8
SOBRESALIENTE entre 9 y 10*/

let nota = parseFloat(prompt("Introduce la nota de la asignatura (entre 0 y 10):"));

if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Nota inválida. Debe estar entre 0 y 10.");
} else {

    let resultado;

    if (nota < 5) {
        resultado = "SUSPENSO";
    } else if (nota < 6) {
        resultado = "APROBADO";
    } else if (nota < 7) {
        resultado = "BIEN";
    } else if (nota < 9) {
        resultado = "NOTABLE";
    } else {
        resultado = "SOBRESALIENTE";
    }

    alert("La nota en letras es: " + resultado);
}
