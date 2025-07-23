import domModule from "./dom.js";
import calculatorModule from "./calculator.js";

export const handler = (() => {
    var calculator = calculatorModule.calculator
    var isResultDisplay = false
    var isDecimal = false
    document.addEventListener('click', handleClick)
    /**
     * 
     * @param {PointerEvent} e 
     */
    function handleClick(e) {
        /**
         * @type {HTMLElement}
         */
        const target = e.target
        switch (target.dataset['type']) {

            case "digit":
                const value = target.dataset['value']
                if (isResultDisplay) {
                    calculator.init()
                    isResultDisplay = false
                    return domModule.setDisplayNumber(value)
                }
                if (domModule.isDisplayEmpty()) {
                    domModule.setDisplayNumber(value)
                }
                else {
                    domModule.appendDisplayNumber(value)
                }
                break;

            case "operator":
                isDecimal = false
                if (isResultDisplay) {
                    calculator.operator = target.textContent
                    calculator.firstNumber = String(domModule.getDisplayNumber())
                    domModule.initDisplayNumber()
                    isResultDisplay = false
                }
                if (calculator.isOperator()) {

                    calculator.secondNumber = domModule.getDisplayNumber()
                    if (calculator.isReadyToOperate()) {
                        domModule.setDisplayNumber(calculator.operate())
                        calculator.firstNumber = String(domModule.getDisplayNumber())
                        domModule.initDisplayNumber()
                    }
                    calculator.operator = target.textContent
                } else {
                    calculator.operator = target.textContent
                    calculator.firstNumber = domModule.getDisplayNumber()
                    domModule.initDisplayNumber()
                }
                break

            case "equal":
                isDecimal = false
                calculator.secondNumber = domModule.getDisplayNumber()
                if (calculator.isReadyToOperate()) {
                    domModule.setDisplayNumber(calculator.operate())
                    isResultDisplay = true
                }
                calculator.init()
                break

            case "clear":
                domModule.clear()
                calculator.init()
                break

            case "backspace":
                break

            case "decimal":
                if (isDecimal) return
                if (isResultDisplay) {
                    calculator.init()
                    isResultDisplay = false
                    return domModule.setDisplayNumber(target.dataset['value'])
                }
                domModule.appendDisplayNumber(target.dataset['value'])
                isDecimal = true
                break
            default:
                break;
        }
    }
})()