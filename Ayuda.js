//Declaracionesç
var variable = 0;    //Declara una variable
let variable2 = 0;   //Declara una variable de bloque
const variable3 = 0; //Declara una constante de bloque

                                                    /*----- if -----*/

var pares = 2;
if (pares % 2 == 0) {
    alert('El número es par')
}else(
    alert('El número es impar')
)

                                                    /*----- switch -----*/

let dia = 3;

switch(dia) {
    case 1:
        alert('Lunes');
        break;
    case 2:
        alert('Martes');
        break;
    case 3:
        alert('Miércoles');
        break;
    case 4:
        alert('Jueves');
        break;
    case 5:
        alert('Viernes');
        break;
    case 6:
        alert('Sábado');
        break;
    case 7:
        alert('Domingo');
        break;
    default:
        alert('Día inválido');
        break;
}

/*----- For -----*/

for (let i = 1; i <= 5; i++) {
    alert(i);
}

                                                    /*----- Funcion -----*/

function sumar(a, b) {
    return a + b;
}


// Llamamos a la función con dos números
alert("El resultado de la suma es: " + sumar(3, 7));


                                                    /*----- Try...Catch -----*/

function dividir(a, b) {
    try {
        
        if (b === 0) {
            throw new Error("No se puede dividir por 0");
        }
        let resultado = a / b;
        alert("El resultado de la división es: " + resultado);

    } catch (error) {
        alert("Error: " + error.message);
    }
}

// Llamamos a la función
dividir(10, 0);







//alert
    alert('Aqui puedes poner lo que quieras');

//cambiar 