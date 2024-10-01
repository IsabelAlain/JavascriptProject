let num = 15
let index = 1

while(index <= 10){
    console.log(num*index)
    index++
}

//Print all the odd numbers between 1 to 50

let odd = 1
//let i = 0

while(odd < 50){
    console.log(odd)
    odd = odd + 2
    //odd = odd + i
    //i = i + 2
}

let num1 = 342145
let total = 0

while(num1 > 0){

    let rem = num1%10
    num1 = parseInt(num1/10)
    total = total + rem
}
console.log('Total is ' + total)

let num2 = 342145
let reverse = 0

while(num2 > 0){

    let rem1 = num2%10
    num2 = parseInt(num2/10)
    reverse = (reverse*10) + rem1
}
console.log('The reverse number is: ' + reverse)

//For Loop//

for(let i = 1; i <= 20; i++){
    console.log(i)
}
console.log('End of For Loop')

//For Each Loop//

let names = ['Diane', 'Isabel', 'Berna']

for(let n in names){
    console.log(names[n])
}
console.log('End of For Each Loop')

names.forEach(n => {
    console.log(n)
})
console.log('End of For Each Loop')