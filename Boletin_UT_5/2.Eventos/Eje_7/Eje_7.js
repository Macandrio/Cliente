window.addEventListener('load', inicializar);

function inicializar() {
    document.getElementById('formulario').addEventListener('change', cambiocolor)
    document.getElementById('formulario').addEventListener('change', cambiarTamaño)
}

function cambiocolor(event) {
    var formulario = document.getElementById('formulario');

    //Si ambas condiciones se cumplen, significa que el evento fue disparado por un botón de radio del grupo color
    if (event.target.type === 'radio' && event.target.name === 'color') { 
        // Cambiar el color de fondo al valor del radio seleccionado
        formulario.style.backgroundColor = event.target.value;
    }
}

function cambiarTamaño(event) {
    const formulario = document.getElementById('formulario');

    // Verificar que el evento provenga de un botón de radio del grupo "size"
    if (event.target.type === 'radio' && event.target.name === 'size') {
        switch (event.target.value) {
            case 'small':
                formulario.style.width = '200px';
                formulario.style.height = '150px';
                break;
            case 'medium':
                formulario.style.width = '300px';
                formulario.style.height = '200px';
                break;
            case 'large':
                formulario.style.width = '400px';
                formulario.style.height = '250px';
                break;
            case 'extra-large':
                formulario.style.width = '500px';
                formulario.style.height = '300px';
                break;
        }
    }
}

