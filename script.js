//element for displaying the output of my functions
let display = document.getElementById('display');

//element for temporarily display output of functions
let totalDisplay = document.getElementById('total-display');

//pulls all buttons and stores them in an array
let buttons = Array.from(document.getElementsByClassName('button'));

//gets plus element for variable use
let plusButton = document.getElementById('plus');

//gets equals element for variable use
let equalsButton = document.getElementById('equals');

//gets clear element for variable use
let clearButton = document.getElementById('AC');

//gets minus element for variable use
let minusButton = document.getElementById('minus');

//gets times element for variable use
let timesButton = document.getElementById('time');

//gets divide element for variable use
let divideButton = document.getElementById('divide');

//gets element for backspace response
let backspaceButton = document.getElementById('back');


//gets element for percentage response
let percentButton = document.getElementById('percent');


//start at 0
let number = 0

//waits for a symbol to be assigned 
let symbol = ""

//functions for handling events

//DOM handling for click events, whenevr a button is clicked
buttons.forEach((button) =>  {
    button.addEventListener('click', (e) => {
            display.innerText += e.target.innerText;
            console.log(number);
        })});


plusButton.addEventListener('click', (e) => {
    if (totalDisplay.innerText !== "") {
        symbol = e.target.innerText
        display.innerText = "";
    }
    //after the zero value in the string takes an input (number)
    number = Number(display.innerText);
    symbol = e.target.innerText
    display.innerText = "";
});

minusButton.addEventListener('click', (e) => {
    if (totalDisplay.innerText !== "") {
        symbol = e.target.innerText
        display.innerText = "";
    }
    //after the zero value in the string takes an input (number)
    number = Number(display.innerText);
    symbol = e.target.innerText
    display.innerText = "";
});

timesButton.addEventListener('click', (e) => {
    if (totalDisplay.innerText !== "") {
        symbol = e.target.innerText
        display.innerText = "";
    }
    //after the zero value in the string takes an input (number)
    number = Number(display.innerText);
    symbol = e.target.innerText
    display.innerText = "";
});

divideButton.addEventListener('click', (e) => {
    if (totalDisplay.innerText !== "") {
        symbol = e.target.innerText
        display.innerText = "";
    }
    //after the zero value in the string takes an input (number)
    number = Number(display.innerText);
    symbol = e.target.innerText
    display.innerText = "";
});

percentButton.addEventListener('click', (e) => {
    if (totalDisplay.innerText !== "") {
        symbol = e.target.innerText
        display.innerText = "";
    }

    number = Number(display.innerText);
    symbol = e.target.innerText

    if (symbol === "%") {
        number = Number(display.innerText)/100
        display.innerText = number;
}});



equalsButton.addEventListener('click', (e) => {
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
    } else if (symbol === "C") {
        number === 0
        display.innerText = ""
    }
});


