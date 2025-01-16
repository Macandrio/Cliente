window.addEventListener('load', inicializar);

function inicializar() {
    const campoTexto = document.getElementById('campoTexto');
    const resultados = document.getElementById('resultados');

    // Array de datos
    const datos = [
        "Manzana",
        "Naranja",
        "Plátano",
        "Pera",
        "Melocotón",
        "Mango",
        "Sandía",
        "Uva",
        "Piña",
        "Limón"
    ];

    // Escuchar el evento de entrada en el campo de texto
    campoTexto.addEventListener('input', () => {
        const filtro = campoTexto.value.toLowerCase(); // Convertir a minúsculas
        const coincidencias = datos.filter(item => item.toLowerCase().includes(filtro)); // Filtrar coincidencias

        // Limpiar los resultados anteriores
        resultados.innerHTML = "";

        // Mostrar nuevas coincidencias
        if (coincidencias.length > 0) {
            coincidencias.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                resultados.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = "No se encontraron resultados.";
            li.style.color = "red";
            resultados.appendChild(li);
        }
    });
}
