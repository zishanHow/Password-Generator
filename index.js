const passOne = document.getElementById("pass-one")
const passTwo = document.getElementById("pass-two")
const suportMessage = document.querySelector(".support-message")
const passLength = document.getElementById("pass-length")

passOne.textContent = "👀 👀"
passTwo.textContent = "👀 👀"
suportMessage.textContent = "Never use an insecure password again"

//   === characters for password === 
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]

/*  === generating random characters ===  */
function getRandomCharacter() {
    let useNumber = document.getElementById("use-number").checked
    let useSymbol = document.getElementById("use-symbol").checked

    if (useNumber && useSymbol) {
        const arr = [alphabet, numbers, symbols]
        //randomly select an array
        let randomChar = Math.floor(Math.random() * arr.length)
        //now select a random Item from that array
        let randomCharIndex = Math.floor(Math.random() * arr[randomChar].length)

        return arr[randomChar][randomCharIndex]
    } else if(useNumber) {
        const arr = [alphabet, numbers]
        let randomChar = Math.floor(Math.random() * arr.length)
        let randomCharIndex = Math.floor(Math.random() * arr[randomChar].length)

        return arr[randomChar][randomCharIndex]
    } else if (useSymbol) {
        const arr = [alphabet, symbols]
        let randomChar = Math.floor(Math.random() * arr.length)
        let randomCharIndex = Math.floor(Math.random() * arr[randomChar].length)

        return arr[randomChar][randomCharIndex]
    } else {
        const arr = [alphabet]
        let randomChar = Math.floor(Math.random() * arr.length)
        let randomCharIndex = Math.floor(Math.random() * arr[randomChar].length)

        return arr[randomChar][randomCharIndex]
    }
}

/*  === stitching all the characters from getRandomCharacter() and rendering it out on the DOM */
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