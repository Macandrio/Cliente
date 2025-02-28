// ✅ window → Controla la ventana del navegador (alertas, temporizadores, nuevas pestañas).
// ✅ location → Controla la URL (redirecciones, recargas).
// ✅ history → Permite manipular el historial de navegación.
// ✅ navigator → Muestra información del navegador y conexión.
// ✅ screen → Obtiene dimensiones de la pantalla del usuario.
// ✅ Eventos del BOM → onload, onresize, onscroll.
// ✅ Portapapeles (clipboard) → Copiar y pegar texto.


// ==========================
// 🔹 1. OBJETO window (ventana del navegador)
// ==========================

// 🔹 window.alert() → Muestra una alerta emergente
console.log("// window.alert(): Muestra una alerta en la pantalla");
// window.alert("¡Hola desde JavaScript!"); // ❌ Descomenta para probar

// 🔹 window.confirm() → Muestra un cuadro de confirmación (OK/Cancelar)
console.log("// window.confirm(): Retorna true si el usuario presiona OK");
// let respuesta = window.confirm("¿Estás seguro?");
// console.log("Respuesta: " + respuesta);

// 🔹 window.prompt() → Pide un valor al usuario y lo devuelve como string
console.log("// window.prompt(): Pide al usuario que ingrese un valor");
// let nombre = window.prompt("¿Cuál es tu nombre?");
// console.log("Tu nombre es: " + nombre);

// 🔹 window.open() → Abre una nueva ventana o pestaña
console.log("// window.open(): Abre una nueva ventana");
// let nuevaVentana = window.open("https://www.google.com", "_blank");

// 🔹 window.close() → Cierra la ventana actual (si fue abierta por JS)
console.log("// window.close(): Cierra la ventana abierta por window.open()");
// nuevaVentana.close();

// 🔹 window.setTimeout(función, milisegundos) → Ejecuta una función después de un tiempo
console.log("// setTimeout(): Ejecuta código después de un tiempo");
setTimeout(() => console.log("⏳ Este mensaje aparece después de 2 segundos"), 2000);

// 🔹 window.setInterval(función, milisegundos) → Ejecuta una función repetidamente
console.log("// setInterval(): Ejecuta código repetidamente cada cierto tiempo");
let contador = 0;
let intervalo = setInterval(() => {
    contador++;
    console.log("🔄 Contador: " + contador);
    if (contador >= 5) clearInterval(intervalo); // Detener después de 5 veces
}, 1000);

// ==========================
// 🔹 2. OBJETO location (URL y navegación)
// ==========================

console.log("// location.href: Devuelve la URL actual");
console.log(window.location.href); // "https://www.tuPagina.com"

// 🔹 location.reload() → Recarga la página
console.log("// location.reload(): Recarga la página (descomentar para probar)");
// window.location.reload();

// 🔹 location.assign(url) → Redirige a una nueva URL
console.log("// location.assign(): Redirige a otra página (descomentar para probar)");
// window.location.assign("https://www.google.com");

// ==========================
// 🔹 3. OBJETO history (Historial de navegación)
// ==========================

console.log("// history.length: Devuelve el número de páginas en el historial");
console.log(window.history.length); 

// 🔹 history.back() → Va a la página anterior
console.log("// history.back(): Retrocede una página en el historial (descomentar para probar)");
// window.history.back();

// 🔹 history.forward() → Avanza una página en el historial
console.log("// history.forward(): Avanza una página en el historial (descomentar para probar)");
// window.history.forward();

// 🔹 history.go(n) → Se mueve en el historial (negativo para atrás, positivo para adelante)
console.log("// history.go(): Mueve la página en el historial");
// window.history.go(-2); // Ir 2 páginas atrás

// ==========================
// 🔹 4. OBJETO navigator (Información del navegador)
// ==========================

console.log("// navigator.userAgent: Información del navegador");
console.log(window.navigator.userAgent);

console.log("// navigator.language: Idioma del navegador");
console.log(window.navigator.language);

console.log("// navigator.onLine: ¿Está el usuario conectado?");
console.log(window.navigator.onLine ? "✅ Conectado a internet" : "❌ Sin conexión");

// ==========================
// 🔹 5. OBJETO screen (Información de la pantalla del usuario)
// ==========================

console.log("// screen.width y screen.height: Dimensiones de la pantalla");
console.log("Ancho: " + window.screen.width + " px");
console.log("Alto: " + window.screen.height + " px");

// ==========================
// 🔹 6. EVENTOS DEL BOM
// ==========================

// 🔹 Evento window.onload → Se ejecuta cuando la página ha terminado de cargar
window.onload = () => {
    console.log("✅ La página se ha cargado completamente.");
};

// 🔹 Evento window.onresize → Se ejecuta cuando la ventana cambia de tamaño
window.onresize = () => {
    console.log("🔄 La ventana ha cambiado de tamaño: " + window.innerWidth + "x" + window.innerHeight);
};

// 🔹 Evento window.onscroll → Detecta cuando el usuario hace scroll
window.onscroll = () => {
    console.log("📜 Desplazamiento detectado: " + window.scrollY + "px");
};

// ==========================
// 🔹 7. MANEJO DEL PORTAPAPELES (clipboard)
// ==========================

// 🔹 Copiar texto al portapapeles
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        console.log("📋 Texto copiado al portapapeles: " + texto);
    }).catch(err => {
        console.error("Error al copiar: ", err);
    });
}
copiarTexto("¡Hola, mundo!");

// 🔹 Pegar texto del portapapeles (solo en HTTPS)
async function pegarTexto() {
    try {
        let textoPegado = await navigator.clipboard.readText();
        console.log("📋 Texto pegado: " + textoPegado);
    } catch (err) {
        console.error("Error al pegar: ", err);
    }
}
// pegarTexto(); // ❌ Descomentar y probar en HTTPS

