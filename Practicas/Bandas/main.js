import { Banda } from "./Banda.js";

// Array para almacenar las bandas
const bandas = [];

// Función para agregar una banda
function agregarBanda(nombre, añoFormacion, telefonoContacto, estilo) {
    const banda = new Banda(nombre, añoFormacion, telefonoContacto, estilo);
    bandas.push(banda);
    console.log(`✅ Banda "${nombre}" agregada.`);
    return banda;
}

// Función para imprimir la lista de bandas
function imprimirListadoBandas() {
    if (bandas.length === 0) {
        console.log("❌ No hay bandas registradas.");
        return;
    }
    bandas.forEach(banda => console.log(banda.mostrarBanda()));
}

// Función para buscar una banda por nombre (programación funcional con .find())
function buscarBandaPorNombre(nombre) {
    const banda = bandas.find(b => b.nombre.toLowerCase() === nombre.toLowerCase());
    return banda ? banda.mostrarBanda() : "❌ Banda no encontrada.";
}

// Función para ordenar bandas por año de formación
function ordenarBandasPorAño() {
    bandas.sort((a, b) => a.añoFormacion - b.añoFormacion);
    console.log("📅 Bandas ordenadas por año de formación:");
    imprimirListadoBandas();
}

// === PRUEBA DEL CÓDIGO ===
const banda1 = agregarBanda("Los Rockeros", 1995, "123-456-789", "Rock");
const banda2 = agregarBanda("Jazz Masters", 2005, "987-654-321", "Jazz");
const banda3 = agregarBanda("Electro Vibes", 2012, "456-789-123", "Electrónica");

// Agregar integrantes a las bandas
banda1.agregarIntegrante("12345678A", "Juan", "Pérez");
banda1.agregarIntegrante("23456789B", "Carlos", "Gómez");
banda2.agregarIntegrante("34567890C", "Ana", "López");

// Imprimir listado de bandas
console.log("\n📜 Listado de bandas:");
imprimirListadoBandas();

// Buscar una banda
console.log("\n🔍 Buscar banda:");
console.log(buscarBandaPorNombre("Jazz Masters"));

// Ordenar bandas por año de formación
console.log("\n📅 Bandas ordenadas por año:");
ordenarBandasPorAño();

// Mostrar integrantes de una banda
console.log("\n🎤 Integrantes de Los Rockeros:");
console.log(banda1.mostrarIntegrantes());
