//Inventario de una libreria
const inventarioProductos = {
    producto1: { nombre: 'Libro Romeo y Julieta', precio: 20, cantidad: 50, categoria: 'romance' },
    producto2: { nombre: 'Libro Ush ush', precio: 22, cantidad: 30, categoria: 'romance'},
    producto3: { nombre: 'Libro Pecados capitales', precio: 24, cantidad: 20, categoria: 'drama' },
    producto4: { nombre: 'Libro It', precio: 15, cantidad: 40, categoria: 'miedo'},
};

class inventario{
    constructor(nombre,precio,cantidad, categoria){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.categoria=categoria;
    }
}

function agregarProductos(nombre,precio,cantidad, categoria){
    add.nombre='';
    add.precio='';
    add.cantidad='';
    add.categoria='';
}

function listarProductosAscendente(precio){
    for(let clave in inventarioProductos){
        if(inventarioProductos[clave].precio>=precio){
            return precio; 
        }
        else if(inventarioProductos){
            inventarioProductos[clave].precio<=precio;
            return precio;
        }
        else{
            return precio;
        }
    }
}

function busquedaCategoria(categoria){
    for(let clave in inventarioProductos){
        if(inventarioProductos === categoria){
            console.log('/****Categoria encontrada****/');

        }
    }

}

class Venta{
    realizarVenta(nombreProducto,cantidad){

    }
}

function realizarVenta(nombreProducto, cantidad) {
    for (let clave in inventarioProductos) {
        if (inventarioProductos[clave].nombre === nombreProducto) {
            if (inventarioProductos[clave].cantidad >= cantidad) {
                inventarioProductos[clave].cantidad -= cantidad;
                console.log(`Venta confirmada de ${cantidad} ${nombreProducto}`);
                return;
            } else {
                console.log(`ERROR!! Cantidad insuficiente de ${nombreProducto}`);
                return;
            }
        }
    }
    console.log(`ERROR!! El producto ${nombreProducto} no existe en la tienda`);
}

function aplicarDescuento(categoria, porcentaje) {
    for (let clave in inventarioProductos) {
        let descuento = (inventarioProductos[clave].precio * porcentaje) / 100;
        inventarioProductos[clave].precio -= descuento;
    }
    console.log(`Se aplicó un descuento del ${porcentaje}% a todos los productos`);
}


//*****REPORTE ********/
aplicarDescuento('romance',25);

//ejempl de ventas realizadas
realizarVenta('Libro Romeo y Julieta', 2);
realizarVenta('Libro It', 2000);
realizarVenta('Libro Rapunzel', 1); 

//inventario al final ya que aquí se va actualizando despues de todas 
//las ventas realizadas
console.log(inventarioProductos);


