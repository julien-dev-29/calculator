export default interface CalculatorType {
  previousOperand: HTMLDivElement
  currentOperand: HTMLDivElement
}

export default class Calculator {
  previousOperand: HTMLDivElement
  currentOperand: HTMLDivElement
  constructor(previousOperand: HTMLDivElement, currentOperand: HTMLDivElement) {
    this.previousOperand = previousOperand
    this.currentOperand = currentOperand
    this.init()
  }
  init() {
    this.currentOperand.textContent = "0"
  }
  clear() { }
  delete() {
    if (this.currentOperand.textContent.length > 1) {
      this.currentOperand.textContent = this.currentOperand.textContent.slice(0, this.currentOperand.textContent.length - 1)
    } else {
      this.currentOperand.textContent = "0"
    }
  }
  appendNumber(number: string) {
    if (this.currentOperand.textContent === "0") {
      this.currentOperand.textContent = number
    } else {
      this.currentOperand.textContent += number
      console.log(this.currentOperand);
    }

  }
  setOperation(operation: string) {
    this.previousOperand.textContent = this.currentOperand.textContent + operation
    this.currentOperand.textContent = "0"
  }
  equal() { }
}

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

function add(a: number, b: number) {
  return a + b;
}

function substract(a: number, b: number) {
  return a - b;
}

function multiply(a: number, b: number) {
  return a * b;
}

function divide(a: number, b: number) {
  return a / b;
}
