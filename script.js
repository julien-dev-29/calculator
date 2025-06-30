let nb1 = ''
let nb2 = ''
let operator = ''
let isDecimalSeparator = false
let isSecondNb = false
let isSecondOperator = false
let isResultDisplayed = false
const displayElement = document.querySelector('.display')

/**
 * INPUTS
 */
document.querySelectorAll('[data-number]')
    .forEach(number => number.addEventListener('click', appendNumber))
document.querySelectorAll('[data-operator]')
    .forEach(number => number.addEventListener('click', setOperator))
document.getElementById('clear').addEventListener('click', clear)
document.getElementById('btn').addEventListener('click', evaluate)
document.getElementById('delete').addEventListener('click', deleteNumber)


/**
 * 
 * @returns 
 */
function evaluate() {
    try {
        checkError()
        nb1 = Math.round(operate(operator, nb1, nb2) * 10000) / 10000
        nb2 = ""
        if (!isSecondOperator) {
            operator = ""
            isResultDisplayed = true
        }
        isSecondOperator = false
        displayElement.textContent = nb1
    } catch (error) {
        displayElement.textContent = error.message
    }
}

/**
 * 
 */
function appendNumber(e) {
    if (isResultDisplayed) {
        clear()
        isResultDisplayed = false
    }
    if (isSecondNb) {
        if (displayElement.textContent === "0") {
            nb2 = e.target.textContent
            return displayElement.textContent = nb2
        }
        nb2 += e.target.textContent
        displayElement.textContent = nb2
    } else {
        if (displayElement.textContent === "0") {
            nb1 = e.target.textContent
            return displayElement.textContent = nb1
        }
        nb1 += e.target.textContent
        displayElement.textContent = nb1
    }
}

/**
 * 
 * @param {PointerEvent} e 
 */
function setOperator(e) {
    isSecondNb = true
    if (alreadyOperator()) {
        isSecondOperator = true
        if (nb2 === "") return operator = e.target.textContent
        evaluate()
    }
    if (isResultDisplayed) {
        isResultDisplayed = false
    }
    operator = e.target.textContent
}

function alreadyOperator() {
    console.log(operator.length);

    return operator.length > 0
}

/**
 * Si je n'ai pas entré le deuxieme nombre
 * ou si j'essaye de diviser par zero
 * 
 * @returns {String || null}
 */
function checkError() {
    if (nb2 === "") throw new Error("🤔")
    if (nb1 === "." || nb2 === ".") throw new Error("🤔")
    if (operator === "/" && nb2 === "0") throw new Error("Error")
}

/**
 * Reset the variables nb1, nb2, operator
 */
function clear() {
    isSecondNb = false
    displayElement.textContent = 0
    nb1 = ''
    nb2 = ''
    operator = ''
}

/**
 * Delete the last input
 * 
 * @returns {}
 */
function deleteNumber() {
    if (displayElement.textContent.length === 1) return displayElement.textContent = "0"
    displayElement.textContent = displayElement.textContent.split('').slice(0, -1).join('')
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

function operate(operator, a, b) {
    console.log(a + " => a");
    console.log(b + " => b");
    console.log(operator);

    a = Number(a)
    b = Number(b)
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

/**
 * 
 * @param {KeyboardEvent} e 
 */
function handleKeyEvents(e) {
    console.log(e.code);
    var digit = document.getElementById(e.code)
    digit.click()
}
