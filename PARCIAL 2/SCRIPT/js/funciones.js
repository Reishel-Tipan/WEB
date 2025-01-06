/*********************************************
 *              FUNCIONES
 *********************************************/

//Funciones declaradas

function miFunction(a, b) {
    console.log("La suma es: " + (a + b))
}
miFunction(3, 4);

//utilizar return para funciones

function retornaValor(a, b) {
    return a + b;
}
let resultado = retornaValor(2, 4);

console.log(resultado);

//funciones de tipo expresion
//Declaracion de una funcion de tipo expresion

let sumar = function (a, b) { return (a + b) };

resultado = sumar(1, 2);

console.log(resultado);

//funciones de tipo self-invoking
//funciones que llaman a si mismos
//funciones anonimas
//Notas: se pueden utilizar estas funciones cuando se carga un programa
//no es muy comun, pero se puede utilizar en ciertos casos

(function (a, b) {
    console.log("Ejecutar la funcion: " + (a + b));
})(3, 4);

function total(x, y, z) {
    console.log(arguments.length); //cuenta los valores dentro de la funcion
    return x + y + z;
}
total(1, 2, 3);


//funciones tipo flecha en javascript (arrow function)

const multiplicar = (x, y) => x * y;
console.log(multiplicar(3, 6));

const cuadrado = x => x * x;
console.log(cuadrado(4));

//funciones anonimas
//es una funcion sin nombre, comunmente usado como argumentos para otras funciones

setTimeout(function () {
    console.log('Funcion anonima');
}, 1000);

//operaciones dentro de funciones flechas
const operaciones = { sumar: (a, b) => a + b };

console.log(operaciones.sumar?.(1, 2));
console.log(operaciones.restar?.(3, 2));

//