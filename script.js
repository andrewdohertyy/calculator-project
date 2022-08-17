let display = document.getElementById('display');
let totalDisplay = document.getElementById('total-display');
let buttons = Array.from(document.getElementsByClassName('button'));
let plusButton = document.getElementById('plus');
let equalsButton = document.getElementById('equals');
let number = 0
let symbol = ""

//functions for handling events

//DOM handling for click events
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
    number = Number(display.innerText);
    symbol = e.target.innerText
    display.innerText = "";
    console.log(number);
    //console.log(number,typeof number);
});

equalsButton.addEventListener('click', (e) => {
    if (symbol === "+") {
        number += Number(display.innerText)
        display.innerText = number;
        console.log(number);
    }
    //console.log(symbol);
    //console.log(number,typeof number);
});
