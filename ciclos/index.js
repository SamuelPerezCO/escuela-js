/*
// Operadores de comparación
const a = 10
const b = 20
const c = "10"

a == b 


a == b 
a === c
a == c
a != b
a !== c
a > b
a <= b
a > c

estructuras de control - Estructura de if
if(let === algo) {
    código 
}else {

}

if(let === algo) {
    código 
}else if{
    código
}else {

}



let nombre = "Nico";

if (nombre == "Diego"){
    console.log("Hola Diego")
}else if (nombre == "Nico"){
    console.log("Hola Nico")
}else {
    console.log("Nombre no encontrado")
}

switch(expresion){
    case valor1:
        // código a ejecutar
        break;
    case valor2:
        // código a ejecutar
        break;
    default:
        // código
}

*/

let expr = "Uvas";

switch(expr) {
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo")
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $43 el kilo")
        break;
    case "Plátanos":
        console.log("EL plátano esta en $30 el kilo")
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $25 pesos el kilo")
        break;
    default:
        console.log(`Lo siento, no contamos con ${expr}`)
}

console.log("¿Hay algo mas que desees?");