/**
 * CLOSURE: Funcion que tiene acceso a variables de un ámbito externo,
 * incluso después de que esa funcion haya terminado de ejecutarse.
 * 
 * Ámbito léxio: cada vez que se declara una funcion,
 * crea su propio ambito lexico y puede acceder a las variables
 * dentro de ese ámbito y a las variables en ámbitos superiores.
 */

function outerFunction() {
    let outerVariable = "I am from outer function"
    function innerFunctioin ( ) {
        console.log(outerVariable)
    }

    return innerFunctioin
}

const closureExample = outerFunction()
closureExample()

function createCounter() {
    let count = 0

    return function(){
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

function outer() {
    let message = "Hello , "

    function inner(name){
        console.log(message + name)
    }

    return inner
}

const closureA = outer()
const closureB = outer()

closureA("Alicia")
closureA("bob")