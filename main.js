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
    // if(Infinity){
    //     alert("Ah ah ah, you better start over");
    //     return display.textContent = "Fatal error, please restart";
    // }
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

const reset = function(){
    alert('hoi')
}

// ALGORITHM
// Initialize number buttons for user to click
// Initialize operator buttons for user to click
// Initialize clear button for user to start fresh
// When a user inputs a number
// Display number on calculator display
// Save the value on the display

// Initialize variables to save values in to calculate with
let previousNumber = '';
let currentNumber = '';
let currentOperator = '';
let result = '';
let previousFunctionBtn = '';

// Initialize buttons function
// First load in all the buttons that contain a number
// Make each number button clickable
// When a user clicks a number
// Update the display value to the entered number
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        handleNumber(number.value);
    });
});

const handleNumber = function(number) {
    currentNumber += number;
    display.textContent = currentNumber;
};

// Entering an operator
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
        // console.log(previousFunctionBtn);
    } else if (previousFunctionBtn == '+' || previousFunctionBtn == '-' || previousFunctionBtn == '×' || previousFunctionBtn == '÷') {
        // console.log("we're in");
        // console.log("previous number: " +  previousNumber);
        // console.log("current number: " +  currentNumber);
        // console.log("current operator: " + currentOperator);
        handleEquals();
        currentOperator = operator;
        previousNumber = currentNumber;
        display.textContent = currentOperator;
        currentNumber = '';
        previousFunctionBtn = operator;
        // console.log(previousFunctionBtn);
        // console.log("new operator: " + currentOperator);
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
        // console.log(previousNumber);
        // console.log(currentNumber);
        previousFunctionBtn = '=';
        // console.log(previousFunctionBtn);
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

// If current result same as previous result
// If last input is result
// If a second operator variable is filled, first do calculation
// Reset the second operator variable to contain nothing
// Check against current result

// The moment another operator is pressed
// Check something
// Calculate result
// Continue inputs
