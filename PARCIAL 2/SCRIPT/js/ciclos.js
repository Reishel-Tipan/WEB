//CICLOS

//for
const heroes = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];

console.log("********For tradicional********");
for (i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

//itera propiedades de un objeto o los indices de un arreglo
console.log("********For in********");
for (let i in heroes) {
    console.log(heroes[i]);
}

//itera los valores directamente de un iterable(array, cadenas, etc.)
console.log("********For of********");
for (let heroe of heroes) {
    console.log(heroe);
}

//resumen
//se usa for tradicional o clasico, cuando se neceista el control total del indica
//se usa el el for...in para iterar las propiedades de un objeto
//for...of para iterar los valores de un iterable(arrary, cadenas de tecto(string), map,set,nodelist,etc...)

//continue, break
for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 == 0) {
        //continue; //ir a la siguiente iteracion
        break; //rompe el ciclo del bucle
    }
    console.log(contador);
}

//while
const carros = ['Mazda', 'Audi', 'Ferrari', 'BMW'];

let i = 0;

/*while (i < carros.length) {
    console.log(carros[i]);
    i++;
}

console.warn('Usando continue');
while (carros[i]) {
    if (i == 1) {
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}*/
