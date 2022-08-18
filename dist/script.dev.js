"use strict";

//element for displaying the output of my functions
var display = document.getElementById('display'); //element for temporarily display output of functions

var totalDisplay = document.getElementById('total-display'); //pulls all buttons and stores them in an array

var buttons = Array.from(document.getElementsByClassName('button')); //variables for function buttons

var plusButton = document.getElementById('plus');
var equalsButton = document.getElementById('equals');
var clearButton = document.getElementById('AC');
var minusButton = document.getElementById('minus');
var timesButton = document.getElementById('time');
var divideButton = document.getElementById('divide');
var backspaceButton = document.getElementById('back');
var percentButton = document.getElementById('percent');
var number = 0;
var symbol = ""; //DOM handling for click events, whenevr a button is clicked
//gives every num a click event

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    display.innerText += e.target.innerText;
    console.log(number);
  });
}); //when plus is clicked clears text and sets num to display number

plusButton.addEventListener('click', function (e) {
  if (totalDisplay.innerText !== "") {
    symbol = e.target.innerText;
    display.innerText = "";
  } //after the zero value in the string takes an input (number)


  number = Number(display.innerText);
  symbol = e.target.innerText;
  display.innerText = "";
});
minusButton.addEventListener('click', function (e) {
  if (totalDisplay.innerText !== "") {
    symbol = e.target.innerText;
    display.innerText = "";
  } //after the zero value in the string takes an input (number)


  number = Number(display.innerText);
  symbol = e.target.innerText;
  display.innerText = "";
});
timesButton.addEventListener('click', function (e) {
  if (totalDisplay.innerText !== "") {
    symbol = e.target.innerText;
    display.innerText = "";
  } //after the zero value in the string takes an input (number)


  number = Number(display.innerText);
  symbol = e.target.innerText;
  display.innerText = "";
});
divideButton.addEventListener('click', function (e) {
  if (totalDisplay.innerText !== "") {
    symbol = e.target.innerText;
    display.innerText = "";
  } //after the zero value in the string takes an input (number)


  number = Number(display.innerText);
  symbol = e.target.innerText;
  display.innerText = "";
});
percentButton.addEventListener('click', function (e) {
  if (totalDisplay.innerText !== "") {
    symbol = e.target.innerText;
    display.innerText = "";
  }

  number = Number(display.innerText);
  symbol = e.target.innerText;

  if (symbol === "%") {
    number = Number(display.innerText) / 100;
    display.innerText = number;
  }
});
clearButton.addEventListener('click', function (e) {
  if (totalDisplay.innerText !== "") {
    symbol = e.target.innerText;
    display.innerText = "";
  }

  number = Number(display.innerText);
  symbol = e.target.innerText;

  if (symbol === "C") {
    number = 0;
    display.innerText = "";
  }
});
equalsButton.addEventListener('click', function (e) {
  if (symbol === "+") {
    number += Number(display.innerText);
    display.innerText = number;
  } else if (symbol === "-") {
    number -= Number(display.innerText);
    display.innerText = number;
  } else if (symbol === "*") {
    number *= Number(display.innerText);
    display.innerText = number;
    console.log(display.innerText);
  } else if (symbol === "/") {
    number /= Number(display.innerText);
    display.innerText = number;
  }
});