export class Pedido {
    constructor(id_pedido, nombre_cliente, metodo_pago, ...productos) {
        this.id_pedido = id_pedido;
        this.nombre_cliente = nombre_cliente;
        this.metodo_pago = metodo_pago;
        this.productos = productos;
    }

    calcularTotal(){
        let totales =  this.productos.map(p => p.cantidad * p.precio);
        let total = 0;
        totales.forEach(t => total += t);
        return total;
    }

     // 🔹 Método para cambiar la cantidad de un producto
     cambiarCantidadProducto(nombreProducto, nuevaCantidad) {
        let producto = this.productos.find(p => p.nombre === nombreProducto);

        if (producto) {
            if (nuevaCantidad > 0) {
                producto.cantidad = nuevaCantidad;
                console.log(`✅ Cantidad de "${nombreProducto}" actualizada a ${nuevaCantidad}.`);
            } else {
                console.log(`⚠️ La cantidad debe ser mayor a 0.`);
            }
        } else {
            console.log(`❌ Producto "${nombreProducto}" no encontrado en el pedido.`);
        }
    }

    toString() {
        return `
            🛒 Pedido: ${this.id}
            👤 Cliente: ${this.cliente}
            💳 Método de Pago: ${this.metodoPago}
            📦 Productos:
            ${this.productos.map(p => `  - ${p.cantidad} x ${p.nombre} ($${p.precio} c/u)`).join("\n")}
            💰 Total: $${this.calcularTotal()}
            ===============================`;
    }
}