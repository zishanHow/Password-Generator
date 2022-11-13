//   === characters for password === 
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]


const generatePassBtn = document.getElementById("generate-pass-btn")
const clearBtn = document.getElementById('clear-btn')

const displayPass1 = document.getElementById("display-pass1")
const displayPass2 = document.getElementById("display-pass2")

const copyDisplayPass1 = document.getElementById("copy-display-pass1")
const copyDisplayPass2 = document.getElementById("copy-display-pass2")

const rangeLetterEl = document.getElementById("range-letter")
const rangeNumEl = document.getElementById("range-num")
const rangeSymbolEl = document.getElementById("range-symbol")

const letterValue = document.getElementById("letter-value")
const numValue = document.getElementById("num-value")
const symbolValue = document.getElementById("symbol-value")

let randomLettersArr = [];
let randomNumbersArr = [];
let randomSymbolsArr = [];

let randomLettersStr = "";
let randomNumbersStr = "";
let randomSymbolsStr = "";

let lengthLetter;
let lengthNumber;
let lengthSymbol;

// showing value of range to the dom
if (lengthLetter) {
    letterValue.innerHTML = lengthLetter
} else {
    lengthLetter = letterValue.innerHTML = rangeLetterEl.value
}

if (lengthNumber) {
    numValue.innerHTML = lengthNumber
} else {
    lengthNumber = numValue.innerHTML = rangeNumEl.value
}

if (lengthSymbol) {
    symbolValue.innerHTML = lengthSymbol
} else {
    lengthSymbol = symbolValue.innerHTML = rangeSymbolEl.value
}

// rangeLetterEl.oninput = () => {
//     lengthLetter = this.value
//     return letterValue.innerHTML = lengthLetter
// }

rangeLetterEl.addEventListener('input', e => {
    lengthLetter = letterValue.innerHTML = e.target.value
})

rangeNumEl.addEventListener('input', e =>
    lengthNumber = numValue.innerHTML = e.target.value)

rangeSymbolEl.addEventListener('input', e =>
    lengthSymbol = symbolValue.innerHTML = e.target.value)


function generateRandomLetters() {
    for (let i = 0; i < lengthLetter; i++) {
        let RanLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
        randomLettersArr.push(RanLetter)
        randomLettersStr += randomLettersArr[i]
    }
    return randomLettersStr
}

function generateRandomNumbers() {
    for (let i = 0; i < lengthNumber; i++) {
        let ranNumber = numbers[Math.floor(Math.random() * numbers.length)]
        randomNumbersArr.push(ranNumber)
        randomNumbersStr += randomNumbersArr[i]
    }
    return randomNumbersStr
}

function generateRandomSymbols() {
    for (let i = 0; i < lengthSymbol; i++) {
        let ranSymbol = symbols[Math.floor(Math.random() * symbols.length)]
        randomSymbolsArr.push(ranSymbol)
        randomSymbolsStr += randomSymbolsArr[i]
    }
    return randomSymbolsStr
}


function shufflePassCharacter(password) {
    let passwordArr = password.split("");// The password is a String and is converted to an array

    passwordArr.sort(() => 0.5 - Math.random())// return a random value each time the function is called

    password = passwordArr.join("")// Convert the array into a string

    return password
}


function reset() {
    randomLettersArr = []
    randomNumbersArr = []
    randomSymbolsArr = []

    randomLettersStr = ""
    randomNumbersStr = ""
    randomSymbolsStr = ""
}

let showPass1;
let showPass2;

function generatePass() {
    let password1 = generateRandomLetters() + generateRandomNumbers() + generateRandomSymbols()
    reset()
    let password2 = generateRandomLetters() + generateRandomNumbers() + generateRandomSymbols()
    reset()

    showPass1 = shufflePassCharacter(password1)
    showPass2 = shufflePassCharacter(password2)

    displayPass1.innerHTML = showPass1
    reset()
    displayPass2.innerHTML = showPass2
    reset()
}


function clearDisplayPassword() {
    displayPass1.innerHTML = ""
    displayPass2.innerHTML = ""
    lengthLetter = 0
    lengthNumber = 0
    lengthSymbol = 0

    rangeLetterEl.value = 0
    rangeNumEl.value = 0
    rangeSymbolEl.value = 0

    letterValue.innerHTML = rangeLetterEl.value
    numValue.innerHTML = rangeNumEl.value
    symbolValue.innerHTML = rangeSymbolEl.value

    reset()
}

function copyPass1() {
    navigator.clipboard.writeText(displayPass1.innerHTML)

    displayPass1.innerHTML = `<P>Copied</p>`
    setTimeout(() => {
        displayPass1.innerHTML = showPass1
    }, 500)
}
function copyPass2() {
    navigator.clipboard.writeText(displayPass2.innerHTML)

    displayPass2.innerHTML = `<P>Copied</p>`
    setTimeout(() => {
        displayPass2.innerHTML = showPass1
    }, 500)
}

generatePassBtn.addEventListener("click", generatePass)
clearBtn.addEventListener("click", clearDisplayPassword)

copyDisplayPass1.addEventListener("click", copyPass1)
copyDisplayPass2.addEventListener("click", copyPass2)