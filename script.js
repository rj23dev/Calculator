function add(a, b) {
    return a + b;

}

//console.log(add(6,7));

function subtract(a, b) {
    return a - b;
}

//console.log(subtract(6,7));

function multiply(a, b) {
    return a * b;
}

//console.log(multiply(-6,-7));

function divide(a, b) {

    if (b === 0) {
        return NaN;
    }
    else {
        return Number((a / b).toFixed(2));
    }
}

//console.log(divide(6,7));
document.addEventListener('DOMContentLoaded', () => {
    let display = document.querySelector('#display');
    display.textContent = '';
});

let first = "";
let second = "";
let operator = "";
let result;
let equals = {};

let divByZero = false;


function operate(firstN, secondN, op) {

    firstN = +firstN;
    secondN = +secondN;

    console.log(first);
    console.log(second);
    console.log(operator);

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

let display = document.querySelector('#display');

clear.addEventListener('click', () => {
    display.textContent = '';
    second = "";
    first = "";
    operator = "";
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
            console.log(second);
        }
    })
})

let ops = document.querySelectorAll('.operator');

ops.forEach((op) => {

    op.addEventListener('click', () => {

        if (display.textContent == "") {
            if (op.textContent === '-') {
                second += op.textContent;

                display.textContent += op.textContent;
            }

        }
        /*else if(display.textContent.at(0) === '-' && display.textContent.at(1)!==''){
          
                     first = second;
     
                     second = '';
     
                     operator = op.textContent;
     
                     display.textContent += op.textContent;
     
                     console.log(first);
                     console.log(operator);
          
        }*/
        else if (display.textContent.at(-1) === ('+') || display.textContent.at(-1) === ('-')
            || display.textContent.at(-1) === ('*') || display.textContent.at(-1) === ('/')) {


            display.textContent = display.textContent.slice(0, -1) + op.textContent;

            operator = op.textContent;



        }


        else if (display.textContent.includes('+') || display.textContent.includes('-')
            || display.textContent.includes('*') || display.textContent.includes('/')) {



            result = operate(first, second, operator);

            first = result.toString();

            second = "";

            display.textContent = result + op.textContent;

            operator = op.textContent;

            console.log(result);


        }

        else {
            first = second;
            second = "";
            operator = op.textContent;
            display.textContent += op.textContent;
        }


    })
})


let equal = document.querySelector('#equal');

equal.addEventListener('click', () => {

    if (first === '' || second === "" || operator === '') { }
    else {
        equals.value = operate(first, second, operator);
        if (isNaN(equals.value)) {
            display.textContent = "ERROR can't divide by zero";

            second = "";
            first = "";
            operator = "";

        }
        else {

            equals.value = equals.value.toString();
            first = ''; //result.toString();

            second = equals.value;
            operator = '';

            display.textContent = equals.value;



            console.log(first);
            console.log(second);
            console.log(operator);
        }
    }

})