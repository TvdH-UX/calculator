// Get elements from html file
const display = document.querySelector('#display-content');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelectorAll('#clear');
const del = document.querySelectorAll('#del');

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
    return number1 / number2;
};

// Operate function
// Take operator and a first and second number
// Call on provided operator
// Insert the two numbers in order
// Return the outcome
const operate = function(operator, number1, number2){
    switch (operator) {
        case '+':
            return add(parseInt(number1), parseInt(number2));
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

// Create the functions that populate the display when you click 
// the number buttons… you should be storing the ‘display value’ 
// in a variable somewhere for use in the next step

// Set the previous number to 0 (as per the display)
// Let users enter a number
// Save number as current number
// If user enter an operator, save to currentOperator
// If user then starts typing a new number, save current number to previous number
// If user enters equals, fire operate function with given variables
// Save the result to a result variable
// Display the result on the screen
// Save result as previous number

let previousNumber = '';
let currentNumber = '';
let currentOperator = '';
let result;

// Entering numbers
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        currentNumber += number.value;
        display.textContent = currentNumber;
        console.log("Previous number: " + previousNumber);
        console.log("Current number: " + currentNumber);
    })
});

// Entering an operator
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        currentOperator = operator.value;
        display.textContent = currentOperator;
        if(result){
            previousNumber = result;
        } else {
            previousNumber = currentNumber;       
        }
        currentNumber = '';
        console.log("Previous number: " + previousNumber);
        console.log("Current number: " + currentNumber);
    })
});

// When the user enters =
equals.addEventListener('click', () => {
    if (currentNumber && currentOperator){
        console.log("Previous number: " + previousNumber);
        console.log("Current number: " + currentNumber);
        console.log("Operator: " + currentOperator);
        result = operate(currentOperator, previousNumber, currentNumber);
        console.log("Result: " + result);
        display.textContent = result;
    }
    
});