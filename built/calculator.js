var Calculator = /** @class */ (function () {
    function Calculator(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.init();
    }
    Calculator.prototype.init = function () {
        this.currentOperand.textContent = "0";
    };
    Calculator.prototype.clear = function () { };
    Calculator.prototype.delete = function () {
        if (this.currentOperand.textContent.length > 1) {
            this.currentOperand.textContent = this.currentOperand.textContent.slice(0, this.currentOperand.textContent.length - 1);
        }
        else {
            this.currentOperand.textContent = "0";
        }
    };
    Calculator.prototype.appendNumber = function (number) {
        if (this.currentOperand.textContent === "0") {
            this.currentOperand.textContent = number;
        }
        else {
            this.currentOperand.textContent += number;
            console.log(this.currentOperand);
        }
    };
    Calculator.prototype.setOperation = function (operation) {
        this.previousOperand.textContent = this.currentOperand.textContent + operation;
        this.currentOperand.textContent = "0";
    };
    Calculator.prototype.equal = function () { };
    return Calculator;
}());
export default Calculator;
// function operate() {
//   var a = Number(this.firstNumber);
//   var b = Number(this.secondNumber);
//   switch (this.operator) {
//     case "+":
//       return this.add(a, b);
//     case "-":
//       return this.substract(a, b);
//     case "*":
//       return this.multiply(a, b);
//     case "/":
//       return this.divide(a, b);
//     default:
//       break;
//   }
// }
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
