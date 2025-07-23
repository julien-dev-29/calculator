const dom = (() => {
    const displayElement = document.getElementById('display')
    var displayNumber = ""
    const clear = () => {
        displayElement.textContent = "0"
    }

    const populateDisplay = () => {
        displayElement.textContent = displayNumber
    }

    const isDisplayEmpty = () => {
        if (displayElement.textContent === "0") {
            return true
        }
    }

    const getDisplayNumber = () => {
        return displayNumber
    }

    const setDisplayNumber = (number) => {
        displayNumber = number
        populateDisplay()
    }

    const appendDisplayNumber = (number) => {
        displayNumber += number
        populateDisplay()
    }

    const initDisplayNumber = () => {
        displayNumber = ""
    }

    return {
        initDisplayNumber,
        appendDisplayNumber,
        setDisplayNumber,
        populateDisplay,
        getDisplayNumber,
        isDisplayEmpty,
        clear
    }
})()

export default dom