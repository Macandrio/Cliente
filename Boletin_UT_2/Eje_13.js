/*Realizar un programa que lea una fecha de nacimiento de la forma día, mes, año, y
dé como resultado el número de Tarot. El programa verificará si la fecha es correcta.
El número de Tarot se calcula sumando los números de la fecha de nacimiento y
reduciéndolos a un único dígito. Por ejemplo, si su fecha de nacimiento es 20 de julio
de 1984, el número de Tarot sería: 20 + 7+ 1984 = 2011⇒ 2 + 0 + 1 + 1 = 4*/

function esFechaValida(dia, mes, anio) {
    let fecha = new Date(anio, mes - 1, dia);
    

    return fecha.getFullYear() === anio && 
           fecha.getMonth() === (mes - 1) && 
           fecha.getDate() === dia;
}


let fechaNacimiento = prompt("Introduce tu fecha de nacimiento (día, mes, año):");


let partes = fechaNacimiento.split(", ");
let dia = parseInt(partes[0]);
let mes = parseInt(partes[1]);
let anio = parseInt(partes[2]);


if (isNaN(dia) || isNaN(mes) || isNaN(anio) || !esFechaValida(dia, mes, anio)) {
    alert("Fecha inválida. Por favor, introduce una fecha correcta en formato día, mes, año.");
} else {

    let suma = dia + mes + anio;

    let numeroTarot = suma;
    while (numeroTarot > 9) {
        numeroTarot = numeroTarot.toString().split('').reduce((acum, digito) => acum + parseInt(digito), 0);
    }

    alert("Tu número de Tarot es: " + numeroTarot);
}
