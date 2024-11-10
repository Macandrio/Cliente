
var nuevaVentana;

function abrirVentana() {
    nuevaVentana = window.open(
        "", 
        "ventanaNueva", 
        "width=400,height=200,top=0,left=0,resizable=yes,scrollbars=yes"
    );
    nuevaVentana.document.write("<!DOCTYPE html><html><head><title>Mensaje</title></head><body><h1 style='font-size: 24px;'>El ojo es la ventana a tu alma</h1></body></html>");
    nuevaVentana.focus();  // Poner la ventana en primer plano
}

function cerrarVentana() {
    if (nuevaVentana) {
        nuevaVentana.close();
    } else {
        alert("La ventana no está abierta.");
    }
}
