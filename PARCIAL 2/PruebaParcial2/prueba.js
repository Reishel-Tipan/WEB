class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

class Inventario {
    constructor() {
        this.productos = [];
    }

    agregarProducto(nombre, precio, cantidad, categoria) {
        this.productos.push(new Producto(nombre, precio, cantidad, categoria));
        console.log(`Producto ${nombre} agregado al inventario.`);
    }

    listarProductos() {
        return this.productos.sort((a, b) => a.precio - b.precio);
    }    

    filtrarPorCategoria(categoria) {
        const productosFiltrados = this.productos.filter(p => p.categoria === categoria);
        console.log(`Productos en la categoría "${categoria}":`);
        productosFiltrados.forEach(p => console.log(p));
    }

    aplicarDescuento(categoria, porcentaje) {
        for (const indice in this.productos) {
            const producto = this.productos[indice];
            if (producto.categoria === categoria) {
                const descuento = (producto.precio * porcentaje) / 100;
                producto.precio -= descuento;
            }
        }
        console.log(`Se aplicó un descuento del ${porcentaje}% a los productos de la categoría "${categoria}".`);
    }    
}

class Venta {
    constructor() {
        this.ventas = [];
        this.ingresosTotales = 0;
        this.productosVendidos = {};
    }

    realizarVenta(nombreProducto, cantidad, inventario) {
        const producto = inventario.productos.find(p => p.nombre === nombreProducto);

        if (!producto) {
            console.log(`ERROR!! El producto "${nombreProducto}" no existe en el inventario.`);
            return;
        }

        if (producto.cantidad < cantidad) {
            console.log(`ERROR!! Cantidad insuficiente de "${nombreProducto}".`);
            return;
        }

        producto.cantidad -= cantidad;
        const totalVenta = producto.precio * cantidad;
        this.ventas.push({ nombreProducto, cantidad, totalVenta, fecha: new Date() });
        this.ingresosTotales += totalVenta;
        this.productosVendidos[nombreProducto] = (this.productosVendidos[nombreProducto] || 0) + cantidad;

        console.log(`Venta realizada: ${cantidad} unidades de "${nombreProducto}" por $${totalVenta}.`);
    }

    generarReporte(inventario) {
        console.log('Inventario actualizado:');
        
        for (const indice in inventario.productos) {
            console.log(inventario.productos[indice]);
        }
    
        console.log('\nVentas realizadas:');
        for (const indice in this.ventas) {
            const venta = this.ventas[indice];
            console.log(`Producto: ${venta.nombreProducto}, Cantidad: ${venta.cantidad}, Total: $${venta.totalVenta}, Fecha: ${venta.fecha}`);
        }
    
        console.log(`\nTotal de ingresos generados: $${this.ingresosTotales}`);
    
        let productoMasVendido = '';
        let maxVentas = 0;
        for (const nombreProducto in this.productosVendidos) {
            if (this.productosVendidos[nombreProducto] > maxVentas) {
                maxVentas = this.productosVendidos[nombreProducto];
                productoMasVendido = nombreProducto;
            }
        }
    
        console.log(`Producto más vendido: ${productoMasVendido}`);
    }
    
}

const inventario = new Inventario();
inventario.agregarProducto('Libro Romeo y Julieta', 20, 50, 'romance');
inventario.agregarProducto('Libro Ush ush', 22, 30, 'romance');
inventario.agregarProducto('Libro Pecados capitales', 24, 20, 'drama');
inventario.agregarProducto('Libro It', 15, 40, 'miedo');

const ventas = new Venta();
ventas.realizarVenta('Libro Romeo y Julieta', 2, inventario);
ventas.realizarVenta('Libro It', 25, inventario);
ventas.realizarVenta('Libro Rapunzel', 1, inventario);

inventario.aplicarDescuento('romance', 10);

ventas.generarReporte(inventario);
