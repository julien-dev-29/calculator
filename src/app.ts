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
    console.log(button);

}))

operationButtons.forEach((button) => button.addEventListener('click', () => {
    calculator.setOperation(button.textContent)
}))

deleteButton.addEventListener('click', () => {
    console.log("delete");

    calculator.delete()
})