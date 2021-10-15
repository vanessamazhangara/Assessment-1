
function verifyPswrd(word) {
    if (word.length >= 10){
        console.log('success')
    } else {
        console.log('password is not accepted')
    }
}

const userPswrd = 'mazhangara'
console.log(verifyPswrd(userPswrd))