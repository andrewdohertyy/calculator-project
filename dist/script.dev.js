"use strict";

var display = document.getElementById('display');
var totalDisplay = document.getElementById('total-display');
var buttons = Array.from(document.getElementsByClassName('button'));
var plusButton = document.getElementById('plus');
var equalsButton = document.getElementById('equals');
var number = 0;
var symbol = ""; //functions for handling events
//DOM handling for click events

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
  }

  number = Number(display.innerText);
  symbol = e.target.innerText;
  display.innerText = "";
  console.log(number); //console.log(number,typeof number);
});
equalsButton.addEventListener('click', function (e) {
  if (symbol === "+") {
    number += Number(display.innerText);
    display.innerText = number;
    console.log(number);
  } //console.log(symbol);
  //console.log(number,typeof number);

});