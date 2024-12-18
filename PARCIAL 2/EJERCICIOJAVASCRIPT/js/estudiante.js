var estudiantes = [
    { nombre: "Reishel Tipan", calificaciones: [14, 12, 10] },
    { nombre: "Jairo Bonilla", calificaciones: [18, 20, 19] },
    { nombre: "Sebastian Lasso", calificaciones: [8, 7, 6] },
    { nombre: "Stefy Diaz", calificaciones: [15, 13, 14] },
    { nombre: "Smith Hidalgo", calificaciones: [9, 10, 0] },
    { nombre: "Laura Barrera", calificaciones: [11, 12, 13] },
    { nombre: "Sofia Cuadrado", calificaciones: [19, 18, 20] },
    { nombre: "Carlos Teran", calificaciones: [7, 6, 5] },
    { nombre: "Marta Tipan", calificaciones: [10, 11, 12] },
    { nombre: "Diego Casignia", calificaciones: [13, 14, 12] }
];

function agregarCalificacion(nombre, nuevaCalificacion) {
    for (var i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nombre === nombre) {
            var calificaciones = estudiantes[i].calificaciones;
            calificaciones[calificaciones.length] = nuevaCalificacion;
            break;
        }
    }
}

function calcularPromedio(calificaciones) {
    var suma = 0;
    for (var i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma / calificaciones.length;
}

function clasificarPromedios() {
    for (var i = 0; i < estudiantes.length; i++) {
        var promedio = calcularPromedio(estudiantes[i].calificaciones);
        if (promedio >= 16)
            estudiantes[i].clasificacion = "Excelente";
        else if (promedio >= 12)
            estudiantes[i].clasificacion = "Bueno";
        else if (promedio >= 8)
            estudiantes[i].clasificacion = "Aprobado";
        else
            estudiantes[i].clasificacion = "Reprobado";
    }
}

function calcularEstadistica() {
    for (var i = 0; i < estudiantes.length; i++) {
        var calificaciones = estudiantes[i].calificaciones;

        estudiantes[i].promedio = calcularPromedio(calificaciones);

        var maximo = calificaciones[0];
        var minimo = calificaciones[0];

        for (var j = 1; j < calificaciones.length; j++) {
            if (calificaciones[j] > maximo) {
                maximo = calificaciones[j];
            }
            if (calificaciones[j] < minimo) {
                minimo = calificaciones[j];
            }
        }
        estudiantes[i].maximo = maximo;
        estudiantes[i].minimo = minimo;
    }
}

function encontrarExtremos() {
    var peorPromedio = estudiantes[0].promedio;
    var mejorPromedio = estudiantes[0].promedio;
    var estudiantePeor = estudiantes[0];
    var estudianteMejor = estudiantes[0];

    for (var i = 1; i < estudiantes.length; i++) {
        if (estudiantes[i].promedio < peorPromedio) {
            peorPromedio = estudiantes[i].promedio;
            estudiantePeor = estudiantes[i];
        }
        if (estudiantes[i].promedio > mejorPromedio) {
            mejorPromedio = estudiantes[i].promedio;
            estudianteMejor = estudiantes[i];
        }
    }
    console.log("Estudiante con el peor promedio:", estudiantePeor.nombre, "Promedio:", peorPromedio);
    console.log("Estudiante con el mejor promedio:", estudianteMejor.nombre, "Promedio:", mejorPromedio);
}

function mostrarResultados() {
    for (var i = 0; i < estudiantes.length; i++) {
        console.log("-------------------------------");
        console.log("" + estudiantes[i].nombre + ":");
        console.log(" Clasificación: " + estudiantes[i].clasificacion);
        console.log(" Promedio: " + estudiantes[i].promedio);
        console.log(" Calificación más alta: " + estudiantes[i].maximo);
        console.log(" Calificación más baja: " + estudiantes[i].minimo);
    }
    console.log("-------------------------------");
}

function mostrarMejorPeorPromedio() {
    var peorPromedio = estudiantes[0];
    var mejorPromedio = estudiantes[0];

    for (var i = 1; i < estudiantes.length; i++) {
        if (estudiantes[i].promedio < peorPromedio.promedio) {
            peorPromedio = estudiantes[i];
        }
        if (estudiantes[i].promedio > mejorPromedio.promedio) {
            mejorPromedio = estudiantes[i];
        }
    }
    console.log(
        "El estudiante con el peor promedio es " + peorPromedio.nombre + " con un promedio de " + peorPromedio.promedio + ""
    );
    console.log(
        "El estudiante con el mejor promedio es " + mejorPromedio.nombre + " con un promedio de " + mejorPromedio.promedio + ""
    );
}

agregarCalificacion("Reishel Tipan", 17);
agregarCalificacion("Carlos Teran", 15);
clasificarPromedios();
calcularEstadistica();
mostrarResultados();
mostrarMejorPeorPromedio();

