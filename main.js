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
            return add(Number(number1), Number(number2));
        case '-':
            return subtract(number1, number2);
        case '×':
            return multiply(number1, number2);
        case '÷':
            return divide(number1, number2);
    };
};

// Create the functions that populate the display when you click 
// the number buttons… you should be storing the ‘display value’ 
// in a variable somewhere for use in the next step

// Let user enter numbers
// Combine these numbers into a single number in a variable
// If an operator is used, save the variable for later
// Clear the variable to enter a new number
// If another operator is used, save the variable again and start over
// If no number was entered before operator, disregard operator
// If two operators entered in a row, disregard previous operator

let previousNumber = 0;
let currentNumber = '';
let currentOperator = '';
let result = '';

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        currentNumber += number.value;
        display.textContent = currentNumber;
    })
}) 

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        previousNumber = currentNumber;
        currentNumber = '';
        currentOperator = operator.value;
        display.textContent = currentOperator;
    })
})

equals.addEventListener('click', function(){
    result = operate(currentOperator, previousNumber, currentNumber);
    display.textContent = result;
})


// const calculatorNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// const calculatorOperators = ['clear', 'delete', '÷', '×', '-', '+', '='];

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         const input = button.id;
//         let currentNumber = null;
        
//         if(calculatorNumbers.includes(input)){
//             display.textContent += input;
//             currentNumber = display.textContent.trim();
//             console.log(currentNumber);
//         } else if (currentNumber != null && calculatorOperators.includes(input)) {
//             inputArray.push(currentNumber);
//             console.log(inputArray);
//             currentNumber = null;
//             currentOperator = input;
//             inputArray.push(currentOperator);
//         }
//         console.log(inputArray);
        
//     })
// })


// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         let input = button.id;
//         let enteredNumber;
//         let inputArray = [];
//         let operatorArray = [];
//         if(!(input == "clear" || input == "delete" || input == "÷" || input == "×" || input == "-" || input == "=" || input == "+")){
//             display.textContent += input;
//             enteredNumber = display.textContent.trim();
//             console.log(enteredNumber);
//         } else if (enteredNumber && (input == ""))
//     });
// });