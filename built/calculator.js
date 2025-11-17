export default class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.clear();
    }
    clear() {
        this.previousOperand.textContent = "";
        this.currentOperand.textContent = "0";
        this.firstNumber = "";
        this.secondNumber = "";
        this.operatorIsSet = false;
        this.resultIsDisplayedByEqual = false;
        this.resultIsDisplayedByOperator = false;
    }
    handleDelete() {
        if (this.currentOperand.textContent.length > 1)
            this.currentOperand.textContent = this.currentOperand.textContent.slice(0, this.currentOperand.textContent.length - 1);
        else
            this.currentOperand.textContent = "0";
    }
    handleAddNumber(number) {
        if (this.operatorIsSet || this.resultIsDisplayedByOperator)
            this.appendNumberToSecondNumber(number);
        else if (this.resultIsDisplayedByEqual) {
            this.appendNumberTofirstNumber(number);
            this.previousOperand.textContent = "";
        }
        else
            this.appendNumberTofirstNumber(number);
    }
    appendNumberTofirstNumber(number) {
        if (this.currentOperand.textContent === "0" || this.currentOperand.textContent === "" || this.resultIsDisplayedByEqual) {
            this.secondNumber = "";
            this.firstNumber = number;
            this.currentOperand.textContent = this.firstNumber;
            this.resultIsDisplayedByEqual = false;
        }
        else {
            this.firstNumber += number;
            this.currentOperand.textContent = this.firstNumber;
        }
    }
    appendNumberToSecondNumber(number) {
        debugger;
        if (this.secondNumber.length > 0) {
            this.secondNumber += number;
            this.currentOperand.textContent = this.secondNumber;
        }
        else {
            this.secondNumber = number;
            this.currentOperand.textContent = this.secondNumber;
            this.resultIsDisplayedByOperator = false;
        }
    }
    // appendNumberByDefault(number: string) {
    //   this.operatorIsSet ?
    //     this.appendNumberWithDifferentPositions(number, 'secondNumber')
    //     :
    //     this.appendNumberWithDifferentPositions(number, 'firstNumber')
    // }
    // appendNumberWhenResultIsDisplayedByEqual(number: string) {
    //   this.clear()
    //   this.firstNumber = number
    //   this.currentOperand.textContent = this.firstNumber
    // }
    // appendNumberWithDifferentPositions(number: string, numberPosition: 'firstNumber' | 'secondNumber') {
    //   if (this.currentOperand.textContent === "0" || this.currentOperand.textContent === "" || this.resultIsDisplayedByOperator) {
    //     this[numberPosition] = number
    //     this.currentOperand.textContent = this[numberPosition]
    //     this.resultIsDisplayedByOperator = false
    //   } else {
    //     this[numberPosition] += number
    //     this.currentOperand.textContent = this[numberPosition]
    //   }
    // }
    handleSetOperator(operator) {
        if (this.resultIsDisplayedByOperator)
            this.operator = operator;
        else if (this.operatorIsSet)
            this.setOperatorWhenAnOperatorIsAlreadySet(operator);
        else
            this.setOperatorByDefault(operator);
    }
    setOperatorByDefault(operator) {
        this.operator = operator;
        this.previousOperand.textContent = this.currentOperand.textContent + this.operator;
        this.operatorIsSet = true;
    }
    setOperatorWhenAnOperatorIsAlreadySet(operator) {
        this.firstNumber = this.operate().toString();
        this.resultIsDisplayedByOperator = true;
        this.currentOperand.textContent = this.firstNumber;
        this.operator = operator;
        this.previousOperand.textContent = this.currentOperand.textContent + this.operator;
    }
    handleEqual() {
        this.currentOperand.textContent = this.operate().toString();
        this.resultIsDisplayedByEqual = true;
        this.operatorIsSet = false;
        this.previousOperand.textContent += this.secondNumber + "=";
    }
    operate() {
        var a = Number(this.firstNumber);
        var b = Number(this.secondNumber);
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
