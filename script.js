
let first = "";
let second = "";
let operator = "";
let result;
let equals = {};

let display = document.querySelector('#display');

document.addEventListener('DOMContentLoaded', () => {

    display.textContent = '';
});


function add(a, b) {
    return a + b;

}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {

    if (b === 0) {
        return NaN;
    }
    else {
        return Number(a / b);
    }
}

function operate(firstN, secondN, op) {

    firstN = +firstN;
    secondN = +secondN;



    if (op === '+') {
        return add(firstN, secondN);
    }
    else if (op === '-') {
        return subtract(firstN, secondN);
    }
    else if (op === '*') {
        return multiply(firstN, secondN);
    }
    else if (op === '/') {
        return divide(firstN, secondN);
    }
}

let clear = document.querySelector('#clear');



clear.addEventListener('click', () => {
    display.textContent = '';
    second = "";
    first = "";
    operator = "";
    equals.value = "";
});



let digits = document.querySelectorAll(".digit");

digits.forEach((digit) => {
    digit.addEventListener('click', () => {

        if (display.textContent === equals.value) {

            display.textContent = digit.textContent;
            second = digit.textContent;

        }
        else if (display.textContent == "ERROR can't divide by zero") {

            display.textContent = digit.textContent;
            second = digit.textContent;
        }
        else {
            display.textContent += digit.textContent;
            second += digit.textContent

        }
    })
})


let decimal = document.querySelector('.decimal');

decimal.addEventListener('click', () => {


    if (display.textContent === '') {

        second = '0.';
        display.textContent = second;
    }
    else if (display.textContent === equals.value) {

        second = '0.';
        display.textContent = second;
    }
    else if (display.textContent == "ERROR can't divide by zero") {

        second = '0.';
        display.textContent = second;

    }
    else if (!(second.includes('.'))) {
        if(second ===''){
            second = '0.';
            display.textContent += second;
        }
        else{
        second += decimal.textContent;
        display.textContent += '.';
        }
    }


})

let ops = document.querySelectorAll('.operator');

ops.forEach((op) => {

    op.addEventListener('click', () => {
        if (display.textContent == "ERROR can't divide by zero") {
            display.textContent = "";
        }
        else if (op.textContent === '-') {

            if (second == '' && operator == '') {
                second = op.textContent;
                display.textContent = second;
            }
            else if (second !== '' && operator === '') {

                if(second === "-"){
                    return;
                }

                operator = op.textContent;

                first = second;

                second = '';

                display.textContent += op.textContent;


            }


            else if (first !== '' && operator !== '' && second === '') {

                if(operator === '/' || operator === '*'){
                    second = op.textContent;
                    display.textContent += second;
                    
                }
                else{
                operator = op.textContent;
                display.textContent = display.textContent.slice(0, -1) + op.textContent;
                }
            }
            else if (first !== '' && operator !== '' && second !== '') {

                result = operate(first, second, operator);

                result = result.toString();

                first = result;

                operator = op.textContent;

                second = '';

                display.textContent = first + op.textContent;
            }
        }
        else {
            if (second !== '' && operator === '') {

                if(second ==='-'){
                    return;
                }
                operator = op.textContent;

                first = second;
                second = '';

                display.textContent += op.textContent;
            }
            else if (first !== '' && operator !== '' && second === '') {
                operator = op.textContent;

                display.textContent = display.textContent.slice(0, -1) + op.textContent;
            }
            else if (first !== '' && operator !== '' && second !== '') {

                result = operate(first, second, operator);

                result = result.toString();

                first = result;

                operator = op.textContent;

                second = '';

                display.textContent = first + op.textContent;
            }
        }


    })
})



let equal = document.querySelector('#equal');

equal.addEventListener('click', () => {

    if (first === '' || second === "" || operator === '') { return; }
    else {
        equals.value = operate(first, second, operator);

        if (isNaN(equals.value)) {
            display.textContent = "ERROR can't divide by zero";

            second = "";
            first = "";
            operator = "";

            return;

        }

        if (!(Number.isInteger(equals.value))) {

            equals.value = equals.value.toFixed(4);
        }


        equals.value = equals.value.toString();
        first = '';

        second = equals.value;
        operator = '';

        display.textContent = equals.value;




    }

})




let backspace = document.querySelector('#backspace');

backspace.addEventListener('click', () => {


    if (display.textContent === equals.value || display.textContent == "ERROR can't divide by zero") {

        display.textContent = '';
        second = "";
        first = "";
        operator = "";
        return;
    }

    if (second === '' && operator === '') {
        return;
    }
    else if (second !== '' && operator === '') {
        second = second.slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
    }
    else if (first !== '' && operator !== '' && second === '') {
        operator = '';
        second = first;
        first = '';
        display.textContent = display.textContent.slice(0, -1);
    }
    else if (first !== '' && operator !== '' && second !== '') {
        second = second.slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
    }
})
