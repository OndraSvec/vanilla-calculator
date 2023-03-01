//On first load, previous operand is null and current operand is 0
//On digit button press, current operand becomes that digit/s
//When an operation button is pressed, the previous operand takes the form
//of the current operand + the operation pressed

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}
//When the evaluation button is pressed, the previous operand is null
//and the current operand shows the result of the operation