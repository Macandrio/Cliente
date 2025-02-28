// ✅ Cómo crear expresiones regulares (/expresion/ o new RegExp()).
// ✅ Métodos para usarlas (test(), exec(), match(), replace()).
// ✅ Patrones básicos (\d, \w, \s, .).
// ✅ Cuantificadores (*, +, {n,m}).
// ✅ Grupos y opciones ((), |, \b).
// ✅ Modificadores (g, i, m).
// ✅ Validaciones útiles (email, teléfono, código postal).


// ==========================
// 🔹 1. CREAR EXPRESIONES REGULARES
// ==========================

// 🔹 Forma 1: Usando barras /.../
let regex1 = /hola/;

// 🔹 Forma 2: Usando el constructor RegExp
let regex2 = new RegExp("hola");

// ==========================
// 🔹 2. MÉTODOS PARA USAR EXPRESIONES REGULARES
// ==========================

// 🔹 test() → Devuelve true si la expresión regular coincide en la cadena
console.log("// test(): Verifica si hay coincidencia");
let texto = "hola mundo";
console.log(/mundo/.test(texto)); // true
console.log(/adiós/.test(texto)); // false

// 🔹 exec() → Devuelve el primer resultado encontrado o null si no hay coincidencias
console.log("// exec(): Devuelve el primer resultado encontrado");
let resultado = /mundo/.exec(texto);
console.log(resultado); // ["mundo", index: 5, input: "hola mundo"]

// 🔹 match() → Devuelve un array con todas las coincidencias o null si no hay
console.log("// match(): Busca todas las coincidencias en un string");
let texto2 = "gato, perro, gato";
console.log(texto2.match(/gato/g)); // ["gato", "gato"]

// 🔹 replace() → Reemplaza coincidencias por otro texto
console.log("// replace(): Reemplaza coincidencias");
console.log(texto2.replace(/gato/g, "tigre")); // "tigre, perro, tigre"

// 🔹 search() → Devuelve la posición de la primera coincidencia o -1 si no hay
console.log("// search(): Devuelve la posición de la primera coincidencia");
console.log(texto.search(/mundo/)); // 5

// 🔹 split() → Divide una cadena según la expresión regular
console.log("// split(): Divide un string usando una expresión regular");
console.log("apple, banana, cherry".split(/,\s*/)); // ["apple", "banana", "cherry"]

// ==========================
// 🔹 3. PATRONES BÁSICOS EN EXPRESIONES REGULARES
// ==========================

// 🔹 Buscar cualquier letra específica
console.log("// Buscar una palabra específica");
console.log(/java/.test("javascript")); // true

// 🔹 Buscar al inicio (^) y al final ($) de la cadena
console.log("// ^ y $: Buscar al inicio y al final de una cadena");
console.log(/^hola/.test("hola mundo")); // true (empieza con "hola")
console.log(/mundo$/.test("hola mundo")); // true (termina con "mundo")

// 🔹 Buscar cualquier dígito (\d) y cualquier letra (\w)
console.log("// \\d y \\w: Buscar dígitos y letras");
console.log(/\d/.test("123abc")); // true (contiene un número)
console.log(/\w/.test("123abc")); // true (contiene letras o números)

// 🔹 Buscar espacios en blanco (\s) y cualquier carácter (.)
console.log("// \\s y .: Buscar espacios en blanco y cualquier carácter");
console.log(/\s/.test("hola mundo")); // true (tiene un espacio)
console.log(/./.test("hola")); // true (cualquier carácter)

// ==========================
// 🔹 4. CUANTIFICADORES EN EXPRESIONES REGULARES
// ==========================

// 🔹 * → Coincide 0 o más veces
console.log("// *: Coincide 0 o más veces");
console.log(/bo*n/.test("bn")); // true (n aparece sin o)
console.log(/bo*n/.test("bon")); // true (una "o")
console.log(/bo*n/.test("booon")); // true (varias "o")

// 🔹 + → Coincide 1 o más veces
console.log("// +: Coincide 1 o más veces");
console.log(/bo+n/.test("bn")); // false (debe haber al menos una "o")
console.log(/bo+n/.test("bon")); // true

// 🔹 ? → Coincide 0 o 1 vez
console.log("// ?: Coincide 0 o 1 vez");
console.log(/colou?r/.test("color")); // true (color en inglés)
console.log(/colou?r/.test("colour")); // true (colour en inglés británico)

// 🔹 {n} → Coincide exactamente n veces
console.log("// {n}: Coincide exactamente n veces");
console.log(/\d{3}/.test("1234")); // true (hay al menos tres dígitos)

// 🔹 {n,} → Coincide al menos n veces
console.log("// {n,}: Coincide al menos n veces");
console.log(/\d{2,}/.test("12")); // true (tiene al menos dos dígitos)

// 🔹 {n,m} → Coincide entre n y m veces
console.log("// {n,m}: Coincide entre n y m veces");
console.log(/\d{2,4}/.test("12345")); // true (tiene entre 2 y 4 dígitos)

// ==========================
// 🔹 5. GRUPOS Y OPCIONES EN EXPRESIONES REGULARES
// ==========================

// 🔹 () → Agrupa expresiones
console.log("// (): Agrupa expresiones");
console.log(/(ab)+/.test("ababab")); // true (ab repetido)

// 🔹 | → Alternancia (OR)
console.log("// |: Alternancia (OR)");
console.log(/azul|verde/.test("El coche es azul")); // true
console.log(/azul|verde/.test("El coche es rojo")); // false

// 🔹 \b → Coincide con los límites de una palabra
console.log("// \\b: Coincide con los límites de una palabra");
console.log(/\bsol\b/.test("solamente")); // false
console.log(/\bsol\b/.test("el sol brilla")); // true

// ==========================
// 🔹 6. MODIFICADORES (FLAGS)
// ==========================

// 🔹 g → Búsqueda global (todas las coincidencias)
console.log("// g: Búsqueda global");
console.log("hola hola hola".match(/hola/g)); // ["hola", "hola", "hola"]

// 🔹 i → Ignora mayúsculas y minúsculas
console.log("// i: Ignora mayúsculas y minúsculas");
console.log(/hola/i.test("HOLA")); // true

// 🔹 m → Búsqueda en múltiples líneas (^ y $ aplican a cada línea)
console.log("// m: Búsqueda en múltiples líneas");
console.log(/^hola/m.test("hola\nmundo")); // true

// ==========================
// 🔹 7. VALIDACIONES CON EXPRESIONES REGULARES
// ==========================

// 🔹 Validar correo electrónico
console.log("// Validar correo electrónico");
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("correo@example.com")); // true
console.log(emailRegex.test("correo@ejemplo")); // false

// 🔹 Validar número de teléfono
console.log("// Validar número de teléfono");
let telefonoRegex = /^\d{3}-\d{3}-\d{4}$/;
console.log(telefonoRegex.test("123-456-7890")); // true
console.log(telefonoRegex.test("1234567890")); // false

// 🔹 Validar código postal (ejemplo de 5 dígitos)
console.log("// Validar código postal");
let codigoPostalRegex = /^\d{5}$/;
console.log(codigoPostalRegex.test("28001")); // true
console.log(codigoPostalRegex.test("28001-1234")); // false
