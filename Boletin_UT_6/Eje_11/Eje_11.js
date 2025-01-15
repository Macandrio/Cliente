window.addEventListener('load', inicializar);

function inicializar(){
    document.getElementById('mostrarPosicion').addEventListener('click', posicion);
    document.getElementById('overlay').addEventListener('click', estilo);

}


function posicion(evento) {

    evento.preventDefault();

    const x = evento.clientX;
    const y = evento.clientY;
    
    overlay.style.left = `${x}px`;
    overlay.style.top = `${y}px`;
    overlay.style.display = 'block';
    overlay.textContent = `Has hecho clic en: (${x}, ${y})`;
}

function estilo(evento){
    if (evento.target !== enlace) {
        evento.style.display = 'none';
    }
}
