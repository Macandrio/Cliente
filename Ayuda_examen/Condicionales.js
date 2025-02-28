// ✅ Estructuras condicionales: if, if...else, switch, operador ternario
// ✅ Bucles: for, for...of, for...in, while, do...while
// ✅ Control de flujo: break, continue
// ✅ Manejo de errores: try...catch, try...catch...finally
// ✅ Métodos avanzados: forEach, map, filter, find, reduce

// ==========================
// 🔹 1. ESTRUCTURAS CONDICIONALES
// ==========================

// 🔹 if: Evalúa una condición y ejecuta el bloque si es verdadera
console.log("// if: Evalúa una condición");
let edad = 20;
if (edad >= 18) {
    console.log("✅ Eres mayor de edad.");
}

// 🔹 if...else: Ejecuta un bloque si es verdadero y otro si es falso
console.log("// if...else: Evalúa y ejecuta una alternativa");
let temperatura = 15;
if (temperatura > 25) {
    console.log("🌞 Hace calor.");
} else {
    console.log("❄️ Hace frío.");
}

// 🔹 if...else if...else: Evalúa múltiples condiciones en orden
console.log("// if...else if...else: Múltiples condiciones");
let nota = 85;
if (nota >= 90) {
    console.log("🏆 Excelente.");
} else if (nota >= 70) {
    console.log("✔️ Aprobado.");
} else {
    console.log("❌ Reprobado.");
}

// 🔹 Operador ternario ?: (Versión reducida de if...else)
console.log("// Operador ternario ?: Condición en una sola línea");
let esMayor = edad >= 18 ? "✅ Adulto" : "❌ Menor";
console.log(esMayor);

// 🔹 switch: Evalúa una variable y ejecuta el caso que coincida
console.log("// switch: Evalúa una variable y ejecuta el caso correspondiente");
let dia = "martes";
switch (dia) {
    case "lunes":
        console.log("📅 Inicio de la semana.");
        break;
    case "viernes":
        console.log("🎉 ¡Fin de semana!");
        break;
    case "sábado":
    case "domingo":
        console.log("😎 Es fin de semana.");
        break;
    default:
        console.log("⏳ Día de semana.");
}

// ==========================
// 🔹 2. BUCLES (LOOPS)
// ==========================

// 🔹 for: Recorre un bloque de código un número determinado de veces
console.log("// for: Ejecuta un bloque de código un número fijo de veces");
for (let i = 0; i < 5; i++) {
    console.log("Iteración número " + (i + 1));
}

// 🔹 for...of: Recorre elementos de un array o string
console.log("// for...of: Itera sobre los valores de un array");
let frutas = ["🍎", "🍌", "🍍"];
for (let fruta of frutas) {
    console.log(fruta);
}

// 🔹 for...in: Itera sobre las claves de un objeto
console.log("// for...in: Itera sobre las claves de un objeto");
let persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}

// 🔹 while: Ejecuta el bloque mientras la condición sea verdadera
console.log("// while: Ejecuta mientras la condición sea verdadera");
let contador = 0;
while (contador < 3) {
    console.log("Contador: " + contador);
    contador++;
}

// 🔹 do...while: Ejecuta el bloque al menos una vez y luego evalúa la condición
console.log("// do...while: Ejecuta al menos una vez");
let numero = 0;
do {
    console.log("Número: " + numero);
    numero++;
} while (numero < 3);

// ==========================
// 🔹 3. CONTROL DE FLUJO
// ==========================

// 🔹 break: Sale de un bucle antes de que termine
console.log("// break: Detiene un bucle antes de que termine");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("⛔ Bucle detenido en " + i);
        break;
    }
    console.log(i);
}

// 🔹 continue: Salta una iteración y sigue con la siguiente
console.log("// continue: Salta una iteración pero sigue el bucle");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("🚀 Saltamos la iteración " + i);
        continue;
    }
    console.log(i);
}

// ==========================
// 🔹 4. MANEJO DE EXCEPCIONES (TRY...CATCH)
// ==========================

// 🔹 try...catch: Maneja errores sin detener la ejecución del programa
console.log("// try...catch: Captura errores y permite continuar la ejecución");
try {
    let x = 10 / 0; // No genera error en JavaScript, pero otros errores sí
    console.log("Resultado: " + x);
    throw new Error("Error de prueba");
} catch (error) {
    console.log("⚠️ Ocurrió un error: " + error.message);
}

// 🔹 try...catch...finally: Ejecuta un bloque después del try/catch (siempre)
console.log("// try...catch...finally: Ejecuta un bloque al final");
try {
    let resultado = 5 + 5;
    console.log("Resultado: " + resultado);
} catch (error) {
    console.log("⚠️ Error: " + error.message);
} finally {
    console.log("✅ Este código se ejecuta siempre.");
}

// ==========================
// 🔹 5. USO AVANZADO CON FUNCIONES Y ARRAYS
// ==========================

// 🔹 forEach(): Ejecuta una función para cada elemento de un array
console.log("// forEach(): Ejecuta una función por cada elemento");
let numeros = [1, 2, 3, 4];
numeros.forEach(num => console.log("Número: " + num));

// 🔹 map(): Aplica una función a cada elemento y devuelve un nuevo array
console.log("// map(): Aplica una función y devuelve un nuevo array");
let cuadrados = numeros.map(num => num * num);
console.log(cuadrados); // [1, 4, 9, 16]

// 🔹 filter(): Devuelve un nuevo array con elementos que cumplen una condición
console.log("// filter(): Filtra los elementos que cumplen una condición");
let mayores = numeros.filter(num => num > 2);
console.log(mayores); // [3, 4]

// 🔹 find(): Devuelve el primer elemento que cumple una condición
console.log("// find(): Devuelve el primer elemento que cumple la condición");
console.log(numeros.find(num => num > 2)); // 3

// 🔹 reduce(): Acumula valores en un solo resultado
console.log("// reduce(): Acumula los valores en un solo resultado");
let suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma); // 10
