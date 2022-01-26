function add(num1, num2){
    return Number(num1) + Number(num2);
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    if (currentOperator === 'multiply'){
        return multiply(num1,num2);
    }
    else if (currentOperator === 'divide'){
        return divide(num1, num2);
    }
    else if (currentOperator === 'add'){
        return add(num1, num2);
    }
    else if (currentOperator === 'subtract'){
        return subtract(num1, num2);
    }
    else {
        return null;
    }    
}

display = document.querySelector('.display');
let displayValue = "";

function updateDisplay(){
    display.textContent = displayValue;
}

let num1;
let num2;

const digits = document.querySelectorAll('.digit');
digits.forEach(digit => {
    digit.addEventListener('click', () => {
        displayValue += digit.textContent;
        updateDisplay(displayValue);
        if (!currentOperator){
            num1 = displayValue;
        }
        else {
            num2 = displayValue;
        }
    });
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    displayValue = operate(currentOperator, num1, num2);
    updateDisplay(displayValue);
})

let currentOperator;

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        currentOperator = operator.className.split(" ")[0];
        displayValue = '';
    })
    // temp = displayValue
    // wait for second number to be entered
    // operate(operator, temp, new)
    // displayvalue = ""
    // temp = ""
})