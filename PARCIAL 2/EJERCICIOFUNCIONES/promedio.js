function calcularPromedio(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new Error("Los parámetros deben ser números!");
    }
    return (a + b + c) / 3;
}

const determinarMayor = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Los parámetros deben ser números!.");
    }
    return a > b ? a : b;
};

const esPar = (numero) => {
    if (typeof numero !== 'number') {
        throw new Error("El parámetro debe ser números!");
    }
    return numero % 2 === 0;
};

(function () {
    try {
        const numero1 = 10;
        const numero2 = 15;
        const numero3 = 20;

        const valor1 = 83;
        const valor2 = 31;

        const numeroPar = 42;

        const numeros = [numero1, numero2, numero3];

        const resultadoPromedio = calcularPromedio(numero1, numero2, numero3);
        console.log("Promedio: " + resultadoPromedio);

        const mayor = determinarMayor(valor1, valor2);
        console.log(`El mayor entre ${valor1} y ${valor2} es:`, mayor);

        const par = esPar(numeroPar);
        console.log('El número es par? ', par);

    } catch (error) {
        console.error("Error:", error.message);
    }
})();
