import Calculator from "./calculator.js";
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const equalButton = document.querySelector(".equal");
const deleteButton = document.querySelector(".delete");
const clearButton = document.querySelector(".clear");
const previousElement = document.querySelector(".previousOperand");
const currentElement = document.querySelector(".currentOperand");
const calculator = new Calculator(previousElement, currentElement);
numberButtons.forEach((button) => button.addEventListener('click', () => {
    calculator.handleAddNumber(button.textContent);
}));
operationButtons.forEach((button) => button.addEventListener('click', () => {
    calculator.handleSetOperator(button.textContent);
}));
deleteButton.addEventListener('click', () => {
    calculator.handleDelete();
});
clearButton.addEventListener('click', () => {
    calculator.clear();
});
equalButton.addEventListener('click', () => {
    calculator.handleEqual();
});
window.addEventListener('keypress', (e) => {
    console.log(e);
    console.log(e.key);
    const regexNumber = /[0-9 .]/g;
    const regexOperator = /[\/*-+]/g;
    if (e.key.match(regexNumber))
        calculator.handleAddNumber(e.key);
    else if (e.key.match(regexOperator))
        calculator.handleSetOperator(e.key);
    else if (e.key === "c")
        calculator.clear();
    else if (e.key === "d")
        calculator.handleDelete();
    else if (e.key === "Enter")
        calculator.handleEqual();
});
