/**
 *  estructura de datos
 * 
 *  key / value
 * 
 * objeto {
 *  propiedad : valor,
 *  propiedad : valor,
 *  propiedad : valor
 *  Metodos
 *  }
 * 
 * 
 */

const persona = {
    nombre: "John",
    edad:30,
    direccion: {
        calle: "Av Insurgente 187",
        ciudad: "CDMX",
    },
    saludar(){
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    }
}

