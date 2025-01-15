window.addEventListener('load', inicializar);

function inicializar() {
    document.getElementById('coordinate-div').addEventListener('mousemove', coordenadas);
    document.getElementById('coordinate-div').addEventListener('mouseleave', escribir);

}

function coordenadas(event){
    const x = event.clientX;
    const y = event.clientY;
    evento.textContent = 'X' + x + 'Y' + y;
}

function escribir(evento){
    evento.textContent = 'Mueve el raton!';

}


/*
window.addEventListener('load', inicializar);

function inicializar() {
    const coordinateDiv = document.getElementById('coordinate-div');

    coordinateDiv.addEventListener('mousemove', (event) => {
        coordenadas(event, coordinateDiv);
    });

    coordinateDiv.addEventListener('mouseleave', () => {
        coordinateDiv.textContent = 'Mueve el ratón aquí!';
    });
}

function coordenadas(event, coordinateDiv) {
    const x = event.clientX;
    const y = event.clientY;
    coordinateDiv.textContent = `X: ${x}, Y: ${y}`;
}

*/
