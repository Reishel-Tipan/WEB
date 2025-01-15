//Sistema de ventas en JS

//Creacion de la Clase Producto
class Producto {
    static contadorProductos = 0;
    //modificador static
    //se utiliza para acceder directamente a traves de la clase

    //los metodos o propiedades no requieren que se creen una unstancia de la clase
    //para ser utilizados
    //se accede directamente a traves de la clase

    constructor(nombre, precio, cantidad, categoria) {
        if (precio < 0) {
            throw new Error('ERROR!! El precio no puede ser negativo');
        }
        this._idproducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;
        this._categoria = categoria;
    }

    get idProducto() {
        return this._idproducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        if (precio < 0) {
            throw new Error('ERROR!! El precio no puede ser negativo');
        }
        this._precio = precio;
    }

    get cantidad() {
        return this._cantidad;
    }

    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(categoria) {
        this._categoria = categoria;
    }

    disminuirStock(cantidad) {
        if (this._cantidad >= cantidad) {
            this._cantidad -= cantidad;
        } else {
            throw new Error(`No hay suficiente stock de: ${this._nombre} :( `);
        }
    }

    toString() {
        return `idProducto: ${this._idproducto}, nombre: ${this._nombre}, precio: ${this._precio}, stock: ${this._cantidad}, categoria: ${this._categoria}`;
    }
}

//Creacion de la clase Orden
class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
         //this._contadorProductosAgregados=0;
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto, cantidad) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            try {
                producto.disminuirStock(cantidad);
                this._productos.push({ producto, cantidad });
            } catch (error) {
                console.log(error.message);
            }
        } else {
            console.log('No se puede agregar más productos a la orden');
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (const { producto, cantidad } of this._productos) {
            let precioProducto = producto.precio;
            if (producto.categoria === 'Mujer') {
                precioProducto *= 0.95; //descuento del 5% a la categria Mujer
            }
            totalVenta += precioProducto * cantidad;
        }
        return totalVenta;
    }

    calcularImpuestos() {
        return this.calcularTotal() * 0.16;
    }

    mostrarOrden() {
        let productosOrden = '';
        for (const { producto, cantidad } of this._productos) {
            productosOrden += `{${producto.toString()}, cantidad en la orden: ${cantidad}}`;
        }
        console.log(`Orden: ${this._idOrden}, Total: $${this.calcularTotal()}, Impuesto: $${this.calcularImpuestos()}, Productos:${productosOrden}`);
    }

    static listarProductosPorPrecioDesc(productos) {
        return productos.sort((a, b) => b.precio - a.precio);
    }
}


let producto1 = new Producto('Pantalon', 49, 100, 'Hombre');
let producto2 = new Producto('Vestido', 60, 250, 'Mujer');
let producto3 = new Producto('Zapatos', 50, 150, 'Mujer');
let producto4 = new Producto('Camisa oversize', 35, 200, 'Hombre');
console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);

let orden1 = new Orden();
orden1.agregarProducto(producto1, 2);
orden1.agregarProducto(producto2, 1);
orden1.mostrarOrden();

let orden2 = new Orden(); //crear un segundo objeto de tipo orden
orden2.agregarProducto(producto3, 3);
orden2.agregarProducto(producto2, 1);
orden2.mostrarOrden();

let orden3 = new Orden();
orden3.agregarProducto(producto4, 201);

//stock disminuir

//crear una propiedad categoria en la clase producto 
//los productos de la categoria Electronica debe tener un descuento del 10% al calcular el total de su venta

//implementar un metodo calcularImpuestos()
//listar Productos por precio Descendente

//asegurarse que los precios no pueden ser negativos al establecer en la clase Producto

let productos = [producto1, producto2, producto3, producto4];
let productosOrdenados = Orden.listarProductosPorPrecioDesc(productos);
console.log('Productos ordenados por precio descendente:');
console.log(productosOrdenados.map(producto => producto.toString()));

/*EJEMPLO
class Calculadora {
    //metodo estatico
    static sumar(a, b) {
        return a + b;
    }
}

//accdeso al metodo estatico directamente desde la clase
console.log(Calculadora.sumar(2, 3));

//no se puede acceder desde una instancia
const calc = new Calculadora();
//console.log(calc.sumar());

class Contador {
    static totalInstancias = 0;

    constructor() {
        Contador.totalInstancias++;
    }

    static mostrarInstancias() {
        return `Se han creado ${Contador.totalInstancias} instancias.`;
    }
}

const c1 = new Contador();
const c2 = new Contador();
const c3 = new Contador();

console.log(Contador.mostrarInstancias());//se han creado 2 instancias
*/
