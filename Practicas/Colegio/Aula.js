export class Aula {
    constructor(...alumnos) {
        this.alumnos = alumnos
    }

    BuscarAlumno(dni){
       let alumnoencontrado = this.alumnos.find(a => a.DNI === dni)

        if(alumnoencontrado){
            return alumnoencontrado
        }

        return null
    }

    ordenarNotas(dni){
        let alumnoencontrado = this.alumnos.find(a => a.DNI === dni)
 
        if (!alumnoencontrado) {
            return "Alumno no encontrado.";
        }

        if(alumnoencontrado && alumnoencontrado.notas.length > 0){
            alumnoencontrado.notas.sort((a, b) => a.nota - b.nota); //de menor a mayor
            return alumnoencontrado.notas
        }
    }


    ordenarNombre(){ 
        return this.alumnos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }


    toString(){
        return 'Los alumnos de este aula son: ' + this.alumnos.map(a => a.nombre).join(', ');
    }

}