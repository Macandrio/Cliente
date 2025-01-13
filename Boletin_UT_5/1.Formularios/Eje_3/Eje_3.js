window.addEventListener('load', inicializar);

        function inicializar() {
            const fechaNacimiento = document.getElementById('fechaNacimiento');
            const edadCampo = document.getElementById('edad');
            const botonCalcular = document.getElementById('enviar');

            // Calcular edad automáticamente al seleccionar una fecha
            fechaNacimiento.addEventListener('change', calcularEdad); //change para hacerlo 

            // También permite calcular edad con el botón "Calcular Edad"
            botonCalcular.addEventListener('click', calcularEdad);

            function calcularEdad() {
                const fechaSeleccionada = new Date(fechaNacimiento.value);
                const hoy = new Date();
                if (!fechaNacimiento.value) {
                    alert('Por favor, selecciona una fecha de nacimiento.');
                    return;
                }

                const edad = hoy.getFullYear() - fechaSeleccionada.getFullYear();
                const mes = hoy.getMonth() - fechaSeleccionada.getMonth();

                // Ajustar si el cumpleaños aún no ha ocurrido este año
                const edadFinal = (mes < 0 || (mes === 0 && hoy.getDate() < fechaSeleccionada.getDate()))
                    ? edad - 1
                    : edad;

                edadCampo.value = edadFinal;
            }
        }
