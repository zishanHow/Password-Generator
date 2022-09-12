const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")
let suportMessage = document.querySelector(".support-message")

passOne.textContent = "See password one"
passTwo.textContent = "See password two"
suportMessage.textContent = "Never use an insecure password again"

let passwordLength = 15

function copyToClipboard(text) {
    passOne = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}

/*  === generating random characters ===  */
function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}


/*  === added 15 random characters together, after getting the character from gerRandomCharacter() */
function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}


/*  === calling the button to generate new password ===  */
function passwordGenerator() {
    passOne.textContent = generateRandomPassword()
    passTwo.textContent = generateRandomPassword()
}