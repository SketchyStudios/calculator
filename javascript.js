



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



allClear.addEventListener("click" , clear)
deleteButton.addEventListener("click", deleteNumber)


numberButtons.forEach((button) => {
    button.addEventListener("click", () => appendNumber(button.textContent))
})

operationButtons.forEach((button) => {
    button.addEventListener("click", () => setOperation(button.textContent))
} )



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




function operate (operater , number1, number2) {
    if (operationButtons === "+") {
        return addition()
    }

    else if (operationButtons === "-") {
        return subtraction()
    }

    else if (operationButtons === "*") {
        return multiplication()
    }

    else if (operationButtons === "/") {
        return division()
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