export function EvenOrOdd(num1){
    if(num1 % 2 === 0){
        console.log('The number is even')
    }else{
        console.log('The number is odd')
    }
}

export function PrimeNumber(num1){
    for(let i = 2; i < num1; i++){
        if(num1 % i == 0){
            return false
        }else{
            return true
        }
    }
}