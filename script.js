const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', populateDisplay));

let currentOperand = '';
let previousOperand = '';
let operator = '';

function populateDisplay(e) {

    const displayPrevOperand = document.querySelector('.previous-operand');
    const displayCurrOperand = document.querySelector('.current-operand');

    switch(e.target.id) {
        case "1":
            if (currentOperand === '0' || currentOperand === "Infinity") currentOperand = e.target.id;
                else {
                    currentOperand += e.target.id;
                }
            break;
        case "2":
            if (currentOperand === '0' || currentOperand === "Infinity") currentOperand = e.target.id;
                else {
                    currentOperand += e.target.id;
                }
            break;
        case "3":
            if (currentOperand === '0' || currentOperand === "Infinity") currentOperand = e.target.id;
                else {
                    currentOperand += e.target.id;
                }
            break;
        case "4":
            if (currentOperand === '0' || currentOperand === "Infinity") currentOperand = e.target.id;
                else {
                    currentOperand += e.target.id;
                }
            break;
        case "5":
            if (currentOperand === '0' || currentOperand === "Infinity") currentOperand = e.target.id;
                else {
                    currentOperand += e.target.id;
                }
            break;
        case "6":
            if (currentOperand === '0' || currentOperand === "Infinity") currentOperand = e.target.id;
                else {
                    currentOperand += e.target.id;
                }
            break;
        case "7":
            if (currentOperand === '0' || currentOperand === "Infinity") currentOperand = e.target.id;
                else {
                    currentOperand += e.target.id;
                }
            break;
        case "8":
            if (currentOperand === '0' || currentOperand === "Infinity") currentOperand = e.target.id;
                else {
                    currentOperand += e.target.id;
                }
            break;
        case "9":
            if (currentOperand === '0' || currentOperand === "Infinity") currentOperand = e.target.id;
                else {
                    currentOperand += e.target.id;
                }
            break;
        case "0":
            if (currentOperand === '0' || currentOperand === "Infinity") currentOperand = e.target.id;
                else {
                    currentOperand += e.target.id;
                }
            break;
        case "AC":
            previousOperand = '';
            operator = '';
            currentOperand = '0';
            break;
        case "DEL":
            currentOperand = currentOperand.slice(0, currentOperand.length - 1);
            if (currentOperand.length === 0 && currentOperand !== '') {
                currentOperand = '0'
            }
            break;
        case "+":
            if (currentOperand.endsWith('.')) return;
            else if (previousOperand !== '' && operator !== '') {
                if (currentOperand % 1 !== 0 || previousOperand % 1 !== 0) {
                    previousOperand = operate(operator, parseFloat(previousOperand), parseFloat(currentOperand)).toString();
                    operator = e.target.id;
                    currentOperand = "";
                } else {
                    previousOperand = operate(operator, parseInt(previousOperand), parseInt(currentOperand)).toString();
                    operator = e.target.id;
                    currentOperand = '';
                }
            } else {    
                previousOperand = currentOperand;
                operator = e.target.id;
                currentOperand = '';
            }
            break;
        case "-":
            if (currentOperand.endsWith('.')) return;
            else if (previousOperand !== '' && operator !== '') {
                if (currentOperand % 1 !== 0 || previousOperand % 1 !== 0) {
                    previousOperand = operate(operator, parseFloat(previousOperand), parseFloat(currentOperand)).toString();
                    operator = e.target.id;
                    currentOperand = "";
                } else {
                    previousOperand = operate(operator, parseInt(previousOperand), parseInt(currentOperand)).toString();
                    operator = e.target.id;
                    currentOperand = '';
                }
            } else {    
                previousOperand = currentOperand;
                operator = e.target.id;
                currentOperand = '';
            }
            break;
        case "*":
            if (currentOperand.endsWith('.')) return;
            else if (previousOperand !== '' && operator !== '') {
                if (currentOperand % 1 !== 0 || previousOperand % 1 !== 0) {
                    previousOperand = operate(operator, parseFloat(previousOperand), parseFloat(currentOperand)).toString();
                    operator = e.target.id;
                    currentOperand = "";
                } else {
                    previousOperand = operate(operator, parseInt(previousOperand), parseInt(currentOperand)).toString();
                    operator = e.target.id;
                    currentOperand = '';
                }
            } else {    
                previousOperand = currentOperand;
                operator = e.target.id;
                currentOperand = '';
            }
            break;
        case "/":
            if (currentOperand.endsWith('.')) return;
            else if (previousOperand !== '' && operator !== '') {
                if (currentOperand % 1 !== 0 || previousOperand % 1 !== 0) {
                    previousOperand = operate(operator, parseFloat(previousOperand), parseFloat(currentOperand)).toString();
                    operator = e.target.id;
                    currentOperand = "";
                } else {
                    previousOperand = operate(operator, parseInt(previousOperand), parseInt(currentOperand)).toString();
                    operator = e.target.id;
                    currentOperand = '';
                }
            } else {    
                previousOperand = currentOperand;
                operator = e.target.id;
                currentOperand = '';
            }
            break;
        case "^":
            if (currentOperand.endsWith('.')) return;
            else if (previousOperand !== '' && operator !== '') {
                if (currentOperand % 1 !== 0 || previousOperand % 1 !== 0) {
                    previousOperand = operate(operator, parseFloat(previousOperand), parseFloat(currentOperand)).toString();
                    operator = e.target.id;
                    currentOperand = "";
                } else {
                    previousOperand = operate(operator, parseInt(previousOperand), parseInt(currentOperand)).toString();
                    operator = e.target.id;
                    currentOperand = '';
                }
            } else {    
                previousOperand = currentOperand;
                operator = e.target.id;
                currentOperand = '';
            }
            break;
        case ".":
            if (currentOperand === '') currentOperand += `0${e.target.id}`;
            else if (currentOperand.includes(e.target.id) || currentOperand === 'Undefined!') return;
            else {
                currentOperand += e.target.id;
            }
            break;
        case '=':
            if ((currentOperand !== '0' && !previousOperand && !operator)
                || (currentOperand === '0' && !previousOperand && !operator)
                || (!currentOperand && previousOperand !== '0' && operator)) return;
            else if (currentOperand % 1 !== 0 || previousOperand % 1 !== 0) {
                currentOperand = operate(operator, parseFloat(previousOperand), parseFloat(currentOperand)).toString();
                previousOperand = '';
                operator = '';
            } else if (operator === "/" && currentOperand === '0') {
                previousOperand = '';
                operator = '';
                currentOperand = 'Undefined!';
            } else {
                currentOperand = operate(operator, parseInt(previousOperand), parseInt(currentOperand)).toString();
                previousOperand = '';
                operator = '';
            }
            break;
        default:
            return;
    }
    displayPrevOperand.textContent = `${previousOperand}${operator}`;
    displayCurrOperand.textContent = currentOperand;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function raiseToPow(num1, num2) {
    return Math.pow(num1, num2);
}

function operate(operator, num1, num2) {
    return operator === "+" ? add(num1, num2)
            : operator === "-" ? subtract(num1, num2)
            : operator === "*" ? multiply(num1, num2)
            : operator === "/" ? divide(num1, num2)
            : raiseToPow(num1, num2);
}