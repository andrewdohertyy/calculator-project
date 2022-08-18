"use strict";

//element for displaying the output of my functions
var display = document.getElementById('display'); //element for temporarily display output of functions

var totalDisplay = document.getElementById('total-display'); //pulls all buttons and stores them in an array

var buttons = Array.from(document.getElementsByClassName('button')); //gets plus element for variable use

var plusButton = document.getElementById('plus'); //gets equals element for variable use

var equalsButton = document.getElementById('equals'); //gets clear element for variable use

var clearButton = document.getElementById('AC'); //gets minus element for variable use

var minusButton = document.getElementById('minus'); //gets times element for variable use

var timesButton = document.getElementById('time'); //gets divide element for variable use

var divideButton = document.getElementById('divide'); //gets element for backspace response

var backspaceButton = document.getElementById('back'); //gets element for percentage response

var percentButton = document.getElementById('percent'); //start at 0

var number = 0; //waits for a symbol to be assigned 

var symbol = ""; //functions for handling events
//DOM handling for click events, whenevr a button is clicked

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    display.innerText += e.target.innerText;
    console.log(number);
  });
});
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
  } else if (symbol === "C") {
    number === 0;
    display.innerText = "";
  }
});