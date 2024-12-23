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

let newNumber = 0;

// function to run arithmetic operation on firstNum, operand, and secondNum depending on operator clicked

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

/*
function to convert string result  to number, make sure it is 9 digits in all and remove trailing zeros
*/


function result () {
  newNumber = ((operate(Number(firstNum), operand, Number(secondNum))).toPrecision(9));
  if (parseFloat(newNumber) === Infinity){
    return 'lmao'
  }else if ((parseFloat(newNumber).toString()).length >= 10){
    return parseFloat(newNumber).toExponential(4);
  }else return parseFloat(newNumber);
}



// function to reset all variables

function initVariable() {
  firstNum = '';
  secondNum = '';
  operand = '';
}

// variable to target buttons

let numbers = document.querySelectorAll('button');



// event listener to listen to mouse click

numbers.forEach((button) => button.addEventListener('click', () => {

  // reset all variables and display when reset button is clicked
  if (button.value === 'reset') {
    initVariable();
    display.textContent = '0';
  }

  // show result when equal button is cliecked also check for infinity

  if (button.value === '=' && firstNum.length === 0){
  } else if (button.value === '=' && firstNum.length !== 0 && secondNum.length !== 0) {
    if (result() === Infinity){
      display.textContent = result();
      initVariable();
    } else {
      display.textContent = result();
      initVariable();
    }
  };

  /*
  delete last digit of variables if del button is clicked, do nothing if operand was last clicked and set display to zero when variables become empty strings
  */

  if (button.value === 'del' && firstNum.length !== 0 && operand.length === 0){
    firstNum = firstNum.slice(0, -1);
    display.textContent = firstNum;
    if (firstNum === ''){
      display.textContent = '0';
    }    
  } else if (button.value === 'del' && firstNum.length !== 0 && operand.length !== 0){
    secondNum = secondNum.slice(0, -1);
    display.textContent = secondNum;
    if (secondNum === ''){
      display.textContent = '0';
    }
  };

/*
check when operator buttons are clicked and assign values to firstNum and secondNum as the case may be
*/

  if ((button.value === '+' || 
      button.value === '-' ||
      button.value === '*' ||
      button.value === '/') && 
      firstNum.length === 0 && display.textContent === '0') {
        firstNum = display.textContent;
        operand = button.value
  } else if ((button.value === '+' || 
      button.value === '-' ||
      button.value === '*' ||
      button.value === '/') &&
      display.textContent === '0' && firstNum.length !== 0 && operand.length !== 0){
        secondNum = display.textContent;
  }

  if ((button.value === '+' || 
        button.value === '-' ||
        button.value === '*' ||
        button.value === '/') && 
        (firstNum.length !== 0 && operand !== 0 && secondNum.length === 0)){
          operand = button.value;
  };


  // check if buttons decimal button is clicked and variables are empty
  if (button.value === '.' && firstNum.length === 0) {
    display.textContent += button.value;
    firstNum = display.textContent;
  };
  if (button.value === '.' && operand.length !== 0 && secondNum.length === 0) {
    display.textContent = '0' + '.';
    secondNum = display.textContent;
  }



/*
check if buttons are numbers or decimal, assign and display them but stop accepting input when character limit is reached
*/

  if ((operand.length === 0) && (firstNum.length <= 9) &&
      (button.value === '1' ||
      button.value === '2' ||
      button.value === '3' ||
      button.value === '4' ||
      button.value === '5' ||
      button.value === '6' ||
      button.value === '7' ||
      button.value === '8' ||
      button.value === '9' ||
      (button.value === '0' && firstNum.length !== 0) ||
      (button.value === '.' && (firstNum.indexOf('.') === -1)))){
        console.log(`You clicked '${button.value}'`);
        display.textContent = firstNum;
        display.textContent += button.value;
        firstNum = display.textContent;
        console.log(firstNum);
        console.log(firstNum.length);
  };
  

  if ((operand.length !== 0)  && (secondNum.length <= 9) &&
    ((button.value === '1' ||
      button.value === '2' ||
      button.value === '3' ||
      button.value === '4' ||
      button.value === '5' ||
      button.value === '6' ||
      button.value === '7' ||
      button.value === '8' ||
      button.value === '9' ||
      (button.value === '0') ||
      (button.value === '.' && (secondNum.indexOf('.') === -1))))) { 
        display.textContent = secondNum;
        display.textContent += button.value;
        secondNum = display.textContent;
        console.log(secondNum);
  };
  
  /*
  check if button is operator, and first and second numbers are not empty, calc result and assign result to first number and set second number to an empty string
  */

  if ((button.value === '+' || 
        button.value === '-' ||
        button.value === '*' ||
        button.value === '/') &&
        firstNum.length !== 0 && operand.length !== 0 && secondNum.length !== 0){
          console.log(`First num is '${firstNum}' secondNum is '${secondNum}' operand is '${operand}'!`)
          console.log('this is new');
          if (display.textContent ==='0'){
            console.log('gotcha');
            display.textContent = result();
            initVariable();
          } else {
            display.textContent = result();
            firstNum = display.textContent;
            operand = button.value;
            secondNum = '';
          };
  };

}));

