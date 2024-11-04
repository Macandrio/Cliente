/*Crear un clase Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada
módulo. Crear su constructor y un método para imprimir un Alumno, otro que devuelva la
nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota (puede
tener la misma nota en varios módulos).*/

const persona = new Persona('Alejandro' , '23883999V' , '15-10-2002');

const ale = new Alumnos('2DAW','Alejandro' , '23883999V' , '15-10-2002');

ale.meter_Modulos_Notas();

ale.mostrar_Info();
document.write(ale.nota_Medai());