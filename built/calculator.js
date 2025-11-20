export default class Calculator {
    previousTextElement;
    currentOperandTextElement;
    currentOperand;
    previousOperand;
    operation;
    constructor(previousTextElement, currentOperandTextElement) {
        this.previousTextElement = previousTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    clear() {
        this.currentOperand = "0";
        this.previousOperand = "";
        this.operation = undefined;
        this.updateDisplay();
    }
    delete() {
        if (this.currentOperand.length === 1)
            return this.currentOperand = "0";
        this.currentOperand = this.currentOperand.slice(0, -1);
    }
    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(number))
            return;
        if (this.currentOperand === "0")
            return this.currentOperand = number;
        if (this.resultIsDisplay) {
            this.previousOperand = this.currentOperand;
            this.currentOperand = number;
            return this.resultIsDisplay = false;
        }
        if (this.operation && this.previousOperand === "") {
            this.previousOperand = this.currentOperand;
            return this.currentOperand = number;
        }
        this.currentOperand += number;
    }
    chooseOperation(operation) {
        if (this.operation) {
            this.compute();
            this.resultIsDisplay = false;
        }
        this.operation = operation;
    }
    compute() {
        if (this.previousOperand.length === 0 || this.currentOperand.length === 0 || this.operation.length === 0)
            return;
        let computation;
        var a = Number(this.previousOperand);
        var b = Number(this.currentOperand);
        switch (this.operation) {
            case "+":
                computation = a + b;
                break;
            case "-":
                computation = a - b;
                break;
            case "*":
                computation = a * b;
                break;
            case "/":
                b === 0 ?
                    computation = "Error"
                    :
                        computation = Number((a / b).toFixed(6));
                break;
            default:
                break;
        }
        this.currentOperand = computation.toString();
        this.previousOperand = "";
        this.operation = undefined;
        this.resultIsDisplay = true;
    }
    updateDisplay() {
        this.currentOperandTextElement.textContent = this.currentOperand;
        if (this.previousOperand.length > 0 && this.operation)
            return this.previousTextElement.textContent = this.previousOperand + this.operation;
        this.previousTextElement.textContent = this.previousOperand;
    }
}
