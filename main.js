// Get elements from html file
const display = document.querySelector('#display-content');
const displayResult = document.querySelector('#display-result');
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
let currentResult = '';
let previousFunctionBtn = '';

// Initialize buttons function
// First load in all the buttons that contain a number
// Make each number button clickable
// When a user clicks a number
// Update the display value to the entered number
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        handleNumber(number.value);
    })
});

const handleNumber = function(number) {
    currentNumber += number;
    display.textContent = currentNumber;
};

// Entering an operator
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        handleOperator(operator.value);
    })
});

// user enters 7
// user enters + operator
// user enters 3
// user enters operator
// equals operation happens in the background
// currentnumber gets set to that result


const handleOperator = function(operator) {
    // If else (calculate when equals is not used)
    // if(result){
    //     console.log("we're in")
    //     currentOperator = operator;
    //     display.textContent = currentOperator;
    //     handleEquals();
    // }
    if (!previousFunctionBtn || previousFunctionBtn == '='){
        currentOperator = operator;
        previousNumber = currentNumber;
        display.textContent = currentOperator;
        currentNumber = '';
        previousFunctionBtn = operator;
        console.log(previousFunctionBtn);
    } else if (previousFunctionBtn == '+' || previousFunctionBtn == '-' || previousFunctionBtn == '×' || previousFunctionBtn == '÷') {
        console.log("we're in");
        console.log("previous number: " +  previousNumber);
        console.log("current number: " +  currentNumber);
        console.log("current operator: " + currentOperator);
        handleEquals();
        // console.log(result);
        currentOperator = operator;
        previousNumber = currentNumber;
        display.textContent = currentOperator;
        currentNumber = '';
        previousFunctionBtn = operator;
        console.log(previousFunctionBtn);
        console.log("new operator: " + currentOperator);

    //     currentOperator = operator;
    //     previousNumber = currentNumber;
    //     display.textContent = currentOperator;
    //     currentNumber = '';
    //     previousFunctionBtn = operator;
    //     console.log(previousFunctionBtn);
    }
    
};

equals.addEventListener('click', () => {
    handleEquals();
});

const handleEquals = function(){
    if(previousNumber && currentOperator && currentNumber){
        result = operate(currentOperator, previousNumber, currentNumber);
        displayResult.textContent = result;
        display.textContent = "";
        currentNumber = result;
        // currentResult = result;
        // currentOperator = '';
        console.log(previousNumber);
        console.log(currentNumber);
        previousFunctionBtn = '=';
        console.log(previousFunctionBtn);
    }
}



// equals.addEventListener('click', () => {
//     if(previousNumber && currentOperator && currentNumber){
//         result = operate(currentOperator, previousNumber, currentNumber);
//         display.textContent = result;
//         currentNumber = result;
//         currentResult = result;
//         console.log(previousNumber);
//         console.log(currentNumber);
//     }
// });

// If current result same as previous result
// If last input is result
// If a second operator variable is filled, first do calculation
// Reset the second operator variable to contain nothing
// Check against current result

// The moment another operator is pressed
// Check something
// Calculate result
// Continue inputs
