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
    if (num2 == 0){
        alert('Cannot divide by zero!');
        return null;
    }
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

let displayValue = "";
let num1;
let num2;
let currentOperator;

display = document.querySelector('.display');
function updateDisplay(){
    display.textContent = displayValue;
};

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

function equate(){
    temp = operate(currentOperator, num1, num2);
    if (temp){
        displayValue = temp;
        num1 = temp;
        num2 = null;
    }
    updateDisplay(displayValue);
};

const equals = document.querySelector('.equals');
equals.addEventListener('click', equate);

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (num2){
            equate();
        }
        currentOperator = operator.className.split(" ")[0];
        displayValue = '';
    });
});

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    currentOperator = null;
    num1 = null;
    num2 = null;
    displayValue = '0';
    updateDisplay();
    displayValue = '';
});