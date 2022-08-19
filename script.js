//element for displaying the output of my functions
let display = document.getElementById('display');

//element for temporarily display output of functions
let totalDisplay = document.getElementById('total-display');

//pulls all buttons and stores them in an array
let buttons = Array.from(document.getElementsByClassName('button'));

//variables for function buttons
let plusButton = document.getElementById('plus');
let equalsButton = document.getElementById('equals');
let clearButton = document.getElementById('AC');
let minusButton = document.getElementById('minus');
let timesButton = document.getElementById('time');
let divideButton = document.getElementById('divide');
let negativeButton = document.getElementById('neg');
let percentButton = document.getElementById('percent');
let number = 0
let symbol = ""


//DOM handling for click events, whenevr a button is clicked


//gives every num a click event
buttons.forEach((button) =>  {
    button.addEventListener('click', (e) => {
            display.innerText += e.target.innerText;
            console.log(number);
        })});



//function and click event to return the addition of a sum
const plus = (e) => {
    if (totalDisplay.innerText !== "") {
        symbol = e.target.innerText
        display.innerText = "";
    }
    //after the zero value in the string takes an input (number)
    number = Number(display.innerText);
    symbol = e.target.innerText
    display.innerText = "";
}
plusButton.addEventListener('click', plus);


//function and click event to return the subtraction of a sum
const minus = (e) => {
    if (totalDisplay.innerText !== "") {
        symbol = e.target.innerText
        display.innerText = "";
    }
    //after the zero value in the string takes an input (number)
    number = Number(display.innerText);
    symbol = e.target.innerText
    display.innerText = "";
}
minusButton.addEventListener('click', minus);

//function and click event to return the multiplication of a sum
const times = (e) => {
    if (totalDisplay.innerText !== "") {
        symbol = e.target.innerText
        display.innerText = "";
    }
    //after the zero value in the string takes an input (number)
    number = Number(display.innerText);
    symbol = e.target.innerText
    display.innerText = "";
}
timesButton.addEventListener('click', times);


//function and click event to return the division of a sum
const divide = (e) => {
    if (totalDisplay.innerText !== "") {
        symbol = e.target.innerText
        display.innerText = "";
    }
    //after the zero value in the string takes an input (number)
    number = Number(display.innerText);
    symbol = e.target.innerText
    display.innerText = "";
}
divideButton.addEventListener('click', divide);


//function and click event to show the current value as a percentage
const percent = (e) => {
    if (totalDisplay.innerText !== "") {
        symbol = e.target.innerText
        display.innerText = "";
    }

    number = Number(display.innerText);
    symbol = e.target.innerText

    if (symbol === "%") {
        number = Number(display.innerText)/100
        display.innerText = number;
    }
}    
percentButton.addEventListener('click', percent);


//function and click event to clear the output and reset number value to 0
const clear = (e) => {
    if (totalDisplay.innerText !== "") {
        symbol = e.target.innerText
        display.innerText = "";
    }

    number = Number(display.innerText);
    symbol = e.target.innerText

    if (symbol === "C") {
        number = 0
        display.innerText = ""
    }
}
clearButton.addEventListener('click', clear);


//function and click event to make numbers negative
const negative = (e) => {
    if (totalDisplay.innerText !== "") {
        symbol = e.target.innerText
        display.innerText = "";
    }
    number = Number(display.innerText);
    symbol = e.target.innerText
    
    if (symbol === "±") {
        let negativeNum = -Math.abs(display.innerText)
        display.innerText = negativeNum;
    }
}
negativeButton.addEventListener('click', negative);


//equals button will perform all of the tasks that the symbols require using if statements.
const equals = (e) => {
    if (symbol === "+") {
        number += Number(display.innerText)
        display.innerText = number;
    } else if (symbol === "-") {
        number -= Number(display.innerText)
        display.innerText = number;
    } else if (symbol === "*") {
        number *= Number(display.innerText)
        display.innerText = number;
        console.log(display.innerText);
    } else if (symbol === "/") {
        number /= Number(display.innerText)
        display.innerText = number;
    } else if (symbol === "." && display.innerText === ".") {
        return display.innerText;
    }
}
equalsButton.addEventListener('click', equals);

