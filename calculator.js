const calculator = (() => {
    class Calculator {
        constructor() {
            this.firstNumber = ""
            this.secondNumber = ""
            this.operator = ""
        }
        isOperator() {
            if (this.operator.length > 0) {
                return true
            }
        }
        isReadyToOperate() {
            if (this.operator.length > 0
                && this.firstNumber.length > 0
                && this.secondNumber.length > 0
            ) {
                return true
            }
        }

        init() {
            this.firstNumber = ""
            this.secondNumber = ""
            this.operator = ""
        }
        add(a, b) {
            return a + b
        }

        substract(a, b) {
            return a - b
        }

        multiply(a, b) {
            return a * b
        }

        divide(a, b) {
            return a / b
        }

        operate() {
            var a = Number(this.firstNumber)
            var b = Number(this.secondNumber)
            switch (this.operator) {

                case "+":
                    return this.add(a, b)

                case "-":
                    return this.substract(a, b)

                case "*":
                    return this.multiply(a, b)

                case "/":
                    return this.divide(a, b)
                default:
                    break;
            }
        }
    }
    const calculator = new Calculator()
    return {
        calculator
    }
})()

export default calculator