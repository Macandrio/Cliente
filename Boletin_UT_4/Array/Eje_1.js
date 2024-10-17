/*Escribe una función llamada elMenor que acepte un número variable de
parámetros y devuelva el parámetro de menor valor pasado a la función.*/

/*-------Funciones---------*/

function elMenor(Array){
   Array.sort();
   return Array[0];
}

const elMenornumero = (Array) =>{

    Array.sort();
    return Array[length];
}



const arraynumeros = [12,22,3,4,5,6,7,8,9];
alert(elMenor(arraynumeros));