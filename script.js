var currentNumber = ""
var operator = ""
var firstNumber = ""
var secondNumber = ""
const displayElement = document.getElementById('display')
const decimalButton = document.getElementById('decimal')
var resultDisplayed = false
var nbEqualHit = 0

window.addEventListener('keydown', function (e) {
    document.querySelector(`[data-code="${e.code}"]`).click()
})

// Inputs:1
/**
 * Operate with variables
 */
document.getElementById('btn').addEventListener('click', populateDisplayWithResult)

/**
 * Clear
 */
document.getElementById('clear').addEventListener('click', clear)

/**
 * Populate the display
 */
document.querySelectorAll('.digit')
    .forEach(item => item.addEventListener('click', populateDisplay))

/**
 * Set the operator
 */
document.querySelectorAll('.operator')
    .forEach(item => item.addEventListener('click', setOperator))

/**
 * 
 */
document.getElementById('delete').addEventListener('click', backspace)

/**
 * 
 */
function clear() {
    currentNumber = ""
    firstNumber = ""
    secondNumber = ""
    operator = ""
    resultDisplayed = false
    displayElement.textContent = "0"
}

function backspace() {
    if (displayElement.textContent[displayElement.textContent.length - 1] === ".") {
        console.log(decimalButton.disabled);
        decimalButton.disabled = false
    }
    currentNumber = displayElement.textContent.slice(0, -1)
    if (displayElement.textContent.length === 1) {
        currentNumber = "0"
    }
    displayElement.textContent = currentNumber
}
/**
 * 
 * @param {PointerEvent} e 
 */
function populateDisplay(e) {
    if (e.target.textContent === ".") {
        decimalButton.disabled = true
    }
    if (displayElement.textContent === "0" || currentNumber === "" || resultDisplayed) {
        resultDisplayed = false
        currentNumber = e.target.textContent
        displayElement.textContent = currentNumber
    } else {
        currentNumber += e.target.textContent
        displayElement.textContent = currentNumber
    }
}

/**
 * 
 * @returns 
 */
function populateDisplayWithResult() {
    secondNumber = currentNumber
    if (firstNumber === "" && secondNumber === "" || operator === "") return
    if (secondNumber === "0" && operator === "/") {
        clear()
        return displayElement.textContent = "Divide by 0 Error"
    }
    displayElement.textContent = Math.round(operate() * 10000) / 10000
    resultDisplayed = true
    firstNumber = displayElement.textContent
    decimalButton.disabled = false
}

/**
 * 
 * @param {PointerEvent} e 
 */
function setOperator(e) {
    decimalButton.disabled = false
    if (resultDisplayed) {
        operator = e.target.textContent
        return currentNumber = ""
    }
    if (operator.length > 0) {
        populateDisplayWithResult()
    } else {
        firstNumber = currentNumber
    }
    operator = e.target.textContent
    currentNumber = ""
}

function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate() {
    var a = Number(firstNumber)
    var b = Number(secondNumber)
    switch (operator) {

        case "+":
            return add(a, b)

        case "-":
            return substract(a, b)

        case "*":
            return multiply(a, b)

        case "/":
            return divide(a, b)

        default:
            break;
    }
}
