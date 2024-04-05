



const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const allClear = document.querySelector("[data-all-clear]")
const deleteButton = document.querySelector("[data-delete]")
const equals = document.querySelector("[data-equals]")
const previousEntry = document.querySelector("[data-previous-op]")
const currentEntry = document.querySelector("[data-current-op]")

let number1 = ''
let number2 = ''
let operator = ''
let shouldResetScreen = false

let firstOperator = ''
let secondOperator = ''
let currentOperation = null


window.addEventListener("keydown", handleKeyboardInput)
allClear.addEventListener("click" , clear)
deleteButton.addEventListener("click", deleteNumber)
equals.addEventListener("click", evaluate)


numberButtons.forEach((button) => {
    button.addEventListener("click", () => appendNumber(button.textContent))
})

operationButtons.forEach((button) => {
    button.addEventListener("click", () => setOperation(button.textContent))
} )


function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber (e.key)
    if(e.key === ".") appendPoint()
    if (e.key === "=" || e.key === "Enter") evaluate
    if(e.key === "backspace") deleteNumber()
    if (e.key === "Escape") clear()
    if (e.ley === "+" || e.key === "-" || e.key === "*" || e.key === "/")
        setOperation(convertOperator(e.key))
}

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
  }




function appendNumber(number) {
    if(currentEntry.textContent === "0" || shouldResetScreen)
    resetScreen()
currentEntry.textContent += number
}

function resetScreen(){
    currentEntry.textContent = ""
    shouldResetScreen = false;
}


function clear() {
    currentEntry.textContent = "0"
    previousEntry.textContent = ""
    firstOperator = ''
    secondOperator = ''
    currentOperation = null
}

function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if(currentEntry.textContent === '')
        currentEntry.textContent = "0"
    if (currentEntry.textContent.includes('.')) return
    currentEntry.textContent += "."
}

function deleteNumber() {
    currentEntry.textContent = currentEntry.textContent
      .toString()
      .slice(0, -1)
  }

function setOperation(operater) {
    
    firstOperator = currentEntry.textContent
    currentOperation = operater
    previousEntry.textContent = `${firstOperator} ${currentOperation}`
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === "/" && currentEntry.textContent === "0") {
        alert ("You cant divide by 0 silly!")
        return
    }
    secondOperator = currentEntry.textContent
    currentEntry.textContent = roundResult(
        operate(currentOperation, firstOperator, secondOperator)
    )
    previousEntry.textContent = `${firstOperator} ${currentOperation} ${secondOperator} =`
    currentOperation = null
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function operate (operater , number1, number2) {
number1 = Number(number1)
number2 = Number(number2)

switch (operater) { 

    case "+": {
        return addition(number1, number2)
    }

    case "-": {
        return subtraction(number1, number2)
    }

     case "*": {
        return multiplication(number1, number2)
    }

    case "/": {
        if (secondOperator === 0) return null
        else return division(number1, number2)
        
    }
} 
}



function addition (number1, number2) {
    return number1 + number2
}

function subtraction (number1, number2){
    return number1 - number2
}

function division (number1, number2){
    return number1 / number2
}

function multiplication (number1, number2){
    return number1 * number2
}



console.log(addition(number1, number2))