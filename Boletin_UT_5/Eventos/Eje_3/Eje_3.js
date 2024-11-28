document.addEventListener('DOMContentLoaded', function () {
    const diaInput = document.getElementById('dia');
    const mesInput = document.getElementById('mes');
    const anioInput = document.getElementById('anio');
    const edadOutput = document.getElementById('edad'); // Compatible con <div> o <input>

    diaInput.addEventListener('input', actualizarEdad);
    mesInput.addEventListener('change', actualizarEdad);
    anioInput.addEventListener('input', actualizarEdad);

    function calcularEdad(dia, mes, anio) {
        const hoy = new Date();
        const nacimiento = new Date(anio, mes - 1, dia);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();

        if (hoy.getMonth() < mes - 1 || (hoy.getMonth() === mes - 1 && hoy.getDate() < dia)) {
            edad--;
        }

        return edad;
    }

    function actualizarEdad() {
        const dia = parseInt(diaInput.value) || 0;
        const mes = parseInt(mesInput.value) || 0;
        const anio = parseInt(anioInput.value) || 0;

        if (dia > 0 && mes > 0 && anio > 0) {
            const edad = calcularEdad(dia, mes, anio);
            if (edadOutput.tagName === 'INPUT') {
                edadOutput.value = edad >= 0 ? edad : '';
            } else {
                edadOutput.textContent = edad >= 0 ? `${edad} años` : '';
            }
        } else {
            if (edadOutput.tagName === 'INPUT') {
                edadOutput.value = '';
            } else {
                edadOutput.textContent = '';
            }
        }
    }
});


window.addEventListener('load', inicializar);

function inicializar() {
    document.getElementById('enviar').addEventListener('click',recogerDatos)
}

function recogerDatos() {
    var dia = document.getElementById('dia').value;
    var mes = document.getElementById('mes').value;
    var anio = document.getElementById('anio').value;
    var edad = document.getElementById('edad');
}