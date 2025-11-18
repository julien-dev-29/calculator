export default class Calculator {
    previousOperandElement;
    currentOperandElement;
    currentOperand;
    previousOperand;
    operator;
    resultDisplayByEqual;
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
    }
    clear() {
        this.previousOperandElement.textContent = "";
        this.currentOperandElement.textContent = "0";
        this.currentOperand = "";
        this.previousOperand = "";
        this.operator = "";
        this.resultDisplayByEqual = false;
    }
    handleDelete() {
        if (this.currentOperand.length >= 1) {
            this.currentOperand = this.currentOperand.slice(0, this.currentOperand.length - 1);
            this.currentOperandElement.textContent = this.currentOperand;
            if (this.currentOperand.length === 0)
                this.currentOperandElement.textContent = "0";
        }
    }
    handleAddNumber(number) {
        if (number === "." && this.currentOperandElement.textContent.includes('.'))
            return;
        this.resultDisplayByEqual ? this.currentOperand = number : this.currentOperand += number;
        this.currentOperandElement.textContent = this.currentOperand;
        this.previousOperandElement.textContent = this.previousOperand + this.operator;
        this.resultDisplayByEqual = false;
    }
    handleSetOperator(operator) {
        if (this.operator.length > 0) {
            if (this.currentOperand === "")
                return this.operator = operator;
            this.currentOperandElement.textContent = this.operate().toString();
            this.previousOperandElement.textContent += this.currentOperand + "=";
            this.currentOperand = this.currentOperandElement.textContent;
            this.resultDisplayByEqual = false;
        }
        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }
    handleEqual() {
        if (this.resultDisplayByEqual)
            return;
        if (this.currentOperand.length === 0 || this.previousOperand.length === 0 || this.operator.length === 0)
            return;
        if (parseFloat(this.currentOperand) === 0) {
            this.currentOperandElement.textContent = "Error";
        }
        else {
            this.currentOperandElement.textContent = this.operate().toString();
            this.previousOperandElement.textContent += this.currentOperand + "=";
            this.currentOperand = this.currentOperandElement.textContent;
            this.previousOperand = "";
            this.operator = "";
            this.resultDisplayByEqual = true;
        }
    }
    operate() {
        var a = Number(this.previousOperand);
        var b = Number(this.currentOperand);
        switch (this.operator) {
            case "+":
                return add(a, b);
            case "-":
                return substract(a, b);
            case "*":
                return multiply(a, b);
            case "/":
                return divide(a, b).toFixed(6);
            default:
                break;
        }
    }
}
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
