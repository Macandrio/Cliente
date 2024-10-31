/*Hacer un programa que compruebe si un número es perfecto. Deberá implementarse una
función esPerfecto(numero) que devuelva true si lo es.*/

function esPerfecto(numero) {
    let suma = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }
    return suma === numero;
}

// Ejemplo de uso:
document.write(esPerfecto(6)); // true, porque 6 es un número perfecto (1 + 2 + 3 = 6)
