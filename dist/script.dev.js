"use strict";

//element for displaying the output of my functions
var display = document.getElementById('display'); //pulls all buttons and stores them in an array

var buttons = Array.from(document.getElementsByClassName('button')); //variables for function buttons

var plusButton = document.getElementById('plus');
var equalsButton = document.getElementById('equals');
var clearButton = document.getElementById('AC');
var minusButton = document.getElementById('minus');
var timesButton = document.getElementById('time');
var divideButton = document.getElementById('divide');
var negativeButton = document.getElementById('neg');
var percentButton = document.getElementById('percent');
var number = "";
var symbol = ""; //gives every num a click event to add the number to the display

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    display.innerText += e.target.innerText;
  });
}); //function and click events to return the add/take/divide/times of a sum

var createSum = function createSum(e) {
  //after the zero value  from the symbolin the string takes an input (number)
  number = Number(display.innerText);
  symbol = e.target.innerText;
  display.innerText = "";
};

plusButton.addEventListener('click', createSum);
minusButton.addEventListener('click', createSum);
timesButton.addEventListener('click', createSum);
divideButton.addEventListener('click', createSum); //function and click event to show the current value as a percentage

var percent = function percent(e) {
  number = Number(display.innerText);
  symbol = e.target.innerText;

  if (symbol === "%") {
    number = Number(display.innerText) / 100;
    display.innerText = number;
  }
};

percentButton.addEventListener('click', percent); //function and click event to clear the output and reset number value to 0

var clear = function clear(e) {
  number = Number(display.innerText);
  symbol = e.target.innerText;

  if (symbol === "C") {
    number = "";
    display.innerText = "";
  }
};

clearButton.addEventListener('click', clear); //function and click event to make numbers negative

var negative = function negative(e) {
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
  } else if (symbol === "/") {
    number /= Number(display.innerText);
    display.innerText = number;
  }
};

equalsButton.addEventListener('click', equals);