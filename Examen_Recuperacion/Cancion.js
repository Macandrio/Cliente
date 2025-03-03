export class Cancion {
    constructor(titulo, interprete) {
        this.titulo = titulo;
        this. interprete = interprete;
    }

    mostrarCancion(){
        return 'La cancion es: ' + this.titulo + ' Y el interprete ' + this.interprete;
    }

    
}