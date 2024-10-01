let str1 = 'mom'
let j = str1.length - 1
let result = true

// option -1

for(let i = 0; i < str1.length; i++){
    if (str1.charAt(i) != str1.charAt(j)) {
        result = false
        break
    }
    j--
}

console.log(result)

// options -2

let rev = ''
for(let i = str1.length -1 ; i >= 0; i--){

    rev = rev + str1.charAt(i) //lebasi
}

if(str1===rev){
    console.log('String is Palindrome')
}else{
    console.log('String is not Palindrome')
}

