/*Escribe una función llamada elMenor que acepte un número variable de
parámetros y devuelva el parámetro de menor valor pasado a la función.*/


/*-------Funciones---------*/
/*
function elMenor(...arrayn){
   arrayn.sort();
   return arrayn[0];
}

alert(elMenor(8,6,8,9));
*/



/*-------Funciones flecha---------*/
const elMenor = (...arrayn) => {
   arrayn.sort();
   return arrayn[0];
}



