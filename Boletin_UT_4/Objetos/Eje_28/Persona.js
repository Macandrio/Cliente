class Persona {
    constructor(nombre, dni, fechaNacimiento) {
        this.nombre = nombre;
        this.dni = dni;
        this.fechaNacimiento = new Date(fechaNacimiento);

    }
}

class Modulos{
    constructor(...argmodulos) {
        this.modulos = argmodulos
    }
}

class Alumnos extends Persona {
    constructor(curso , nombre, dni, fechaNacimiento) {
        super(nombre, dni, fechaNacimiento)
        this.curso = curso;
        this.modulos = new Map();
    }

    meter_Modulos_Notas = function(){

                                        let asignatura = parseInt(prompt('Cuantos modulos vas a introducir'));

                                        for (let index = 0; index < asignatura; index++) {
                                            let nombre_modulos = prompt('cual es el modulos');
                                            let nota = prompt('cual es la nota');
                                            this.modulos.set(nombre_modulos,nota );
                                        }

                                        return this.modulos;
                                                        }

    mostrar_Info = function () {

        let info = 'Las notas de ' + this.nombre + ' son: <br>';
    
        this.modulos.forEach((nota, modulo) => {
            info += ' Módulo: ' + modulo + ', Nota: ' + nota;
        });
        
        info += ' Del curso: ' + this.curso;
        
        document.write(info);

    }

    nota_Medai = function (){
        if (this.modulos.size === 0) {
            return "No hay notas para calcular la media.";
        }
        
        let sumaNotas = 0;
        let cantidadModulos = 0;

        this.modulos.forEach((nota) => {
            sumaNotas += nota;
            cantidadModulos++;
        });

        let notaMedia = sumaNotas / cantidadModulos;
        return notaMedia;
    }
}