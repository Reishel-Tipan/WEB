// Creación del inventario inicial
const inventarioProductos = {
    producto1: { nombre: 'disco de freno', precio: 20, cantidad: 50 },
    producto2: { nombre: 'embrague', precio: 40, cantidad: 30 },
    producto3: { nombre: 'bateria', precio: 60, cantidad: 20 },
    producto4: { nombre: 'amortiguador', precio: 15, cantidad: 40 },
};

Object.seal(inventarioProductos);

function venderProducto(nombreProducto, cantidad) {
    for (let clave in inventarioProductos) {
        if (inventarioProductos[clave].nombre === nombreProducto) {
            if (inventarioProductos[clave].cantidad >= cantidad) {
                inventarioProductos[clave].cantidad -= cantidad;
                console.log(`Venta confirmada de ${cantidad} unidades de ${nombreProducto}.`);
                return;
            } else {
                console.log(`ERROR!! No hay suficiente stock de ${nombreProducto}.`);
                return;
            }
        }
    }
    console.log(`ERROR!! El producto ${nombreProducto} no existe en el inventario`);
}

function aplicarDescuento(porcentaje) {
    const descuento = porcentaje / 100;
    for (let clave in inventarioProductos) {
        let nuevoPrecio = inventarioProductos[clave].precio * (1 - descuento);
        inventarioProductos[clave].precio = Math.max(0, nuevoPrecio); 
    }
    console.log(`Se aplicó un descuento del ${porcentaje}% a todos los productos`);
}

//venta
venderProducto('disco de freno', 5);
venderProducto('bateria', 25);
venderProducto('neumaticos', 2); 

aplicarDescuento(10);

//inventario final
console.log('Inventario final:', inventarioProductos);
