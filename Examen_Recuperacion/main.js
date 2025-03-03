
import { Reproductor } from "./Reproductor.js";
import { Cancion } from "./Cancion.js";



//do {
    // var nombre = prompt("Introduce un Nombre (o ecriba salir para terminar):");
    // var interprete = prompt("Introduce un interprete (o ecriba salir para terminar):")
    var nombre = 'juan';
    var interprete = 'fran';


    if(nombre !== 'salir' || interprete !== 'salir'){
        var reprodcutor1 = new Reproductor();
        reprodcutor1.añadeCancion(nombre, interprete);
    }

//} while (nombre == 'salir' || interprete !== 'salir');


var reprodcutor1 = new Reproductor();

console.log('Añadimos juan')
reprodcutor1.añadeCancion('juan', 'pedro');
console.log(reprodcutor1.mostrarLista())


console.log('Añadimos ale')
reprodcutor1.añadeCancion('ale', 'fran');
console.log(reprodcutor1.mostrarLista())

/console.log('boramos ale')
reprodcutor1.eliminaCanción('ale' , 'fran');
console.log(reprodcutor1.mostrarLista())


reprodcutor1.aumentaVolumen(21);

console.log(reprodcutor1.lenght);


console.log('Añadimos ale')
reprodcutor1.añadeCancion('ale', 'fran');
console.log(reprodcutor1.mostrarLista())


console.log('Lista ordenada')
reprodcutor1.ordenarCancionDesc();
console.log(reprodcutor1.mostrarLista())