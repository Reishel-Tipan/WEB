let numero = 10;
if (numero == 1) {
    console.log("El numero es 1");
}
else if (numero == 2) {
    console.log("El numero es 2");
}
else {
    console.log("El numero no es ni 1 ni 2");
}

let mes = 12;
let estacion;

if (mes == 1 || mes == 2) {
    estacion = "Invierno"
}
else if (mes == 3 || mes == 4) {
    estacion = "Primavera"
}
else if (mes == 5 || mes == 6) {
    estacion = "Verano"
}
else if (mes == 7 || mes == 8) {
    estacion = "Otoño"
}
else {
    estacion = "No es un mes del año"
}
console.log(estacion)

//ejercicio: el calculo del hora del dia
/*
6am - 11am -> mañana buenos dias 
12pm - 19pm -> mañana buenos tardes 
20pm - 24pm -> mañana buenos noches
24pm - 5am -> mañana buenos dias 
*/
let horadia = 23;
let mensaje;
if (horadia >= 6 && horadia < 12) {
    mensaje = "Buenos dias";
}
else if (horadia >= 12 && horadia < 19) {
    mensaje = "Buenas tardes";
}
else if (horadia >= 19 && horadia < 24) {
    mensaje = "Buenas noches";
}
else if (horadia >= 0 && horadia < 6) {
    mensaje = "Durmiendo";
}
else {
    mensaje = "No es una hora del día"
}
console.log(mensaje);

//mejor visualizacion
if (horadia >= 6 && horadia < 12)
    mensaje = "Buenos dias";
else if (horadia >= 12 && horadia < 19)
    mensaje = "Buenas tardes";
else if (horadia >= 19 && horadia < 24)
    mensaje = "Buenas noches";
else if (horadia >= 0 && horadia < 6)
    mensaje = "Durmiendo";
else
    mensaje = "No es una hora del día"


//sentencia switch
let mes1 = 8;
let estacion1 = 'Estacion desconocida';

switch(mes1){
    case 1:
    case 2:
        estacion1="Invierno";
        break;
    case 3:
    case 4:
        estacion1="Primavera";
        break;
    case 5:
    case 6:
        estacion1="Verano";
        break;
    case 7:
    case 8:
        estacion1="Otoño";
    default:
        estacion="No es un mes del año";
        break;
}
console.log(estacion1);

