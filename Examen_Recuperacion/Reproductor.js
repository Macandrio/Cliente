import { Cancion } from "./Cancion.js";

export class Reproductor {
    constructor() {
        this.canciones = new Array(20)
    }

    aumentaVolumen(tamaño){
        let nuevoarray = tamaño;
        nuevoarray.split(0,0,this.canciones);
        return nuevoarray;
    }

    añadeCancion(cancion,interprete){
        var cancion = new Cancion(cancion,interprete);
        this.canciones.push(cancion);
    }

    eliminaCanción(titulo,interprete){
        let encontrado = this.canciones.findIndex(c => c.titulo === titulo && c.interprete == interprete);
        if (encontrado !== -1) {
            this.canciones.splice(encontrado, 1);
            return 'La cancion a sido eliminada'
        } else {
            return 'No se a encontrado la cancvion';
        }
    }


    mostrarLista(){
        this.canciones.forEach(c => {
            console.log('La Lista es: ' + c.titulo + ' - ' + c.interprete);
        });
    }

    ordenarCancionDesc(){
        return this.canciones.sort((a,b) => b.titulo - a.titulo);
    }
}