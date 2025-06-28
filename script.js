const { log } = require("console")

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
let digits = document.querySelectorAll('.digit')
let operators = document.querySelectorAll('.operator')
let btn = document.querySelector('#btn').addEventListener('click', handleEvents)
let clearButton = document.querySelector('.clear').addEventListener('click', handleEvents)
let backspaceButton = document.querySelector('.backspace').addEventListener('click', handleEvents)
Array.from(digits).map(item => item.addEventListener('click', handleEvents))
Array.from(operators).map(item => item.addEventListener('click', handleEvents))

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

function operate(operator, numberA, numberB) {

    switch (operator) {

        case "+":
            return add(numberA, numberB)

        case "-":
            return substract(numberA, numberB)

        case "*":
            return multiply(numberA, numberB)

        case "/":
            return divide(numberA, numberB)

        default:
            break;
    }
}

/**
 * Display the numbers, the result and the errors
 * 
 * @returns 
 */
function handleEvents(e) {
    switch (e.target.dataset["type"]) {

        case "=":
            displayResult()
            break

        case "digit":
            displayNumber(e)
            break

        case "operator":
            if (operator.length > 0) {
                isSecondOperator = true
                displayResult()
            }
            displayOperator(e)
            break

        case "backspace":
            backspace(e)
            break

        case "clear":
            clear()
            break
    }
}

/**
 * 
 * @returns 
 */
function displayResult() {
    try {
        checkError()
        let nbA = parseFloat(nb1)
        let nbB = parseFloat(nb2)
        nb1 = Math.round(operate(operator, nbA, nbB) * 100) / 100
        nb2 = ""
        if (!isSecondOperator) {
            operator = ""
            isResultDisplayed = true
            isDecimalSeparator = false
        }
        isSecondNb = false
        isSecondOperator = false
        displayElement.textContent = nb1
        document.getElementById(".").disabled = false
    } catch (error) {
        displayElement.textContent = error.message
    }
}


/**
 * 
 */
function displayNumber(e) {
    if (e.target.textContent === ".") {
        isDecimalSeparator = true
        /**
         * @type {HTMLButtonElement}
         */
        document.getElementById(".").disabled = true
    }
    console.log();
    
    if (isResultDisplayed) {
        clear()
        isResultDisplayed = false
    }
    if (isSecondNb) {
        nb2 += e.target.textContent
        displayElement.textContent = nb2
    } else {
        nb1 += e.target.textContent
        displayElement.textContent = nb1
    }
}

/**
 * 
 * @param {PointerEvent} e 
 */
function displayOperator(e) {
    if (isResultDisplayed) {
        isResultDisplayed = false
    }
    operator = e.target.textContent
    isSecondNb = true
    document.getElementById(".").disabled = false
}

/**
 * Si je n'ai pas entré le deuxieme nombre
 * ou si j'essaye de diviser par zero
 * 
 * @returns {String || null}
 */
function checkError() {
    if (nb2 === "") throw new Error("🤔")
    if (operator === "/" && nb2 === "0")
        throw new Error("Error")
}

/**
 * Reset the variables nb1, nb2, operator
 */
function clear() {
    displayElement.textContent = 0
    nb1 = ''
    nb2 = ''
    operator = ''
    isSecondNb = false
    isSecondOperator = false
    isResultDisplayed = false
}

function backspace(e) {
    console.log("yolo");

    nb1.split('').pop()
    nb2.split('').pop()
    displayNumber(e)
}


