// ✅ Cómo crear strings ("texto", 'texto', `texto`).
// ✅ Búsqueda (indexOf(), includes(), startsWith(), endsWith()).
// ✅ Extracción (slice(), substring(), substr()).
// ✅ Modificación (toUpperCase(), toLowerCase(), replace(), trim()).
// ✅ División y repetición (split(), repeat()).
// ✅ Acceso a caracteres (charAt(), at(), []).
// ✅ Comparación (localeCompare(), normalize()).
// ✅ Template literals y regex con strings.


// ==========================
// 🔹 1. CREAR CADENAS (STRING)
// ==========================

// 🔹 Usando comillas dobles o simples
console.log("// Crear strings con comillas");
let str1 = "Hola, mundo!";
let str2 = 'Hola, JavaScript!';
console.log(str1);
console.log(str2);

// 🔹 Usando template literals (comillas invertidas ` `)
console.log("// Template literals: Permite insertar variables y saltos de línea");
let nombre = "Carlos";
let saludo = `Hola, ${nombre}! ¿Cómo estás?`;
console.log(saludo);

// 🔹 Longitud de un string
console.log("// .length: Longitud del string");
console.log(str1.length); // 12

// ==========================
// 🔹 2. MÉTODOS DE BÚSQUEDA EN STRING
// ==========================

// 🔹 indexOf() → Devuelve la posición de la primera aparición de un texto
console.log("// indexOf(): Posición de un texto");
console.log("JavaScript es genial".indexOf("genial")); // 13

// 🔹 lastIndexOf() → Devuelve la última aparición de un texto
console.log("// lastIndexOf(): Última posición de un texto");
console.log("banana".lastIndexOf("a")); // 5

// 🔹 includes() → Devuelve true si el texto está en la cadena
console.log("// includes(): Verifica si un string contiene un texto");
console.log("Me gusta JavaScript".includes("JavaScript")); // true

// 🔹 startsWith() → Verifica si empieza con determinado texto
console.log("// startsWith(): Verifica si comienza con un texto");
console.log("Hola, mundo!".startsWith("Hola")); // true

// 🔹 endsWith() → Verifica si termina con determinado texto
console.log("// endsWith(): Verifica si termina con un texto");
console.log("Hola, mundo!".endsWith("mundo!")); // true

// ==========================
// 🔹 3. MÉTODOS DE EXTRACCIÓN
// ==========================

// 🔹 slice(inicio, fin) → Extrae una parte del string
console.log("// slice(): Extrae parte de un string");
console.log("JavaScript".slice(0, 4)); // "Java"

// 🔹 substring(inicio, fin) → Similar a slice pero sin valores negativos
console.log("// substring(): Extrae parte de un string (sin negativos)");
console.log("JavaScript".substring(0, 4)); // "Java"

// 🔹 substr(inicio, cantidad) → Extrae una cantidad de caracteres (OBSOLETO)
console.log("// substr(): Extrae cierta cantidad de caracteres");
console.log("JavaScript".substr(4, 6)); // "Script"

// ==========================
// 🔹 4. MÉTODOS DE MODIFICACIÓN
// ==========================

// 🔹 toUpperCase() → Convierte a mayúsculas
console.log("// toUpperCase(): Convierte a mayúsculas");
console.log("hola".toUpperCase()); // "HOLA"

// 🔹 toLowerCase() → Convierte a minúsculas
console.log("// toLowerCase(): Convierte a minúsculas");
console.log("HOLA".toLowerCase()); // "hola"

// 🔹 replace(texto, nuevoTexto) → Reemplaza un texto por otro
console.log("// replace(): Reemplaza un texto");
console.log("Hola, mundo!".replace("mundo", "JavaScript")); // "Hola, JavaScript!"

// 🔹 trim() → Elimina espacios en blanco al inicio y al final
console.log("// trim(): Elimina espacios en blanco");
console.log("   Hola   ".trim()); // "Hola"

// 🔹 trimStart() → Elimina espacios al inicio
console.log("// trimStart(): Elimina espacios al inicio");
console.log("   Hola   ".trimStart()); // "Hola   "

// 🔹 trimEnd() → Elimina espacios al final
console.log("// trimEnd(): Elimina espacios al final");
console.log("   Hola   ".trimEnd()); // "   Hola"

// ==========================
// 🔹 5. MÉTODOS DE DIVISIÓN Y REPETICIÓN
// ==========================

// 🔹 split(separador) → Divide un string en un array
console.log("// split(): Divide un string en un array");
console.log("manzana,pera,plátano".split(",")); // ["manzana", "pera", "plátano"]

// 🔹 repeat(n) → Repite el string n veces
console.log("// repeat(): Repite el string");
console.log("Hola! ".repeat(3)); // "Hola! Hola! Hola! "

// ==========================
// 🔹 6. ACCESO Y MANIPULACIÓN DE CARACTERES
// ==========================

// 🔹 charAt(posición) → Devuelve el carácter en la posición dada
console.log("// charAt(): Obtiene el carácter en una posición");
console.log("JavaScript".charAt(4)); // "S"

// 🔹 charCodeAt(posición) → Devuelve el código Unicode del carácter
console.log("// charCodeAt(): Código Unicode del carácter");
console.log("A".charCodeAt(0)); // 65

// 🔹 at(posición) → Alternativa moderna a charAt()
console.log("// at(): Obtiene el carácter (soporta índices negativos)");
console.log("JavaScript".at(-1)); // "t"

// 🔹 Acceder a un carácter usando corchetes []
console.log("// Acceder a un carácter con corchetes []");
console.log("JavaScript"[4]); // "S"

// ==========================
// 🔹 7. MÉTODOS AVANZADOS
// ==========================

// 🔹 localeCompare() → Compara dos cadenas alfabéticamente
console.log("// localeCompare(): Compara dos strings");
console.log("apple".localeCompare("banana")); // -1 (apple < banana)
console.log("banana".localeCompare("apple")); // 1  (banana > apple)
console.log("apple".localeCompare("apple")); // 0  (son iguales)

// 🔹 normalize() → Normaliza caracteres acentuados a su forma base
console.log("// normalize(): Normaliza caracteres acentuados");
console.log("áéíóú".normalize("NFD").replace(/\p{Diacritic}/gu, "")); // "aeiou"

// ==========================
// 🔹 8. INTERPOLACIÓN DE STRINGS CON TEMPLATE LITERALS
// ==========================

console.log("// Template literals con variables y expresiones");
let edad = 25;
console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);

// 🔹 Soporte para múltiples líneas
console.log("// Template literals con múltiples líneas");
let mensaje = `Hola,
Esto es un mensaje
con varias líneas.`;
console.log(mensaje);

// ==========================
// 🔹 9. VALIDACIONES CON REGEX Y STRINGS
// ==========================

// 🔹 match() → Devuelve todas las coincidencias de un patrón
console.log("// match(): Buscar todas las coincidencias");
console.log("Hola 123 hola 456".match(/\d+/g)); // ["123", "456"]

// 🔹 search() → Devuelve la posición de la primera coincidencia
console.log("// search(): Buscar la primera coincidencia");
console.log("Hola mundo".search(/mundo/)); // 5

// 🔹 replace() con regex → Reemplazo avanzado
console.log("// replace() con regex");
console.log("123-456-789".replace(/\d/g, "X")); // "XXX-XXX-XXX"
