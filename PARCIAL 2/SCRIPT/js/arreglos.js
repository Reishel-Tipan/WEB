/* *****************************************
*                ARREGLOS
********************************************/

//formas de declarar un arreglo
const array = [1, 2, 3, 4, 5]; //forma 1 la utilizada mas comun
const array1 = new Array(1, 2, 3, 4, 5);
const array2 = Array.of[1, 2, 3, 4, 5];

let numeros1 = [1, 2, 3, 4, 5];
let colores = ["Rojo", "Azul", "Verde", "Amarilo", "Negro"];
let vacio = [];
let conjunto = [{ nombre: "Ricardo", apellido: "Vargas" }, { color: "Rojo" }];

let videojuego = [
    "Super",
    "Super hero",
    "Donkey Kong",
];
console.log(videojuego[3]);

/*let arreglosCosas = [
    true,
    123,
    "Hola",
    1 + 2,
    function (),
    () => [],
    [a: 1],
    ["Hola", "mundo"],
];
console.log({ arreglosCosas });
console.log(arreglosCosas[3]);*/


//map
//transformar los elementos de un arreglo
let numeros = [1, 2, 3, 4, 5];
let cuadrados = numeros.map(num => num * num);
console.log((cuadrados));

//filter
//filtrar lo datos de un arreglo
let numerosPares = [1, 2, 3, 4, 5];
let pares = numerosPares.filter(num => num % 2 == 0);
console.log((pares));

//reduce
//reduce los datos de un arreglo
let numerosReduce = [1, 2, 3, 4, 15, 6, 7, 8, 9, 10];
let maximo = numerosReduce.reduce((acumulador, num) => (num > acumulador ? num : acumulador), numerosReduce[0]);
console.log((maximo));

//ventajas
//son idales para trabaar con transformaciones y manipulaciones complejas
//permiten un estilo de programacion funcional mas pimpio y facil de usar

//desventajas
//agregar nuevos elementos

//push() agregar uno o mas elementos dal final de un array
let agregar = [1, 2, 3];
agregar.push(4); //agrega el numero 4 al final del array
console.log(agregar);

let a = ['uno', 'dos', 'tres'];
a.push('cuarto');
console.log(a);

//unshift agrega uno o mas elementos al principio del array
let add = [1, 2, 3];
add.unshift(0); //agrega el 0 al principio del array
console.log(add);

//splice() puede agregar o eliminar elementos de cualquier parte dentro del array
//este metodo es muy versatil
let z = [1, 2, 3];
z.splice(1, 0, 4); //agrega el numero 4 en la posicion 1, sin eliminar los elementos, 0= no se alimina el dato
console.log(z);


//Modificar elementos dentro de un array

//se puede modificar los elementos directamente
//a traves de su indice y modificarlo

let m = [1, 2, 3];
m[1] = 5;
console.log(m);

//si deseamos modificar el arreglo de forma inmutable, se puede utilizar el metodo map()
//para crear un nuevo arreglo con los valores modificados.

let modificar = [1, 2, 3];
let nuevoModificardo = modificar.map(num => num === 2 ? 5 : num); //cambiar el valor 2 por 5
console.log(nuevoModificardo);


//Eliminar eleemntos dentro de un array

//pop() elimina el ultimo elemnto del array
let e = [1, 2, 3];
e.pop();
console.log(e);

//shift() elimina el primer elemento de un array
let num = [1, 2, 3];
num.shift();
console.log(num);

//splice() para poder eliminar elementos en cualquier posicion
let s = [1, 2, 3]
s.splice(1, 1);
console.log(s);

