import { Pedido } from "./Pedido.js";

// 🔹 Función para filtrar pedidos por método de pago usando `filter()`
function filtrarPedidosPorPago(pedidos, metodo) {
    return pedidos.filter(pedido => pedido.metodo_pago === metodo);
}




// 🔹 Pruebas
let pedido1 = new Pedido("PED-1001", "Juan Pérez", "Tarjeta", 
    { nombre: "Laptop", cantidad: 1, precio: 1000 },
    { nombre: "Teclado", cantidad: 2, precio: 50 },
    { nombre: "Mouse", cantidad: 1, precio: 25 }
);

let pedido2 = new Pedido("PED-1002", "Ana López", "PayPal", 
    { nombre: "Monitor", cantidad: 1, precio: 300 },
    { nombre: "Cable HDMI", cantidad: 3, precio: 20 }
);

let pedido3 = new Pedido("PED-1003", "Carlos Gómez", "Tarjeta", 
    { nombre: "Escritorio", cantidad: 1, precio: 250 },
    { nombre: "Silla", cantidad: 1, precio: 150 }
);

// 🔹 Array de pedidos
let pedidos = [pedido1, pedido2, pedido3];

// 🔹 Mostrar todos los pedidos
console.log("📌 Lista de todos los pedidos:");
pedidos.forEach(pedido => console.log(pedido.toString()));

// 🔹 Filtrar pedidos que fueron pagados con Tarjeta
let pedidosConTarjeta = filtrarPedidosPorPago(pedidos, "Tarjeta");

console.log("📌 Pedidos pagados con Tarjeta:");
pedidosConTarjeta.forEach(pedido => console.log(pedido.toString()));

// 🔹 Cambiar la cantidad de productos
pedido1.cambiarCantidadProducto("Teclado", 5);
pedido1.cambiarCantidadProducto("Mouse", 0); // ⚠️ Mensaje de error
pedido1.cambiarCantidadProducto("Impresora", 2); // ❌ Producto no encontrado

// 🔹 Mostrar el pedido actualizado
console.log(pedido1.toString());