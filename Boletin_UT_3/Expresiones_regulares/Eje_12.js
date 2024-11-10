
/*Realiza un programa que compruebe mediante expresiones regulares si un usuario
ha introducido una matrícula de vehículo válida. Si el usuario añade la matrícula
correctamente, formatea la cadena para que todas sean guardadas (imagina que
luego se guardarán en una BBDD) de la misma forma, en mayúsculas y con un
guión entre letras y números, por ejemplo: ABC-1234.*/

var matricula = window.prompt('Ingresa una matrícula de vehículo (por ejemplo, ABC1234 o 1234ABC)');

// Expresión regular para validar matrículas: formato de 3 letras seguidas de 4 números o viceversa
var patron = /^([A-Z]{3}\d{4})$/i;

if (patron.test(matricula)) {
    // Formatear la matrícula a mayúsculas y con guion entre letras y números
    var matriculaFormateada = matricula.toUpperCase().replace(/^([A-Z]{3})(\d{4})$/, '$1-$2');
    document.write("Matrícula válida. Formato guardado: " + matriculaFormateada);
} else {
    document.write("Matrícula no válida. Asegúrate de usar un formato correcto (por ejemplo, ABC1234).");
}
