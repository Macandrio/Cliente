/*Asegúrate de que la función se llama doubleOddNumbers.
function doubleOddNumbers(arr){
return arr.filter(function(val){
return val % 2 !== 0;
}).map(function(val){
return val *2;
})
}*/

/*-------Funciones flecha---------*/

const doubleOddNumbers = (arr) => {
    return arr.filter(  function(val){
                            return val % 2 !== 0;
                        }).map( function(val){
                                    return val *2;
                                })
}