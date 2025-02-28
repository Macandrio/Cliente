// ✅ Crear fechas (new Date(), con parámetros, desde strings o timestamps).
// ✅ Obtener partes de una fecha (getFullYear(), getMonth(), getDate(), etc.).
// ✅ Modificar fechas (setFullYear(), setMonth(), setDate(), etc.).
// ✅ Operaciones con fechas (comparación, diferencia en días).
// ✅ Formatear fechas (toLocaleDateString(), toISOString()).
// ✅ Manejo de zonas horarias y conversiones (toUTCString(), getTime()).


// ==========================
// 🔹 1. CREAR FECHAS (OBJETO DATE)
// ==========================

// 🔹 Fecha actual (sin parámetros devuelve la fecha y hora actual)
console.log("// Crear objeto Date con la fecha y hora actual");
let ahora = new Date();
console.log(ahora); // Fecha y hora actual

// 🔹 Crear una fecha específica (Año, Mes (0-11), Día, Hora, Minuto, Segundo, Milisegundo)
console.log("// Crear fecha específica (Año, Mes (0-11), Día)");
let fecha1 = new Date(2024, 2, 15); // 15 de marzo de 2024
console.log(fecha1);

// 🔹 Crear una fecha con fecha y hora específicas
console.log("// Crear fecha con hora (Año, Mes, Día, Hora, Minuto, Segundo)");
let fecha2 = new Date(2024, 2, 15, 14, 30, 0);
console.log(fecha2);

// 🔹 Crear una fecha a partir de un string
console.log("// Crear fecha a partir de una cadena de texto");
let fecha3 = new Date("2024-03-15T14:30:00");
console.log(fecha3);

// 🔹 Crear fecha con timestamp (milisegundos desde 1 enero 1970)
console.log("// Crear fecha con timestamp (milisegundos desde 1970)");
let fecha4 = new Date(1700000000000);
console.log(fecha4);

// ==========================
// 🔹 2. OBTENER COMPONENTES DE UNA FECHA
// ==========================

console.log("// Obtener componentes de una fecha");
let fechaEjemplo = new Date(2024, 2, 15, 14, 30, 45);

console.log("Año:", fechaEjemplo.getFullYear()); // 2024
console.log("Mes (0-11):", fechaEjemplo.getMonth()); // 2 (marzo)
console.log("Día del mes:", fechaEjemplo.getDate()); // 15
console.log("Día de la semana (0=Domingo - 6=Sábado):", fechaEjemplo.getDay()); // 5 (viernes)
console.log("Hora:", fechaEjemplo.getHours()); // 14
console.log("Minutos:", fechaEjemplo.getMinutes()); // 30
console.log("Segundos:", fechaEjemplo.getSeconds()); // 45
console.log("Milisegundos:", fechaEjemplo.getMilliseconds()); // 0

// 🔹 Obtener la fecha en formato timestamp (milisegundos desde 1970)
console.log("// Obtener el timestamp de la fecha");
console.log(fechaEjemplo.getTime()); // Ejemplo: 1710505800000

// ==========================
// 🔹 3. MODIFICAR FECHAS
// ==========================

console.log("// Modificar componentes de una fecha");
fechaEjemplo.setFullYear(2025);
fechaEjemplo.setMonth(5); // Junio
fechaEjemplo.setDate(20);
fechaEjemplo.setHours(18);
console.log(fechaEjemplo);

// ==========================
// 🔹 4. OPERACIONES CON FECHAS
// ==========================

// 🔹 Comparar dos fechas
console.log("// Comparar dos fechas");
let fechaA = new Date(2024, 2, 15);
let fechaB = new Date(2024, 5, 10);
console.log(fechaA > fechaB); // false (15 de marzo es antes que 10 de junio)

// 🔹 Calcular diferencia entre dos fechas en milisegundos
console.log("// Calcular diferencia entre dos fechas en milisegundos");
let diferenciaMS = fechaB - fechaA;
console.log(diferenciaMS); // Diferencia en milisegundos

// 🔹 Convertir la diferencia a días
console.log("// Convertir diferencia a días");
let diferenciaDias = diferenciaMS / (1000 * 60 * 60 * 24);
console.log(diferenciaDias); // Ejemplo: 87 días

// ==========================
// 🔹 5. FORMATEAR FECHAS
// ==========================

console.log("// Formatear fechas con toDateString(), toTimeString() y toLocaleString()");
let fechaFormateo = new Date();
console.log("Fecha corta:", fechaFormateo.toDateString()); // "Fri Mar 15 2024"
console.log("Hora:", fechaFormateo.toTimeString()); // "14:30:45 GMT+0000"
console.log("Fecha y hora local:", fechaFormateo.toLocaleString()); // Formato local

// 🔹 Formateo personalizado con toLocaleDateString()
console.log("// Formateo personalizado con toLocaleDateString()");
console.log(fechaFormateo.toLocaleDateString("es-ES")); // "15/03/2024"
console.log(fechaFormateo.toLocaleDateString("en-US")); // "3/15/2024"

// 🔹 Formateo con opciones avanzadas
console.log("// Formateo con opciones avanzadas");
let opciones = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
console.log(fechaFormateo.toLocaleDateString("es-ES", opciones)); // "viernes, 15 de marzo de 2024"

// ==========================
// 🔹 6. GENERAR FECHA ACTUAL FORMATEADA
// ==========================

console.log("// Obtener la fecha actual en formato YYYY-MM-DD");
function obtenerFechaActual() {
    let fecha = new Date();
    let año = fecha.getFullYear();
    let mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Asegura 2 dígitos
    let dia = String(fecha.getDate()).padStart(2, "0");
    return `${año}-${mes}-${dia}`;
}
console.log(obtenerFechaActual()); // "2024-03-15"

// ==========================
// 🔹 7. CONVERTIR FECHA A TIMESTAMP Y VICEVERSA
// ==========================

console.log("// Convertir fecha a timestamp y viceversa");
let fechaTimestamp = new Date("2024-03-15").getTime(); // Obtener timestamp
console.log("Timestamp:", fechaTimestamp);

let fechaDesdeTimestamp = new Date(fechaTimestamp); // Convertir timestamp a fecha
console.log("Fecha desde timestamp:", fechaDesdeTimestamp);

// ==========================
// 🔹 8. MANEJO DE ZONAS HORARIAS
// ==========================

console.log("// Obtener zona horaria");
console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

// 🔹 Obtener fecha en UTC
console.log("// Obtener fecha en UTC");
console.log(fechaFormateo.toUTCString());

// 🔹 Obtener fecha en ISO (formato estándar internacional)
console.log("// Obtener fecha en formato ISO 8601");
console.log(fechaFormateo.toISOString()); // "2024-03-15T14:30:00.000Z"
