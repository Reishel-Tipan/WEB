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
                console.log(`Venta confirmada de ${cantidad} productos de ${nombreProducto}`);
                return;
            } else {
                console.log(`ERROR!! No hay suficiente stock de ${nombreProducto}`);
                return;
            }
        }
    }
    console.log(`ERROR!! El producto ${nombreProducto} no existe en la tienda`);
}

function aplicarDescuento(porcentaje) {
    for (let clave in inventarioProductos) {
        let descuento = (inventarioProductos[clave].precio * porcentaje) / 100;
        inventarioProductos[clave].precio -= descuento;
    }
    console.log(`Se aplicó un descuento del ${porcentaje}% a todos los productos`);
}


//venta
venderProducto('disco de freno', 5);
venderProducto('bateria', 25);
venderProducto('neumaticos', 2); 

//descuento a los productos
aplicarDescuento(10);

//inventario final
console.log(inventarioProductos);
