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
    calculator.handleAddNumber(button.textContent)
}))

operationButtons.forEach((button) => button.addEventListener('click', () => {
    calculator.handleSetOperator(button.textContent)
}))

deleteButton.addEventListener('click', () => {
    calculator.handleDelete()
})

clearButton.addEventListener('click', () => {
    calculator.clear()
})

equalButton.addEventListener('click', () => {
    calculator.handleEqual()
})

window.addEventListener('keypress', (e) => {
    console.log(e);

    console.log(e.key);
    const regexNumber = /[0-9 .]/g
    const regexOperator = /[\/*-+]/g
    if (e.key.match(regexNumber))
        calculator.handleAddNumber(e.key)
    else if (e.key.match(regexOperator))
        calculator.handleSetOperator(e.key)
    else if (e.key === "c")
        calculator.clear()
    else if (e.key === "d")
        calculator.handleDelete()
    else if (e.key === "Enter")
        calculator.handleEqual()
})
