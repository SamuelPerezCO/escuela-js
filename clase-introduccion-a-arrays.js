//How to create an array

//1. new Array() or Array()

const fruits = Array('apple' , 'banana', 'orange')
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)


const number = Array(1 , 2 , 3 , 4 , 5)
console.log(number)

// Array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer' , 'tennis' , 'rugby']
console.log(sports)

const recipeIngredients = [
    'flour',
    true,
    2,
    {
        ingredient:'Milk' , quantity: '1 cup'
    },
    false
]
console.log(recipeIngredients)

// Accesing array elements

const firstFruit = fruits[0]
console.log(firstFruit)

// length property

const numberOfFruits = fruits.length
console.log(numberOfFruits)