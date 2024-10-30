/*Escribe una función llamada colocaEnMedio que acepte como parámetros dos
arrays y devuelva el primer array con todos los valores del segundo array
colocados en el centro del primer array.
Ejemplos:

placeInMiddle([1,2,6,7],[3,4,5]) // [1,2,3,4,5,6,7]
placeInMiddle([1],[3,4,5]) // [3,4,5,1]
placeInMiddle([1,6],[2,3,4,5]) // [1,2,3,4,5,6]
placeInMiddle([],[2,3,4,5]) // [2,3,4,5*/


function colocaEnMedio(array1 , array2){
    
    //copiamos el array2 en medio del array1
    for(let elemento of array2){
        if(elemento == 0){
            var medio = Math.trunc(array1.length/2)
        }

        array1.splice( medio, 0, array2[elemento]);
        medio ++;
    }   
    return array1
}


/*
function colocaEnMedio(array1 , array2){
    
    //copiamos el array2 en medio del array1
    for(let elemento = 0 ; elemento <= array2.length - 1 ; elemento++){
       
        if(elemento == 0){
            var medio = Math.trunc(array1.length/2)
        }

        array1.splice( medio, 0, array2[elemento]);
        medio ++;
    }   
    return array1
}
*/

alert(colocaEnMedio([1,2,6,7],[3,4,5]));