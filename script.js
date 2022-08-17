let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText === 'C') {
            display.innerText = '';
        } else
            display.innerText += e.target.innerText;
        }
    )});

