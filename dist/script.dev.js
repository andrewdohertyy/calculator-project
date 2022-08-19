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
var negativeButton = document.getElementById('neg');
var percentButton = document.getElementById('percent');
var number = 0;
var symbol = ""; //DOM handling for click events, whenevr a button is clicked
//gives every num a click event

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    display.innerText += e.target.innerText;
    console.log(number);
  });
}); //function and click event to return the addition of a sum

var plus = function plus(e) {
  if (totalDisplay.innerText !== "") {
    symbol = e.target.innerText;
    display.innerText = "";
  } //after the zero value in the string takes an input (number)


  number = Number(display.innerText);
  symbol = e.target.innerText;
  display.innerText = "";
};

plusButton.addEventListener('click', plus); //function and click event to return the subtraction of a sum

var minus = function minus(e) {
  if (totalDisplay.innerText !== "") {
    symbol = e.target.innerText;
    display.innerText = "";
  } //after the zero value in the string takes an input (number)


  number = Number(display.innerText);
  symbol = e.target.innerText;
  display.innerText = "";
};

minusButton.addEventListener('click', minus); //function and click event to return the multiplication of a sum

var times = function times(e) {
  if (totalDisplay.innerText !== "") {
    symbol = e.target.innerText;
    display.innerText = "";
  } //after the zero value in the string takes an input (number)


  number = Number(display.innerText);
  symbol = e.target.innerText;
  display.innerText = "";
};

timesButton.addEventListener('click', times); //function and click event to return the division of a sum

var divide = function divide(e) {
  if (totalDisplay.innerText !== "") {
    symbol = e.target.innerText;
    display.innerText = "";
  } //after the zero value in the string takes an input (number)


  number = Number(display.innerText);
  symbol = e.target.innerText;
  display.innerText = "";
};

divideButton.addEventListener('click', divide); //function and click event to show the current value as a percentage

var percent = function percent(e) {
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
};

percentButton.addEventListener('click', percent); //function and click event to clear the output and reset number value to 0

var clear = function clear(e) {
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
};

clearButton.addEventListener('click', clear); //function and click event to make numbers negative

var negative = function negative(e) {
  if (totalDisplay.innerText !== "") {
    symbol = e.target.innerText;
    display.innerText = "";
  }

  number = Number(display.innerText);
  symbol = e.target.innerText;

  if (symbol === "±") {
    var negativeNum = -Math.abs(display.innerText);
    display.innerText = negativeNum;
  }
};

negativeButton.addEventListener('click', negative); //equals button will perform all of the tasks that the symbols require using if statements.

var equals = function equals(e) {
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
  } else if (symbol === "." && display.innerText === ".") {
    return display.innerText;
  }
};

equalsButton.addEventListener('click', equals);