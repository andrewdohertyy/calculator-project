"use strict";

var display = document.getElementById('display');
var buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.innerText === 'C') {
      display.innerText = '';
    } else display.innerText += e.target.innerText;
  });
});