// ✅ Propiedades matemáticas (Math.PI, Math.E, Math.SQRT2).
// ✅ Redondeo (round(), floor(), ceil(), trunc()).
// ✅ Máximos y mínimos (max(), min()).
// ✅ Potencias y raíces (pow(), sqrt(), cbrt()).
// ✅ Generación de números aleatorios (random()).
// ✅ Logaritmos y exponenciales (log(), exp()).
// ✅ Funciones trigonométricas (sin(), cos(), tan(), asin(), acos(), atan()).
// ✅ Conversión entre grados y radianes.
// ✅ Valores absolutos y signos (abs(), sign()).
// ✅ Clamping (restringir valores dentro de un rango).


// ==========================
// 🔹 1. PROPIEDADES MATEMÁTICAS
// ==========================

console.log("// Math.PI: Número PI (3.14159...)");
console.log(Math.PI); // 3.141592653589793

console.log("// Math.E: Número de Euler (2.718...)");
console.log(Math.E); // 2.718281828459045

console.log("// Math.SQRT2: Raíz cuadrada de 2 (1.414...)");
console.log(Math.SQRT2); // 1.4142135623730951

console.log("// Math.LN2: Logaritmo natural de 2");
console.log(Math.LN2); // 0.6931471805599453

console.log("// Math.LN10: Logaritmo natural de 10");
console.log(Math.LN10); // 2.302585092994046

// ==========================
// 🔹 2. MÉTODOS DE REDONDEO
// ==========================

console.log("// Math.round(): Redondea al entero más cercano");
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4

console.log("// Math.floor(): Redondea hacia abajo");
console.log(Math.floor(4.9)); // 4

console.log("// Math.ceil(): Redondea hacia arriba");
console.log(Math.ceil(4.1)); // 5

console.log("// Math.trunc(): Elimina los decimales");
console.log(Math.trunc(4.9)); // 4

// ==========================
// 🔹 3. VALORES MÁXIMOS Y MÍNIMOS
// ==========================

console.log("// Math.max(): Devuelve el número más alto");
console.log(Math.max(3, 7, 1, 9)); // 9

console.log("// Math.min(): Devuelve el número más bajo");
console.log(Math.min(3, 7, 1, 9)); // 1

// ==========================
// 🔹 4. POTENCIAS Y RAÍCES
// ==========================

console.log("// Math.pow(base, exponente): Eleva un número a una potencia");
console.log(Math.pow(2, 3)); // 8 (2³)

console.log("// Math.sqrt(): Raíz cuadrada");
console.log(Math.sqrt(25)); // 5

console.log("// Math.cbrt(): Raíz cúbica");
console.log(Math.cbrt(27)); // 3

// ==========================
// 🔹 5. NÚMEROS ALEATORIOS
// ==========================

console.log("// Math.random(): Devuelve un número aleatorio entre 0 y 1");
console.log(Math.random());

console.log("// Número aleatorio entre 1 y 10");
console.log(Math.floor(Math.random() * 10) + 1);

console.log("// Número aleatorio entre un rango min y max");
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(numeroAleatorio(5, 15)); // Número entre 5 y 15

// ==========================
// 🔹 6. LOGARITMOS Y EXPONENTES
// ==========================

console.log("// Math.log(): Logaritmo natural (base e)");
console.log(Math.log(10)); // 2.302585092994046

console.log("// Math.log10(): Logaritmo en base 10");
console.log(Math.log10(100)); // 2

console.log("// Math.exp(): Eleva e a una potencia");
console.log(Math.exp(2)); // 7.38905609893065

// ==========================
// 🔹 7. FUNCIONES TRIGONOMÉTRICAS
// ==========================

console.log("// Math.sin(): Seno de un ángulo en radianes");
console.log(Math.sin(Math.PI / 2)); // 1

console.log("// Math.cos(): Coseno de un ángulo en radianes");
console.log(Math.cos(Math.PI)); // -1

console.log("// Math.tan(): Tangente de un ángulo en radianes");
console.log(Math.tan(Math.PI / 4)); // 1

console.log("// Math.asin(): Arco seno (resultado en radianes)");
console.log(Math.asin(1)); // 1.5707963267948966 (PI/2)

console.log("// Math.acos(): Arco coseno");
console.log(Math.acos(0)); // 1.5707963267948966 (PI/2)

console.log("// Math.atan(): Arco tangente");
console.log(Math.atan(1)); // 0.7853981633974483 (PI/4)

// ==========================
// 🔹 8. CONVERSIÓN ENTRE GRADOS Y RADIANES
// ==========================

console.log("// Convertir grados a radianes");
function gradosARadianes(grados) {
    return grados * (Math.PI / 180);
}
console.log(gradosARadianes(180)); // 3.141592653589793 (PI)

console.log("// Convertir radianes a grados");
function radianesAGrados(radianes) {
    return radianes * (180 / Math.PI);
}
console.log(radianesAGrados(Math.PI)); // 180

// ==========================
// 🔹 9. SIGNO Y VALORES ABSOLUTOS
// ==========================

console.log("// Math.abs(): Devuelve el valor absoluto");
console.log(Math.abs(-10)); // 10

console.log("// Math.sign(): Indica si el número es positivo, negativo o cero");
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(7)); // 1

// ==========================
// 🔹 10. CLAMPING: RESTRINGIR UN NÚMERO A UN RANGO
// ==========================

console.log("// Función para restringir un número dentro de un rango");
function clamp(valor, min, max) {
    return Math.max(min, Math.min(max, valor));
}
console.log(clamp(50, 0, 100)); // 50
console.log(clamp(-10, 0, 100)); // 0
console.log(clamp(150, 0, 100)); // 100
