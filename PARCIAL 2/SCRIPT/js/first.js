var nombre1;
var edad;
var altura;

nombre1 = "Reishel";
edad = 21;
altura = 1.80;

console.log("El nombre de la persona es: " + nombre1);
console.log("La edad de la persona es: " + edad);
console.log("La altura de la persona es: " + altura);

//var par declarar una variable global
//let para delcarar una variable local o tambien una variable bloque
//const declara una variable constante es decir su valor no va a cambiar

//if marca un bloque de instrucciones que se ejecutan si una condicion se cumple
//switch marca un bloque de instrucciones que se ejecuta si una condicion se cumple
//for marca una condicion de instrucciones que se ejecutan varias veces
//while marca una condicion de instrucciones que se ejecutan varias veces
//function marca un bloque de instruucciones que se ejecutan cuando se llama
//try se ejecuta cuando no se produce un error
//catch se ejecuta cuando se produce un error
//return se ejecura cuando una condicion se cumple, ademas de retornar un valor

//TIPOS DE DATOS
//tipo de dato string
var nombre1 = "Reishel";
console.log(nombre1);

//tipo de dato numerico
var edad = 20;
console.log(edad);

//tipo de dato Object object
var objeto = {
    nombre: 'Dayelin', //comillas simples o dobles se puede utilizar 
    edad: 22,
    altura: 1.60
}
console.log(objeto);

//tipo de dato Typeof
var var1 = "Juan";
var var2 = false;
var var3 = BigInt(123);
var var4 = [1, 2, 3];

console.log(var1);
console.log(typeof var1);

console.log(var2);
console.log(typeof var2);

console.log(var3);
console.log(typeof var3);

console.log(var4);
console.log(typeof var4);

//tipo de dato boolean)true, false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//tipo function
function saludar() { }
console.log(saludar);
console.log(typeof saludar);

//tipo symbol
var simbolo = Symbol();
console.log(simbolo);
console.log(typeof simbolo);

//tipo clase es una funcion
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);

//tipo undefined
var variable;
console.log(variable);
console.log(typeof variable);

var a;
console.log(a);
console.log(typeof a);

//tipo de dato null
var variable = null;
console.log(variable);
console.log(typeof variable);

//tipo de datos de tipo arreglo en JavaScript
var autos = ["Mercedes Benz", "Volvo", "BMW"];
console.log(autos);
console.log(typeof autos);

//tipo de datos con cadenas vacias
var variable = "";
console.log(variable);
console.log(typeof variable);

//reglas de nombres de variables en JavaScript
let nombreCompleto;
let nombreCompleta;

//formas correctas de declarar una variable
var alNombreCompleto;
var _nombreCompleto;
var $nombreCompleto;

//formas correctas de declarar una variable
//var alNombreCompleto;
//var #nombreCompleto;
//var $nombreCompleto;
//no esta permitido ingresar estos tipos de variable

//operaciones aritmeticas
//suma
/*let x = 10;
let y = 8;
let z = x + y;
console.log(z);

//resta
let x = 10;
let y = 8;
let z = x - y;
console.log(z);


//multiplicacion
let x = 10;
let y = 8;
let z = x * y;
console.log(z);

//division
let x = 10;
let y = 8;
let z = x / y;
console.log(z);


//modulo
let x = 10;
let y = 8;
let z = x % y;
console.log(z);


// pre incremento
let d = 12;
let e = 4;
e = ++d;
console.log(d);
console.log(e);

//post incremento
let d = 12;
let e = 4;
e = d++;
console.log(d);
console.log(e);
*/

//decremento
let d = 12;
let e = 4;
e = d--;
console.log(d);
console.log(e);

//simbolos
var m = 10;
var n = 5;
var o = m == n;
var p = m != n;
var q = m > n;
var r = m < n;
var s = m >= n;
var t = m <= n;

let comparacion1 = 10;
let comparacion2 = "10";

let comparacion3 = comparacion1 == comparacion2;
console.log(comparacion3);

let comparacion4 = comparacion1 === comparacion2;
console.log(comparacion4);

console.log(o);
console.log(p);
console.log(q);
console.log(r);
console.log(s);
console.log(t);


//precedencia 
let a1 = 6; b1 = 7; c1 = 8;
let dato = (a1 + b1) * c1;
console.log(dato);

let a2 = 6; b2 = 7; c2 = 8; d2 = 9;
let dato2 = a2 * (b2 + c2);
console.log(dato2);


let dato3 = a2 * b2 + c2 / d2;
console.log(dato3);

//operadores de asignacion
let b = 3;
let valorD = 3;

b += 3;
console.log(b);

valorD -= 3;
console.log(valorD);

let numero = 10;
if (numero % 2 == 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}

//determinar si una persona es mayor o no de edad
let persona1 = 18;
if (persona1 >= 18) {
    console.log("La persona es mayor de edad");
} else {
    console.log("La persona es menor de edad");
}

let i = 10;

let valMin = 12; valorMax = 12;

//OPERADOR AND ==> &&
if (i >= valMin && i <= valorMax) {
    console.log("El valor esta dentro del rango");
} else {
    console.log("El valor esta fuera del rango");
}

//OPERADOR OR ==> ||
if (i >= valMin || i <= valorMax) {
    console.log("El valor esta dentro del rango");
} else {
    console.log("El valor esta fuera del rango");
}

//Operadores ternarios
let resultado = (i >= valMin && i <= valorMax) ? "El valor esta dentro del rango" : "El valor esta fuera del rango";


//conversion
let minumero = "7";

console.log(typeof minumero);

let edad1 = parseInt(minumero);
let edad2 = Number(minumero);

if (edad1 >= 18) {
    console.log("Puede votar");
}
else {
    console.log("No puede votar");
}

//parseInt convierte un valor en numero entero(sin decimales)
//Number convierte un valor en un numero (puede ser entero o flotante)

console.log(parseInt("42px")); //42 solo la parte numerica
console.log(parseInt(3.1415)); //convierte solo la parte entera
console.log(parseInt("hola")); // existe un valor numero para convertir

console.log(Number("42px")); //no se puede convertir toda la cadena
console.log(Number(3.1415)); //convierte el numero en un flotante
console.log(Number("hola")); // no hay numeros en la cadena

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

