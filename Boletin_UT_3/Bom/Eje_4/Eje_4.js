function mostrarInformacionPantalla() {
    var ancho = window.screen.width;
    var alto = window.screen.height;
    var profundidadColor = window.screen.colorDepth;

    alert("Ancho de la pantalla: " + ancho + " píxeles\n" +
          "Alto de la pantalla: " + alto + " píxeles\n" +
          "Profundidad de color: " + profundidadColor + " bits");
}