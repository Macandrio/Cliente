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
            if(element.checked){ //checked => es el que esta pulsado
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
