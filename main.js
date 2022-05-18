// Get elements from html file
const display = document.querySelector('#display-content');
const displayResult = document.querySelector('#display-result');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const del = document.querySelector('.del');

// Basic math operators
const add = function(number1, number2){
    return number1 + number2;
};

const subtract = function(number1, number2){
    return number1 - number2;
};

const multiply = function(number1, number2){
    return number1 * number2;
};

const divide = function(number1, number2){
    if((number1 / number2) == Infinity || (number1 / number2) == -Infinity){
        alert(`No division by 0 please!`);
        return NaN;
    }
    return number1 / number2;
};

const operate = function(operator, number1, number2){
    switch (operator) {
        case '+':
            return add(parseFloat(number1), parseFloat(number2));
        case '-':
            return subtract(number1, number2);
        case '×':
            return multiply(number1, number2);
        case '÷':
            return divide(number1, number2);
    };
};

let previousNumber = '';
let currentNumber = '';
let currentOperator = '';
let result = '';
let previousFunctionBtn = '';

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        handleNumber(number.value);
    });
});

const handleNumber = function(number) {
    currentNumber += number;
    display.textContent = currentNumber;
};

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        handleOperator(operator.value);
    });
});

const handleOperator = function(operator) {
    if (!previousFunctionBtn || previousFunctionBtn == '='){
        currentOperator = operator;
        previousNumber = currentNumber;
        display.textContent = currentOperator;
        currentNumber = '';
        previousFunctionBtn = operator;
    } else if (previousFunctionBtn == '+' || previousFunctionBtn == '-' || previousFunctionBtn == '×' || previousFunctionBtn == '÷') {
        handleEquals();
        currentOperator = operator;
        previousNumber = currentNumber;
        display.textContent = currentOperator;
        currentNumber = '';
        previousFunctionBtn = operator;
    };
};

equals.addEventListener('click', () => {
    handleEquals();
});

const handleEquals = function(){
    if(previousNumber && currentOperator && currentNumber && previousFunctionBtn != '='){
        result = operate(currentOperator, previousNumber, currentNumber);
        displayResult.textContent = +result.toFixed(2);
        display.textContent = "";
        currentNumber = result;
        previousFunctionBtn = '=';
    };
};

clear.addEventListener('click', () => {
    handleClear();
});

const handleClear = function(){
    previousNumber = '';
    currentNumber = '';
    currentOperator = '';
    result = '';
    previousFunctionBtn = '';
    displayResult.textContent = '';
    display.textContent = 0;
};