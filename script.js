var currentNumber = ""
var operator = ""
var firstNumber = ""
var secondNumber = ""
const displayElement = document.getElementById('display')

// Inputs:
document.getElementById('btn').addEventListener('click', operate)
document.querySelectorAll('.digit')
    .forEach(item => item.addEventListener('click', populateDisplay))
document.querySelectorAll('.operator')
    .forEach(item => item.addEventListener('click', setOperator))

/**
 * 
 * 
 * @param {PointerEvent} e 
 */
function populateDisplay(e) {
    if (displayElement.textContent === "0") {
        currentNumber = e.target.textContent
        displayElement.textContent = currentNumber
    } else {
        currentNumber += e.target.textContent
        displayElement.textContent = currentNumber
    }
}

/**
 * 
 */
function setOperator() {
    
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
