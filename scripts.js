function add(a, b) {


return parseFloat(a) + parseFloat(b)
}

function subtract(a, b) {
	
  return parseFloat(a) - parseFloat(b)
}

function multiply(...args) {
    let product = args.reduce((currentTotal, num) => {
        return currentTotal * num
    });
    return product
}

function divide(a, b) {
    if (b == 0) {
        return "Not today"
    }
    
    return a / b
}

let divisionCounter = 0
let multiplicationCounter = 0
let subtractionCounter = 0
let plusCounter = 0
let operator = ""
let prevNum = ""
let nextNum = ""

function operate(num1, operator, num2) {
//calls one of the above functions on the numbers
let result = ""
if (operator == "add") {
   result = add(num1, num2)
} else if (operator == "subtract") {
    result = subtract(num1, num2)
} else if (operator == "multiply") {
    result = multiply(num1, num2)
} else if (operator == "divide") {
    result = divide(num1, num2)
} else {
    result = "error"
}
    return result
    
}

//display value = I need to click the number buttons and have the button I click populate the display value.
//need an event listener for onclick

let displayValue = ""
let runningValue = ""
let display = document.querySelector('.display-output');
let running = document.querySelector('.running-output');

let button0 = document.querySelector('#btn0');
button0.addEventListener('click', function() {
    display.textContent += "0"
    displayValue += "0"
});

let button1 = document.querySelector('#btn1');
button1.addEventListener('click', function() {
    display.textContent += "1"
    displayValue += "1"
});

let button2 = document.querySelector('#btn2');
button2.addEventListener('click', function() {
    display.textContent += "2"
    displayValue += "2"
});

let button3 = document.querySelector('#btn3');
button3.addEventListener('click', function() {
    display.textContent += "3"
    displayValue += "3"
});

let button4 = document.querySelector('#btn4');
button4.addEventListener('click', function() {
    display.textContent += "4"
    displayValue += "4"
});

let button5 = document.querySelector('#btn5');
button5.addEventListener('click', function() {
    display.textContent += "5"
    displayValue += "5"
});

let button6 = document.querySelector('#btn6');
button6.addEventListener('click', function() {
    display.textContent += "6"
    displayValue += "6"
});

let button7 = document.querySelector('#btn7');
button7.addEventListener('click', function() {
    display.textContent += "7"
    displayValue += "7"
});

let button8 = document.querySelector('#btn8');
button8.addEventListener('click', function() {
    display.textContent += "8"
    displayValue += "8"
});

let button9 = document.querySelector('#btn9');
button9.addEventListener('click', function() {
    display.textContent += "9"
    displayValue += "9"
});

let buttonac = document.querySelector('#btnac');
buttonac.addEventListener('click', function() {
   display.textContent = ""
   running.textContent = ""
   
    displayValue = ""
    plusCounter = 0
    subtractionCounter = 0
    divisionCounter = 0
    multiplicationCounter = 0
});

let buttonDecimal = document.querySelector('#btndecimal')
buttonDecimal.addEventListener('click', function() {
    if (displayValue.includes('.')) {
        return
    }   else { 
        display.textContent += '.'
        displayValue += '.' }
    });

    //when user presses "+" button.
    //displayValue becomes the first number in the operation, the next number
    //is whatever numbers the user clicks next. The equals sign will store the second
    //number and then do the appropriate calculation.
let addition = document.querySelector('#plus');
addition.addEventListener('click', function() {
    //check if there is a nextnum
    plusCounter += 1
    if (subtractionCounter >= 1 || multiplicationCounter >= 1 || divisionCounter >= 1 || plusCounter > 1 ) {
        operate(prevNum, operator, displayValue)
        display.textContent = operate(prevNum, operator, displayValue)
        displayValue = operate(prevNum, operator, displayValue)
        prevNum = operate(prevNum, operator, displayValue)
    }
    operator = "add"
    prevNum = displayValue //5
    running.textContent = displayValue + " +"
    display.textContent = ''
    displayValue = ""
    
    
    
       
})


let equalsSign = document.querySelector('#equals');
equalsSign.addEventListener('click', function() {
    nextNum = displayValue
    operate(prevNum, operator, nextNum)
    display.textContent = operate(prevNum, operator, nextNum)
    running.textContent = ''
    displayValue = operate(prevNum, operator, nextNum)
    plusCounter = 0
    subtractionCounter = 0
    multiplicationCounter = 0
    divisionCounter = 0

})

let subtraction = document.querySelector('#subtract');
subtraction.addEventListener('click', function() {
    subtractionCounter += 1
    if (plusCounter >= 1 || multiplicationCounter >=1 || divisionCounter >= 1 || subtractionCounter > 1) {
        operate(prevNum, operator, displayValue)
        display.textContent = operate(prevNum, operator, displayValue)
        displayValue = operate(prevNum, operator, displayValue)
        prevNum = operate(prevNum, operator, displayValue)
    }

    operator = "subtract"
    prevNum = displayValue
    running.textContent = displayValue + " -"
    display.textContent = ''
    displayValue = ""
})

let multiplication = document.querySelector('#multiply');
multiplication.addEventListener('click', function() {
    multiplicationCounter += 1
    if (multiplicationCounter > 1 || subtractionCounter >= 1 || plusCounter >= 1 || divisionCounter >= 1) {
        operate(prevNum, operator, displayValue)
        display.textContent = operate(prevNum, operator, displayValue)
        displayValue = operate(prevNum, operator, displayValue)
        prevNum = operate(prevNum, operator, displayValue)
    }
    operator = "multiply"
    prevNum = displayValue
    running.textContent = displayValue + " *"
    display.textContent = ''
    displayValue = ""
})

let division = document.querySelector('#divide');
division.addEventListener('click', function() {
    divisionCounter += 1
    if (multiplicationCounter >= 1 || subtractionCounter >= 1 || plusCounter >= 1 || divisionCounter > 1) {
        operate(prevNum, operator, displayValue)
        display.textContent = operate(prevNum, operator, displayValue)
        displayValue = operate(prevNum, operator, displayValue)
        prevNum = operate(prevNum, operator, displayValue)
    }
    operator = "divide"
    prevNum = displayValue
    running.textContent = displayValue + " /"
    display.textContent = ''
    displayValue = ""
})
