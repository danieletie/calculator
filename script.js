function sum(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

let firstNum = '';

let secondNum = '';

let operand = '';

function operate(firstNum, operand, secondNum) {
  if (operand === '+') {
    return sum(firstNum, secondNum)
  } else if (operand === '-') {
    return subtract(firstNum, secondNum)
  } else if (operand === '*') {
    return multiply(firstNum, secondNum)
  } else if (operand === '/') {
    return divide(firstNum, secondNum)
  }
}; 


let numbers = document.querySelectorAll('#num');



numbers.forEach((button) => button.addEventListener('click', () => {
    display.textContent = firstNum;
    if (display.textContent.charAt(0) === '0' ){
      display.textContent = '';
    };
    display.textContent += button.value;
    firstNum = display.textContent;
    console.log(firstNum);
    console.log(typeof firstNum);



}));



console.log(sum (2, 2)) //should return 4

console.log(subtract (2, 2)) //should return 0

console.log(multiply (2, 2)) //should return 4

console.log(divide (2, 2)) //should return 1

console.log(operate(4, '+', 4)) //should return 8

console.log(operate(20, '-', 6)) //should return 14

console.log(operate(20, '*', 6)) //should return 120

console.log(operate(20, '/', 2)) //should return 10
