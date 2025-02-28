//✅ Métodos de manipulación (push(), pop(), shift(), unshift())
//✅ Métodos de búsqueda (indexOf(), includes(), find(), findIndex())
//✅ Métodos de transformación (map(), filter(), reduce())
//✅ Métodos de ordenación (sort(), reverse())
//✅ Métodos avanzados (flat(), flatMap(), fill())

// 🔹 1. join() → Une los elementos del array en un string con un separador dado
let arr = ['a', 'b', 'c'];
console.log(arr.join('-')); // "a-b-c"

// 🔹 2. push() → Agrega elementos al final del array
let nums = [1, 2, 3];
nums.push(4);
console.log(nums); // [1, 2, 3, 4]

// 🔹 3. pop() → Elimina el último elemento del array y lo devuelve
let frutas = ["Manzana", "Banana", "Pera"];
let ultima = frutas.pop();
console.log(frutas); // ["Manzana", "Banana"]

// 🔹 4. unshift() → Agrega elementos al inicio del array
let colores = ["rojo", "verde"];
colores.unshift("azul");
console.log(colores); // ["azul", "rojo", "verde"]

// 🔹 5. shift() → Elimina el primer elemento del array y lo devuelve
let letras = ["x", "y", "z"];
let primero = letras.shift();
console.log(letras); // ["y", "z"]

// 🔹 6. concat() → Une dos o más arrays y devuelve un nuevo array
let num1 = [1, 2];
let num2 = [3, 4];
let combinado = num1.concat(num2);
console.log(combinado); // [1, 2, 3, 4]

// 🔹 7. slice(inicio, fin) → Extrae una parte del array sin modificar el original
let animales = ["perro", "gato", "pájaro", "pez"];
let mascotas = animales.slice(1, 3);
console.log(mascotas); // ["gato", "pájaro"]

// 🔹 8. splice(inicio, cantidad, elementos...) → Modifica el array eliminando y/o agregando elementos
let dias = ["Lunes", "Martes", "Jueves"];
dias.splice(2, 0, "Miércoles"); // Inserta "Miércoles" en la posición 2
console.log(dias); // ["Lunes", "Martes", "Miércoles", "Jueves"]

// 🔹 Ejemplo: Array de días de la semana
    dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

dias.splice(2, 1); // 🔥 Elimina 1 elemento en la posición 2 ("Miércoles")

console.log(dias); 
// ["Lunes", "Martes", "Jueves", "Viernes"] ✅ "Miércoles" fue eliminado


// 🔹 9. indexOf(elemento) → Devuelve la posición del primer elemento encontrado, -1 si no existe
let nombres = ["Ana", "Juan", "Luis"];
console.log(nombres.indexOf("Juan")); // 1

// 🔹 10. lastIndexOf(elemento) → Igual que indexOf, pero busca desde el final
let numeros = [1, 2, 3, 2, 1];
console.log(numeros.lastIndexOf(2)); // 3

// 🔹 11. includes(elemento) → Devuelve true si el elemento está en el array
let comidas = ["pizza", "hamburguesa", "sushi"];
console.log(comidas.includes("sushi")); // true

// 🔹 12. reverse() → Invierte el orden de los elementos en el array
let numeros2 = [1, 2, 3, 4];
numeros2.reverse();
console.log(numeros2); // [4, 3, 2, 1]

// 🔹 13. sort() → Ordena los elementos del array (alfabético por defecto)
let letras2 = ["b", "a", "d", "c"];
letras2.sort();
console.log(letras2); // ["a", "b", "c", "d"]

// 🔹 14. sort(funcion) → Ordenar numéricamente usando una función de comparación
let edades = [25, 18, 32, 7];
edades.sort((a, b) => a - b);
console.log(edades); // [7, 18, 25, 32]

// 🔹 15. map(funcion) → Crea un nuevo array aplicando una función a cada elemento
let dobles = [1, 2, 3].map(num => num * 2);
console.log(dobles); // [2, 4, 6]

// 🔹 16. filter(funcion) → Devuelve un nuevo array con elementos que cumplan una condición
let mayoresDeEdad = [12, 17, 18, 21].filter(edad => edad >= 18);
console.log(mayoresDeEdad); // [18, 21]

// 🔹 17. find(funcion) → Devuelve el primer elemento que cumpla una condición
let primerMayor = [12, 17, 18, 21].find(edad => edad >= 18);
console.log(primerMayor); // 18

// 🔹 18. findIndex(funcion) → Devuelve la posición del primer elemento que cumpla una condición
let indexMayor = [12, 17, 18, 21].findIndex(edad => edad >= 18);
console.log(indexMayor); // 2

// 🔹 19. some(funcion) → Devuelve true si al menos un elemento cumple la condición
let hayMayores = [12, 17, 18, 21].some(edad => edad >= 18);
console.log(hayMayores); // true

// 🔹 20. every(funcion) → Devuelve true si TODOS los elementos cumplen la condición
let todosMayores = [18, 20, 25].every(edad => edad >= 18);
console.log(todosMayores); // true

// 🔹 21. reduce(funcion, valorInicial) → Reduce el array a un solo valor acumulando los elementos
let suma = [1, 2, 3, 4].reduce((acumulador, num) => acumulador + num, 0);
console.log(suma); // 10

// 🔹 22. reduceRight(funcion, valorInicial) → Igual que reduce(), pero de derecha a izquierda
let resta = [1, 2, 3, 4].reduceRight((acumulador, num) => acumulador - num, 0);
console.log(resta); // -2

// 🔹 23. fill(valor, inicio, fin) → Rellena una parte del array con un valor
let llenado = [1, 2, 3, 4, 5];
llenado.fill(0, 1, 4);
console.log(llenado); // [1, 0, 0, 0, 5]

// 🔹 24. flat(profundidad) → Aplana arrays anidados hasta la profundidad dada
let anidado = [1, [2, [3, [4]]]];
console.log(anidado.flat(2)); // [1, 2, 3, [4]]

// 🔹 25. flatMap(funcion) → Similar a map() seguido de flat(1)
let duplicado = [1, 2, 3].flatMap(num => [num, num * 2]);
console.log(duplicado); // [1, 2, 2, 4, 3, 6]
