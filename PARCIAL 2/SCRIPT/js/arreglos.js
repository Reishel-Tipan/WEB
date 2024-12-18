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
let pares = numerosPares.filter(num => num % 2==0);
console.log((pares));

//reduce
//reduce los datos de un arreglo
let numerosReduce = [1, 2, 3, 4, 15,6,7,8,9,10];
let maximo = numerosReduce.reduce((acumulador,num)=>(num>acumulador?num:acumulador), numerosReduce[0]);
console.log((maximo));

//ventajas
//son idales para trabaar con transformaciones y manipulaciones complejas
//permiten un estilo de programacion funcional mas pimpio y facil de usar

//desventajas


