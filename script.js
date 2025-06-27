let nb1 = ''
let nb2 = ''
let operator = ''
let isSecondNb = false
let isSecondOperator = false
const displayElement = document.querySelector('.display')

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
 * @param {PointerEvent} e 
 * @returns 
 */
function display(e) {

    if (e.target.dataset["key"] === "=") {
        let nbA = parseInt(nb1)
        let nbB = parseInt(nb2)
        let result = displayElement.textContent = operate(operator, nbA, nbB)
        clear()
        return result
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
 * Set the current number
 */
function switchNumber() {
    isSecondNb = !isSecondNb
}

/**
 * Set the operator
 * 
 * @param {PointerEvent} e 
 */
function getOperator(e) {
    if (operator.length > 0) {
        
    }
    operator = e.target.textContent
    switchNumber()
}

/**
 * Reset the variables nb1, nb2, operator
 */
function clear() {
    nb1 = ''
    nb2 = ''
    operator = ''
}

document.querySelector('.clear').addEventListener('click', () => {
    displayElement.textContent = 0
    clear()
})
let digits = document.querySelectorAll('.digit')
let operators = document.querySelectorAll('.operator')
let btn = document.querySelector('#btn').addEventListener('click', display)
Array.from(digits).map(item => item.addEventListener('click', display))
Array.from(operators).map(item => item.addEventListener('click', getOperator))
