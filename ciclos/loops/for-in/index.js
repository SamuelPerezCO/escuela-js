/*

for in  ---> objectos

propiedades = valor

array , string

item

for (variable in objecto){
    código 
}

*/

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
};

for (fruta in listaDeCompras){
    console.log(fruta)
}

for (fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}

for (fruta of listaDeCompras){
    console.log(fruta)
}