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
    return operator(number1, number2);
};