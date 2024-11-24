// Usar JS para mostrar el contenido, en mayúsculas, del formulario anterior en la misma ventana.
// Modifica el script para mandar los datos a una nueva ventana
window.addEventListener('load', inicializar);

function inicializar() {
    document.getElementById('enviar').addEventListener('click',recogerDatos)
}

function recogerDatos() {
    var nombre = document.getElementById('nombre').value.toUpperCase();
    var apellidos = document.getElementById('apellidos').value.toUpperCase();
    var usuario = document.getElementById('usuario').value.toUpperCase();
    var contraseña = document.getElementById('contraseña').value.toUpperCase();
    var dia = document.getElementById('dia').value.toUpperCase();
    var mes = document.getElementById('mes').value.toUpperCase();
    var anio = document.getElementById('anio').value.toUpperCase();
    var sexo = document.getElementById('sexo').value.toUpperCase();
    var telefono = document.getElementById('telefono').value.toUpperCase();
    var email = document.getElementById('email').value.toUpperCase();

    var nuevaVentana = window.open(
        "", 
        "ventanaNueva", 
        "width=400,height=200,top=0,left=0,resizable=yes,scrollbars=yes"
    );

    nuevaVentana.document.write(
        'Esto son los resultados en Myusculas<br>' +
        nombre + "<br>" +
        apellidos + "<br>" +
        usuario + "<br>" +
        contraseña + "<br>" +
        dia + "<br>" +
        mes + "<br>" +
        anio + "<br>" +
        sexo + "<br>" +
        telefono + "<br>" +
        email);
    nuevaVentana.focus();


}