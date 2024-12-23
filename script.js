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

// function to convert string to number, make sure it is 8 digits in all and remove trailing zeros

function result () {
  return (parseFloat((operate(Number(firstNum), operand, Number(secondNum))).toPrecision(8)));
}


// function to reset all variables

function initVariable() {
  firstNum = '';
  secondNum = '';
  operand = '';
}



let numbers = document.querySelectorAll('button');





numbers.forEach((button) => button.addEventListener('click', () => {

  if (button.value === 'reset') {
    initVariable();
    display.textContent = '0';
  }

  if (button.value === '=' && firstNum.length === 0){
    console.log(`I'm doing nothing cause you clicked '=' when First Number is a ${typeof firstNum} and length is ${firstNum.length}`)
  } else if (button.value === '=' && firstNum.length !== 0 && secondNum.length !== 0) {
    console.log(`First number is '${firstNum}' second number is '${secondNum}' and operator is '${operand}'`);
    console.log(result());
    display.textContent = result();
    initVariable();
  };

 


  if ((button.value === '+' || 
      button.value === '-' ||
      button.value === '*' ||
      button.value === '/') && 
      firstNum.length === 0) {
        console.log(`I'm doing nothing cause you clicked '${button.value}' when First Number is a ${typeof firstNum} and length is ${firstNum.length}`)
  } else if ((button.value === '+' || 
              button.value === '-' ||
              button.value === '*' ||
              button.value === '/') && 
              firstNum.length !== 0 && operand.length === 0 && secondNum.length === 0) {
                console.log('assign button value')
                operand = button.value;
                console.log(operand);
  };








  if (button.value === '0' && firstNum.length === 0) {
    console.log(`I'm doing nothing cause you clicked '${button.value}' when First Number is a ${typeof firstNum} and length is ${firstNum.length}`)
  };


  if (button.value === '.' && firstNum.length === 0 && secondNum.length === 0 && operand.length === 0){
    display.textContent = '0';

  }

  if (button.value === '.' && firstNum.length === 0) {
    display.textContent += button.value;
    firstNum = display.textContent;
  };


  if (button.value === '.' && operand.length !== 0 && secondNum.length === 0) {
    display.textContent = '0' + '.';
    secondNum = display.textContent;
  }





  if ((typeof operand === 'string' && operand.length === 0) &&
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
  

  if ((typeof operand === 'string' && operand.length !== 0)  &&
    ((button.value === '1' ||
      button.value === '2' ||
      button.value === '3' ||
      button.value === '4' ||
      button.value === '5' ||
      button.value === '6' ||
      button.value === '7' ||
      button.value === '8' ||
      button.value === '9' ||
      (button.value === '0' && secondNum.length !== 0) ||
      button.value === '.' && (secondNum.indexOf('.') === -1)))) {
        console.log(`You clicked '${button.value}'`); 
        display.textContent = secondNum;
        display.textContent += button.value;
        secondNum = display.textContent;
        console.log(secondNum);
  };
  
if ((button.value === '+' || 
      button.value === '-' ||
      button.value === '*' ||
      button.value === '/') &&
      firstNum.length !== 0 && operand.length !== 0 && secondNum.length !== 0){
        console.log(`First num is '${firstNum}' secondNum is '${secondNum}' operand is '${operand}'!`)
        console.log('this is new');
        display.textContent = (operate(Number(firstNum), operand, Number(secondNum)));
        firstNum = (operate(Number(firstNum), operand, Number(secondNum)));
        operand = button.value;
        secondNum = ''
};
  


  if (button.value === '0' && ( firstNum.length !== 0) && (typeof operand === 'string' && operand.length !== 0)) {
    console.log(`I'm just checking`)
  }







}));






console.log(sum (2, 2)) //should return 4

console.log(subtract (2, 2)) //should return 0

console.log(multiply (2, 2)) //should return 4

console.log(divide (2, 2)) //should return 1

console.log(operate(4, '+', 4)) //should return 8

console.log(operate(20, '-', 6)) //should return 14

console.log(operate(20, '*', 6)) //should return 120

console.log(operate(20, '/', 2)) //should return 10
