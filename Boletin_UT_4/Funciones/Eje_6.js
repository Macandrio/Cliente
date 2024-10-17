/*Hacer un programa que sume todos los parámetros pasados como argumentos de entrada
en la llamada. El número de argumentos de entrada es desconocido.*/


/*---------Funcion--------*/

/*
function sumaNumlasica(){
    for(let i = 0; i < arguments.length; i++){
        suma+= arguments[i];
        return suma;
    }
}
*/
/*---------Funcion Felcha--------*/
const sumaNumlasica = (...para) => {
    var suma = 0;
    for(let i = 0; i < para.length; i++){
        suma+= para[i];
    }
    return suma;
}

// Pedimos al usuario los números separados por comas

alert(sumaNumlasica(4,5,5));