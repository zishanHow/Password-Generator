const passOne = document.getElementById("pass-one")
const passTwo = document.getElementById("pass-two")
const suportMessage = document.querySelector(".support-message")
const passLength = document.getElementById("pass-length")

passOne.textContent = "👀 👀"
passTwo.textContent = "👀 👀"
suportMessage.textContent = "Never use an insecure password again"

//   === characters for password === 
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]

/*  === generating random characters ===  */
function getRandomCharacter() {
    let useNumber = document.getElementById("use-number").checked
    let useSymbol = document.getElementById("use-symbol").checked

    if (useNumber && useSymbol) {
        let tempArray = alphabet.concat(numbers).concat(symbols)
        let randomChar = Math.floor(Math.random() * tempArray.length)
        return tempArray[randomChar]

    } else if (useNumber) {
        let tempArray = alphabet.concat(numbers)
        let randomChar = Math.floor(Math.random() * tempArray.length)
        return tempArray[randomChar]

    } else if (useSymbol) {
        let tempArray = alphabet.concat(symbols)
        let randomChar = Math.floor(Math.random() * tempArray.length)
        return tempArray[randomChar]

    } else {
        let randomChar = Math.floor(Math.random() * alphabet.length)
        return alphabet[randomChar]
    }
}


/*  === stitching all the characters from getRandomCharacter() and rendering them out in the DOM */
function generateRandomPassword() {
    let length = passLength.value
    if (length > 5 && length < 19) {
        let randomPassword = ""
        for (let i = 0; i < length; i++) {
            randomPassword += getRandomCharacter()
        }
        return randomPassword
    } else if (length <= 5) {
        return "Too Short"

    } else if (length >= 19) {
        return "Too big"
    }
}

/*  === calling the button to generate new password ===  */
function passwordGenerator() {
    passOne.textContent = generateRandomPassword()
    passTwo.textContent = generateRandomPassword()
}

/* copy to clip board */
function copy() {
    let notice = document.getElementById('notice')
    navigator.clipboard.writeText(event.target.textContent)
    notice.style.color = 'white'

    setTimeout(() => {
        notice.style.color = '#1F2937'
    }, 500);
}