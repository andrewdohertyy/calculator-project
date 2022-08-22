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


let number = ""
let symbol = ""


//gives every num a click event to add the number to the display
buttons.forEach((button) =>  {
    button.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
    })});

//function and click events to return the add/take/divide/times of a sum
const createSum = (e) => {
    //after the zero value  from the symbolin the string takes an input (number)
    number = Number(display.innerText);
    symbol = e.target.innerText
    display.innerText = "";
}
plusButton.addEventListener('click', createSum);

minusButton.addEventListener('click', createSum);

timesButton.addEventListener('click', createSum);

divideButton.addEventListener('click', createSum);



//function and click event to show the current value as a percentage
const percent = (e) => {
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
    number = Number(display.innerText);
    symbol = e.target.innerText

    if (symbol === "C") {
        number = ""
        display.innerText = ""
    }
}
clearButton.addEventListener('click', clear);



//function and click event to make numbers negative
const negative = (e) => {
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
    } else if (symbol === "/") {
        number /= Number(display.innerText)
        display.innerText = number;
    }
}
equalsButton.addEventListener('click', equals);
