import Calculator from "./calculator.js"
import type CalculatorType from "./calculator.js"
const numberButtons: NodeListOf<Element> = document.querySelectorAll(".number")
const operationButtons: NodeListOf<Element> = document.querySelectorAll(".operation")
const equalButton: HTMLButtonElement | null = document.querySelector(".equal")
const deleteButton: HTMLButtonElement | null = document.querySelector(".delete")
const clearButton: HTMLButtonElement | null = document.querySelector(".clear")
const previousElement: HTMLDivElement | null = document.querySelector(".previousOperand")
const currentElement: HTMLDivElement | null = document.querySelector(".currentOperand")
const calculator: CalculatorType = new Calculator(previousElement!, currentElement!)

numberButtons.forEach((button) => button.addEventListener('click', () => {
    calculator.appendNumber(button.textContent)
    calculator.updateDisplay()
}))

operationButtons.forEach((button) => button.addEventListener('click', () => {
    calculator.chooseOperation(button.textContent)
    calculator.updateDisplay()
}))

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

equalButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

window.addEventListener('keypress', (e) => {
    console.log(e);
    
    const regexNumber = /[0-9.]/g
    const regexOperator = /[\/*-+]/g
    if (e.key.match(regexNumber))
        calculator.appendNumber(e.key)
    else if (e.key.match(regexOperator))
        calculator.chooseOperation(e.key)
    else if (e.key === "c")
        calculator.clear()
    else if (e.key === "d")
        calculator.delete()
    else if (e.key === "Enter")
        calculator.compute()
    calculator.updateDisplay()
})
