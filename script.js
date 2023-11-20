let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');

let screenValue = "";
let btnsArr = Array.from(buttons);

btnsArr.forEach(button => {
    button.addEventListener('click', (e) => {

        buttonText= e.target.innerText;

        if (buttonText == '=') {
            screenValue = eval(screenValue);
            input.value = screenValue;
        }

        else if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            input.value = screenValue;
        }

        else if (buttonText == 'AC') {
            screenValue = "";
            input.value = screenValue;
        }

        else if (buttonText == 'DEL') {
            screenValue = screenValue.slice(0, -1)
            input.value = screenValue;
        }

        else if (buttonText == "%") {
            screenValue = eval(screenValue) / 100;
            input.value = screenValue;

        }
        else {
            screenValue += buttonText;
            input.value = screenValue;
        }
    })
});