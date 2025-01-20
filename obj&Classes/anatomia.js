/**
 * Estrucutura de datos
 * 
 * key / value
 * 
 * objeto {
 *  propiedad: valor,
 *  propiedad: valor,
 *  propiedad: valor
 * 
 *  metodos()
 * }
 * 
 */

const persona = {
    nombre : "Jhon",
    edad: 30,
    direccion: {
        calle: "Av Insurgentes 187",
        cuidad: "CDMX"
    },
    saludar(){
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    },
}

console.log(persona)
persona.saludar()

persona.telefono = "555-555-5555"

console.log(persona.telefono)

persona.despedir = () => {
    console.log("Adios")
}

persona.despedir()

delete persona.telefono;

delete persona.despedir;