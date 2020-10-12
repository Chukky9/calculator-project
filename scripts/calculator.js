//First, we declare some variables that will be used later in the code.
let info = '';
let num1 = '';
let num2 = '';
let operator = '';
let result = '';
let resultInfo = '';
let delNumber = '';
let delValue = '';
const display = document.getElementById("display");
display.focus();

//We create functions using function declaration for the simple arithmetic operations 
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "That won't work..."
    }
    return a / b;
}

//We create an 'operate' function that runs arithmetic operations using three arguments(operator, num1 as first operand and num2 as second operand)
function operate(operator, num1, num2) {
    if (operator == '+') {
        result = sum(num1, num2);
    } else if (operator == '-') {
        result = subtract(num1, num2);
    } else if (operator == '*') {
        result = multiply(num1, num2);
    } else {
        result = divide(num1, num2);
    }
    return +Number(result).toFixed(4); //If result contains decimal places, it is rounded up to four decimal places.
}

//We create a fucntion that populates the display anytime a numerical key is clicked.
let showDisplay = function(val) {
   if (display.value == resultInfo) {
        info = ''; //This resets the display screen anytime a numerical key is clicked just after an operation is run using the 'equals' key.
    }
    info += val;
    display.value = info;
}

//This function deletes the last inputted number in the display screen.
//The conditional helps make sure only inputted numbers are deleted and not displayed results.
let delVal = function() {
    if (resultInfo == Number(display.value)) {
        return false;
    } else {
        delNumber = info.toString();
        delValue = delNumber.substring(0, delNumber.length - 1);
        info = delValue;
        display.value = info;
    }
}

//This stores the inputted values on the display screen in their variables as the case may be, it also stores the selected operator in it's own variable.
//It also runs the 'operate' function anytime an operator key is clicked after the first two operands have been inputted.
let arithmetic = function(mathSign) {
    if (isNaN(info)) {
        display.value = "That won't work...";
    } else if (num1 != '') { 
        num2 = Number(info); 
        display.value = operate(operator, num1, num2); 
        num1 = Number(display.value);
        operator = mathSign;
        info = '';
        resultInfo = '';
    } else { //This stores inputted value in a the first variable
    num1 = Number(info);
    display.value = '';
    display.focus();
    operator = mathSign;
    info = '';
    resultInfo = '';
    }
}

//We create a function that runs the 'operate' function whenever the 'equals' sign is clicked and displays the result.
//This function also empties the number variables so they can get new values.
let equalTo = function() {
    if (num1 == '' && num2 == '') {
        display.value = "That won't work..."
    } else {
    num2 = Number(info);
    display.value = operate(operator, num1, num2);
    info = Number(display.value);
    resultInfo = Number(display.value);
    num1 = '';
    num2 = ''; 
}
}

//We create a function that clears the display and all the stored variables and assign to the 'AC' button. Like a page refresh.
let clrDisplay = function() {
    info = '';
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    resultInfo = '';
    delNumber = '';
    delValue = '';
    display.value = '';
}


const delBtn = document.getElementById("del-btn");
const clrBtn = document.getElementById("ac-btn");
delBtn.onclick = delVal;
clrBtn.onclick = clrDisplay;