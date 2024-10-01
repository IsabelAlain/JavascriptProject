let fName = 'Isabel'
let lName = 'Alain'

let fullName = fName.concat(lName)

console.log('Full name is ' + fName + ' ' + lName)
console.log(fullName)

console.log('Total characters in the String are ' + fullName.length)
console.log('Uppercase is ' + fullName.toUpperCase())
console.log('Lowercase is ' + fullName.toLowerCase())

let Str1 = "Clean World Green World"
console.log(Str1.replace('World', 'India'))
console.log(Str1.replace(/World/g, 'India'))