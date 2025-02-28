// ✅ Cómo escribir funciones flecha (=>) y su sintaxis básica.
// ✅ Uso en métodos de arrays (map(), filter(), reduce()).
// ✅ Diferencias entre this en funciones flecha y tradicionales.
// ✅ Ejemplos en setTimeout() y setInterval().
// ✅ Funciones flecha con desestructuración y valores por defecto.

// ==========================
// 🔹 1. SINTAXIS BÁSICA
// ==========================

// 🔹 Función tradicional
function suma(a, b) {
    return a + b;
}
console.log("// Función tradicional");
console.log(suma(3, 4)); // 7

// 🔹 Función flecha equivalente
console.log("// Función flecha equivalente");
const sumaFlecha = (a, b) => a + b;
console.log(sumaFlecha(3, 4)); // 7

// ==========================
// 🔹 2. FUNCIONES CON UN SOLO PARÁMETRO
// ==========================

// 🔹 Función tradicional
function cuadrado(n) {
    return n * n;
}

// 🔹 Función flecha con un solo parámetro (puede omitirse el paréntesis)
console.log("// Función flecha con un solo parámetro");
const cuadradoFlecha = n => n * n;
console.log(cuadradoFlecha(5)); // 25

// ==========================
// 🔹 3. FUNCIONES SIN PARÁMETROS
// ==========================

// 🔹 Función tradicional
function saludar() {
    return "Hola, mundo!";
}

// 🔹 Función flecha sin parámetros (requiere paréntesis)
console.log("// Función flecha sin parámetros");
const saludarFlecha = () => "Hola, mundo!";
console.log(saludarFlecha()); // "Hola, mundo!"

// ==========================
// 🔹 4. FUNCIONES CON CUERPO DE BLOQUE ({})
// ==========================

// 🔹 Si hay varias líneas, se usan llaves y `return`
console.log("// Función flecha con cuerpo de bloque");
const multiplicar = (a, b) => {
    let resultado = a * b;
    return resultado;
};
console.log(multiplicar(3, 4)); // 12

// ==========================
// 🔹 5. FUNCIONES FLECHA COMO CALLBACKS
// ==========================

// 🔹 Usando funciones tradicionales
let numeros = [1, 2, 3, 4, 5];
console.log("// Usando función tradicional en forEach");
numeros.forEach(function(num) {
    console.log(num * 2);
});

// 🔹 Usando función flecha en `forEach`
console.log("// Usando función flecha en forEach");
numeros.forEach(num => console.log(num * 2));

// ==========================
// 🔹 6. FUNCIONES FLECHA EN MÉTODOS DE ARRAYS
// ==========================

// 🔹 map(): Aplica una función a cada elemento y devuelve un nuevo array
console.log("// map(): Multiplica cada número por 2");
let dobles = numeros.map(num => num * 2);
console.log(dobles); // [2, 4, 6, 8, 10]

// 🔹 filter(): Filtra elementos que cumplan una condición
console.log("// filter(): Filtra números mayores a 3");
let mayoresA3 = numeros.filter(num => num > 3);
console.log(mayoresA3); // [4, 5]

// 🔹 find(): Devuelve el primer elemento que cumple la condición
console.log("// find(): Encuentra el primer número mayor a 3");
let encontrado = numeros.find(num => num > 3);
console.log(encontrado); // 4

// 🔹 reduce(): Reduce el array a un solo valor
console.log("// reduce(): Suma todos los elementos");
let sumaTotal = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(sumaTotal); // 15

// ==========================
// 🔹 7. DIFERENCIA ENTRE FUNCIONES FLECHA Y TRADICIONALES
// ==========================

// 🔹 `this` en funciones tradicionales (se refiere al objeto)
console.log("// this en función tradicional");
const objeto = {
    nombre: "Juan",
    mostrarNombre: function() {
        console.log(this.nombre); // "Juan"
    }
};
objeto.mostrarNombre();

// 🔹 `this` en función flecha (se refiere al ámbito exterior)
console.log("// this en función flecha");
const objeto2 = {
    nombre: "Ana",
    mostrarNombre: () => {
        console.log(this.nombre); // undefined (porque `this` apunta al global)
    }
};
objeto2.mostrarNombre();

// ==========================
// 🔹 8. USO EN SETTIMEOUT Y SETINTERVAL
// ==========================

// 🔹 Función tradicional en setTimeout
console.log("// setTimeout con función tradicional");
setTimeout(function() {
    console.log("⏳ Mensaje después de 2 segundos (tradicional)");
}, 2000);

// 🔹 Función flecha en setTimeout
console.log("// setTimeout con función flecha");
setTimeout(() => console.log("⏳ Mensaje después de 2 segundos (flecha)"), 2000);

// ==========================
// 🔹 9. FUNCIÓN FLECHA CON DESESTRUCTURACIÓN
// ==========================

// 🔹 Desestructuración en parámetros
console.log("// Función flecha con desestructuración");
const mostrarPersona = ({ nombre, edad }) => `👤 ${nombre}, ${edad} años`;
let persona = { nombre: "Carlos", edad: 30 };
console.log(mostrarPersona(persona)); // "👤 Carlos, 30 años"

// ==========================
// 🔹 10. FUNCIÓN FLECHA CON VALORES POR DEFECTO
// ==========================

// 🔹 Parámetros con valores por defecto
console.log("// Función flecha con valores por defecto");
const saludarPersona = (nombre = "Visitante") => `👋 Hola, ${nombre}`;
console.log(saludarPersona("Pedro")); // "👋 Hola, Pedro"
console.log(saludarPersona()); // "👋 Hola, Visitante"
