window.addEventListener('load', inicializar);

function inicializar() {
    document.getElementById('enviar').addEventListener('click', recogerDatos);
    // Mostrar el café favorito si ya hay datos guardados en cookies
    mostrarPreferenciasGuardadas();
}

function recogerDatos(event) {
    event.preventDefault(); // Prevenir la recarga del formulario

    var nombre = document.getElementById('name').value;
    var numero_habitacion = document.getElementById('room').value;

    // Obtener el café seleccionado
    var cafes = document.getElementsByName('coffee');
    var seleccionados = [];
    cafes.forEach(cafe => {
        if (cafe.checked) {
            seleccionados.push(cafe.value);
        }
    });

    if (nombre && numero_habitacion && seleccionados.length > 0) {
        // Crear cookies para cada valor ingresado
        document.cookie = `nombre=${nombre}; path=/; max-age=86400`; // Expira en 1 día (86400 segundos)
        document.cookie = `numero_habitacion=${numero_habitacion}; path=/; max-age=86400`;
        document.cookie = `cafe_favorito=${seleccionados.join(',')}; path=/; max-age=86400`;

        // Manejar conteo de pedidos
        var conteoPedidos = parseInt(getCookie('conteo_pedidos')) || 0;
        conteoPedidos++;
        document.cookie = "conteo_pedidos=" + conteoPedidos + "; path=/; max-age=86400";

        if (conteoPedidos % 4 === 0) {
            alert("¡Felicidades! Este es tu cuarto café, tu próximo café será gratuito.");
        } else {
            alert(`Pedido realizado. Este es tu pedido número ${conteoPedidos}.`);
        }
    } else {
        alert("Por favor, complete todos los campos antes de guardar.");
    }
}

function mostrarPreferenciasGuardadas() {
    var nombre = getCookie('nombre');
    var numero_habitacion = getCookie('numero_habitacion');
    var cafeFavorito = getCookie('cafe_favorito');

    if (nombre && numero_habitacion && cafeFavorito) {
        document.getElementById('name').value = nombre;
        document.getElementById('room').value = numero_habitacion;

        var cafes = cafeFavorito.split(',');
        cafes.forEach(cafe => {
            var checkbox = document.getElementById(cafe);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
        alert(`Bienvenido ${nombre}, tu café favorito es: ${cafeFavorito}`);
    }
}

function getCookie(nombre) {
    let name = nombre + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
