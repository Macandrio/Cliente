window.addEventListener('load',inicializar);

function inicializar(){
    document.getElementById('mensaje').addEventListener('input', calcularcaracteres);
}


function calcularcaracteres(){

    var mensajeinput = document.getElementById('mensaje');
    var respuesta = document.getElementById('respuesta');

    var mensaje = mensajeinput.value;
    var contarcaracteres = mensaje.length;
    var caracteresDisponibles = 145 - contarcaracteres;
    respuesta.textContent = caracteresDisponibles;

}