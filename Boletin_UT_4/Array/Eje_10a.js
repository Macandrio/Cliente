/*Asegúrate de que la función se llama tripleAndFilter.
function tripleAndFilter(arr){
return arr.map(function(value){
return value * 3;
}).filter(function(value){
return value % 5 === 0;
})
}*/


    /*-------Funciones flecha---------*/
const tripleAndFilter = (arr) => {

    return arr.map( function(value){
                        return value * 3;
                    }).filter(  function(value){
                                    return value % 5 === 0;
                                })

}

alert(tripleAndFilter([3,2,5,10,25]));