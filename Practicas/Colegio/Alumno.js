export class Alumno {
    constructor(nombre, DNI, curso, ...notas) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.curso = curso;
        this.notas = notas;
    }

    toString(){
        console.log('El alumno' + nombre + ' Y DNI ' + this.DNI + ' esta en el ' + curso + ' curso y sus notas son ' + this.notas.forEach(n => console.log('Modulo: ' + n.modulo + ' Nota : ' + n.nota)))
    }

    notaMedia(){
        let media = 0;
        this.notas.forEach(n => media += n.nota);
        media = media/this.notas.length;
        return media
    }

    mejorNota(){
        let mejornota = 0;
        let modulos = [];

        if (this.notas.length === 0) {
            return "No hay notas registradas.";
        }

        this.notas.forEach(n => {
                if(n.nota > mejornota){
                    mejornota = n.nota;
                    modulos = [n.modulo];
                }else if(n.nota == mejornota){
                    modulos.push(n.modulo)
                };
        });

        return 'La nota mas alta es : ' + mejornota + ' |de los modulos: ' + modulos.join(', ');
    }
}