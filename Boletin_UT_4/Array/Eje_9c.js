/*Escribe una función llamada uneArrays que acepte un número variable de
parámetros (cada uno de ellos será un array) y devuelva un nuevo array con
todos los parámetros concatenados.
Ejemplos:
joinArrays([1], [2], [3]); // [1,2,3]
joinArrays([1,2,3],[4,5,6],[7,8,9]) //[1,2,3,4,5,6,7,8,9]*/

/*
function uneArrays(...numvariable) {
    var arraynum = [];

    for (let elemento of numvariable) {
        arraynum.push(...elemento);
    }
    return arraynum;

}
*/


function uneArrays(...numvariable) {

    return nuevoarray = numvariable.flat();
}


alert(uneArrays([3],[4],[5],[9],[7]));