/*
window.addEventListener('load', inicializar);

function inicializar() {  
    document.getElementById('enviar').addEventListener('click',recogerDatos)
}


function recogerDatos(){

    verificarRespuesta('q1', 'Madrid', 'resultado-q1');
    verificarRespuesta('q2', 'Amazonas', 'resultado-q2');


    function verificarRespuesta(pregunta, respuestaCorrecta, resultadoId) {
        var opciones = document.getElementsByName(pregunta);
        var seleccionado = null;

        opciones.forEach(element => {
            if(element.checked){
                seleccionado = element;
            }
        });

        var resultado = document.getElementById(resultadoId);
        if(seleccionado.value == respuestaCorrecta){
            resultado.textContent = '¡Correcto!'

        }else{
            resultado.textContent = '¡Incorrecto!'
        }
    
        
    }
}
*/

window.addEventListener('load', inicializar);

function inicializar() {
    // Coger todos los radio con un for
    var radios = document.querySelectorAll('input[type="radio"]');

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            verificarRespuesta(radio.name, radio.value);
        });
    });
}

function recogerDatos(ev){

    //verificarRespuesta('q1', 'Madrid', 'resultado-q1');
    //verificarRespuesta('q2', 'Amazonas', 'resultado-q2');


    //function verificarRespuesta(pregunta, respuestaCorrecta, resultadoId) {
        var opciones = document.getElementsByName(pregunta);
        var seleccionado = null;

      seleccionado= ev.currentTarget;

        var resultado = document.getElementById(resultadoId);
        if(seleccionado.value == respuestaCorrecta){
            resultado.textContent = '¡Correcto!'

        }else{
            resultado.textContent = '¡Incorrecto!'
        }
    
        
    }
}