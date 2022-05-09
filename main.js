// Basic math operators

const add = function(...numbers){
    return numbers.reduce((previousValue, currentValue) => {
        return previousValue += currentValue;
    })
};

const subtract = function(...numbers){
    return numbers.reduce((previousValue, currentValue) => {
        return previousValue -= currentValue;
    })
};

const multiply = function(...numbers){
    return numbers.reduce((previousValue, currentValue) => {
        return previousValue *= currentValue;
    })
};

const divide = function(...numbers){
    return numbers.reduce((previousValue, currentValue) => {
        return previousValue /= currentValue;
    })
};

// Operate function
// Take operator and a first and second number
// Call on provided operator
// Insert the two numbers in order
// Return the outcome

const operate = function(operator, number1, number2){
    console.log(operator);
    console.log(number1, number2);
    return operator(number1, number2);
};