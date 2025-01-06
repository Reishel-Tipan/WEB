/*********************************************
 *              FUNCIONES
 *********************************************/

function calcularPromedio(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new Error("Todos los parámetros deben ser números en calcularPromedio.");
    }
    return (a + b + c) / 3;
}

const determinarMayor = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Todos los parámetros deben ser números en determinarMayor.");
    }
    return a > b ? a : b;
};

const esPar = (numero) => {
    if (typeof numero !== 'number') {
        throw new Error("El parámetro debe ser un número en esPar.");
    }
    return numero % 2 === 0;
};

(function () {
    try {
        // Parámetros para las funciones
        const numero1 = 10;
        const numero2 = 15;
        const numero3 = 20;

        const valor1 = 45;
        const valor2 = 32;

        const numeroPar = 42;

        const numeros = [numero1, numero2, numero3];

        // Llamada a calcularPromedio
        const resultadoPromedio = calcularPromedio(numero1, numero2, numero3);
        console.log("Promedio de", numeros, ":", resultadoPromedio);

        // Llamada a determinarMayor
        const mayor = determinarMayor(valor1, valor2);
        console.log(`El mayor entre ${valor1} y ${valor2} es:`, mayor);

        // Llamada a esPar
        const par = esPar(numeroPar);
        console.log(`¿El número ${numeroPar} es par?`, par);

        // Ciclo for...of
        console.log("********For of********");
        for (let numero of numeros) {
            console.log("Número:", numero);
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
})();
