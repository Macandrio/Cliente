// ✅ Map (clave-valor) y Set (valores únicos).
// ✅ Métodos clave (set(), get(), has(), delete(), size(), clear()).
// ✅ Cómo recorrer Map y Set (forEach(), for...of, keys(), values()).
// ✅ Conversión entre Array, Set y Map.
// ✅ Diferencias entre Map y Objeto, y entre Set y Array.

// ==========================
// 🔹 1. MAP (Clave-Valor)
// ==========================

// 🔹 Crear un Map vacío
console.log("// Crear un Map vacío");
let mapa = new Map();
console.log(mapa);

// 🔹 Agregar elementos con set(clave, valor)
console.log("// .set(): Agregar elementos");
mapa.set("nombre", "Carlos");
mapa.set("edad", 30);
mapa.set(1, "Número uno");
console.log(mapa);

// 🔹 Obtener valores con get(clave)
console.log("// .get(): Obtener un valor por clave");
console.log(mapa.get("nombre")); // "Carlos"
console.log(mapa.get(1)); // "Número uno"

// 🔹 Verificar si una clave existe con has(clave)
console.log("// .has(): Verificar si una clave existe");
console.log(mapa.has("edad")); // true
console.log(mapa.has("altura")); // false

// 🔹 Eliminar un elemento con delete(clave)
console.log("// .delete(): Eliminar un elemento");
mapa.delete("edad");
console.log(mapa.has("edad")); // false

// 🔹 Obtener el tamaño del Map con size
console.log("// .size: Obtener el número de elementos");
console.log(mapa.size); // 2

// 🔹 Recorrer un Map con forEach()
console.log("// .forEach(): Recorrer el Map");
mapa.forEach((valor, clave) => {
    console.log(`${clave}: ${valor}`);
});

// 🔹 Recorrer claves y valores con for...of
console.log("// Recorrer claves y valores con for...of");
for (let [clave, valor] of mapa) {
    console.log(`${clave}: ${valor}`);
}

// 🔹 Obtener solo las claves con keys()
console.log("// .keys(): Obtener todas las claves");
console.log([...mapa.keys()]); // ["nombre", 1]

// 🔹 Obtener solo los valores con values()
console.log("// .values(): Obtener todos los valores");
console.log([...mapa.values()]); // ["Carlos", "Número uno"]

// 🔹 Obtener todas las entradas con entries()
console.log("// .entries(): Obtener clave-valor como array");
console.log([...mapa.entries()]); // [["nombre", "Carlos"], [1, "Número uno"]]

// 🔹 Limpiar todo el Map con clear()
console.log("// .clear(): Eliminar todos los elementos del Map");
mapa.clear();
console.log(mapa.size); // 0

// ==========================
// 🔹 2. SET (Conjunto de valores únicos)
// ==========================

// 🔹 Crear un Set vacío
console.log("// Crear un Set vacío");
let conjunto = new Set();
console.log(conjunto);

// 🔹 Agregar elementos con add(valor)
console.log("// .add(): Agregar elementos únicos");
conjunto.add(1);
conjunto.add(2);
conjunto.add(3);
conjunto.add(1); // No se agrega porque ya existe
console.log(conjunto);

// 🔹 Verificar si un valor existe con has(valor)
console.log("// .has(): Verificar si un valor está en el Set");
console.log(conjunto.has(2)); // true
console.log(conjunto.has(5)); // false

// 🔹 Eliminar un valor con delete(valor)
console.log("// .delete(): Eliminar un valor del Set");
conjunto.delete(2);
console.log(conjunto.has(2)); // false

// 🔹 Obtener el tamaño del Set con size
console.log("// .size: Obtener el número de elementos");
console.log(conjunto.size); // 2

// 🔹 Recorrer un Set con forEach()
console.log("// .forEach(): Recorrer el Set");
conjunto.forEach(valor => console.log(valor));

// 🔹 Recorrer un Set con for...of
console.log("// Recorrer un Set con for...of");
for (let valor of conjunto) {
    console.log(valor);
}

// 🔹 Obtener solo los valores con values() (igual que keys())
console.log("// .values(): Obtener valores del Set");
console.log([...conjunto.values()]); // [1, 3]

// 🔹 Obtener todas las entradas con entries() (clave y valor son iguales)
console.log("// .entries(): Obtener entradas clave-valor");
console.log([...conjunto.entries()]); // [[1, 1], [3, 3]]

// 🔹 Limpiar todo el Set con clear()
console.log("// .clear(): Eliminar todos los valores del Set");
conjunto.clear();
console.log(conjunto.size); // 0

// ==========================
// 🔹 3. CONVERSIÓN ENTRE ARRAY, SET Y MAP
// ==========================

// 🔹 Convertir un array a Set (para eliminar duplicados)
console.log("// Convertir un array a Set (eliminar duplicados)");
let numeros = [1, 2, 2, 3, 3, 4, 5];
let setNumeros = new Set(numeros);
console.log([...setNumeros]); // [1, 2, 3, 4, 5]

// 🔹 Convertir un Set a array
console.log("// Convertir un Set a Array");
let arrayDesdeSet = [...setNumeros];
console.log(arrayDesdeSet);

// 🔹 Convertir un Map a array de pares clave-valor
console.log("// Convertir un Map a Array de pares clave-valor");
let mapaEjemplo = new Map([["a", 1], ["b", 2]]);
console.log([...mapaEjemplo]);

// 🔹 Convertir un array de pares clave-valor a Map
console.log("// Convertir un array de pares clave-valor a Map");
let arrayPares = [["x", 10], ["y", 20]];
let nuevoMapa = new Map(arrayPares);
console.log(nuevoMapa);

// ==========================
// 🔹 4. DIFERENCIAS ENTRE MAP Y SET VS OBJETOS Y ARRAYS
// ==========================

// 🔹 Map vs Objeto:
// - `Map` permite claves de cualquier tipo (incluso objetos y funciones).
// - `Map` mantiene el orden de inserción.
// - `Objeto` solo usa strings o símbolos como claves.
// - `Objeto` no tiene métodos como `size`, `values()`, `entries()`.
console.log("// Diferencia entre Map y Objeto");
let obj = { nombre: "Ana", edad: 25 };
let mapaEj = new Map();
mapaEj.set("nombre", "Ana");
mapaEj.set("edad", 25);
console.log(Object.keys(obj)); // ["nombre", "edad"]
console.log([...mapaEj.keys()]); // ["nombre", "edad"]

// 🔹 Set vs Array:
// - `Set` solo almacena valores únicos, `Array` puede tener duplicados.
// - `Set` tiene mejor rendimiento para búsquedas (`has()` más rápido que `includes()`).
// - `Set` no tiene índices, los valores se almacenan en cualquier orden.
console.log("// Diferencia entre Set y Array");
let arrayEj = [1, 2, 2, 3];
let setEj = new Set(arrayEj);
console.log(arrayEj.includes(2)); // true
console.log(setEj.has(2)); // true
