import { power } from './FunctionsExamples.js'
//Function Def using arrow
let add = (num1, num2) => num1 + num2
let sub = (num1, num2) => num1 - num2

let square = (num) => num * num
let welcome = () => "Welcome to JS"
let greeting = (name) => "Hello " + name
// power = (num1, num2) => Math.pow(num1, num2)

//Function Call

console.log(add(6,5))
console.log(sub(6,5))
console.log(square(5,25))
console.log(welcome())
console.log(greeting('Isabel'))
console.log(power(2,4))