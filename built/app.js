import Calculator from "./calculator.js";
var numberButtons = document.querySelectorAll(".number");
var operationButtons = document.querySelectorAll(".operation");
var equalButton = document.querySelector(".equal");
var deleteButton = document.querySelector(".delete");
var clearButton = document.querySelector(".clear");
var previousElement = document.querySelector(".previousOperand");
var currentElement = document.querySelector(".currentOperand");
var calculator = new Calculator(previousElement, currentElement);
numberButtons.forEach(function (button) { return button.addEventListener('click', function () {
    calculator.appendNumber(button.textContent);
    console.log(button);
}); });
operationButtons.forEach(function (button) { return button.addEventListener('click', function () {
    calculator.setOperation(button.textContent);
}); });
deleteButton.addEventListener('click', function () {
    console.log("delete");
    calculator.delete();
});
