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
    constructor(curso , nombre, dni, fechaNacimiento, notas_modulos) {
        super(nombre, dni, fechaNacimiento)
        this.curso = curso;
        this.modulos_notas = notas_modulos;

    }

}
