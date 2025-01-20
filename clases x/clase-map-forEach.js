// Methods that iterate over an array
// Methods that DO NOT modify the original array (Inmutability).

 // map()
 const numbers = [1, 2, 3, 4, 5]
 const squaredNumbers = numbers.map(num => num * num)

 console.log(numbers)
 console.log(squaredNumbers)

 // forEach()

 const colors = ['red' , 'pink' , 'blue']
 const iterateColors = colors.forEach(color => console.log(color))

 console.log(colors)
 console.log(iterateColors)

 // Exercise: Fahrenheit to Celsius convertion
 
 const tempereturasInFahrenheit = [32, 68, 95, 104, 212]
 
 const temperaturasInCelsius = tempereturasInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))
 
 console.log('Temperatures In Fahrenheit: ' , tempereturasInFahrenheit)
 console.log('Temperatures In Celsius: ', temperaturasInCelsius)
 
 
 // Exercise: Sum of Elements in an Array

 const newNumbers = [1, 2, 3, 4, 5]

 let sum = 0

 newNumbers.forEach(number => {
    sum += number
 })

 console.log('Array of Numbers:' , newNumbers)
 console.log('Sum of Numbers: ' , sum)