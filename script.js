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
let backspaceButton = document.getElementById('back');
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


//when plus is clicked clears text and sets num to display number
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


clearButton.addEventListener('click', (e) => {
    if (totalDisplay.innerText !== "") {
        symbol = e.target.innerText
        display.innerText = "";
    }

    number = Number(display.innerText);
    symbol = e.target.innerText

    if (symbol === "C") {
        number = 0
        display.innerText = ""
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
    }    
});


