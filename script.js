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


let numbers = document.querySelectorAll('button');



// numbers.forEach((button) => button.addEventListener('click', () => {
//     display.textContent = firstNum;
//     if (display.textContent.charAt(0) === '0' ){
//       display.textContent = '';
//     };
//     display.textContent += button.value;
//     firstNum = display.textContent;
//     console.log(firstNum);
//     console.log(typeof firstNum);
// }));


numbers.forEach((button) => button.addEventListener('click', () => {
  if (button.value === '=' && typeof firstNum === 'string' && firstNum.length === 0){
    console.log(`I'm doing nothing cause you clicked '=' when First Number is a ${typeof firstNum} and length is ${firstNum.length}`)
  } else if (button.value === '=' && (typeof firstNum === 'string' && firstNum.length !== 0) && (typeof secondNum === 'string' && secondNum.length !== 0)) {
    console.log(`First number is '${firstNum}' second number is '${secondNum}' and operator is '${operand}'`);
    console.log(operate(Number(firstNum), operand, Number(secondNum)));
    display.textContent = operate(Number(firstNum), operand, Number(secondNum));
    firstNum = '';
    secondNum = '';
    operand = '';
  };


  if ((button.value === '+' || 
      button.value === '-' ||
      button.value === '*' ||
      button.value === '/') && 
      typeof firstNum === 'string' &&
      firstNum.length === 0) {
        console.log(`I'm doing nothing cause you clicked '${button.value}' when First Number is a ${typeof firstNum} and length is ${firstNum.length}`)
  };

  if (button.value === '0' && typeof firstNum === 'string' && firstNum.length === 0) {
    console.log(`I'm doing nothing cause you clicked '${button.value}' when First Number is a ${typeof firstNum} and length is ${firstNum.length}`)
  };






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
      (button.value === '0' &&  typeof firstNum === 'string' && firstNum.length !== 0))) {
        console.log(`You clicked '${button.value}'`);
        display.textContent = firstNum;
        display.textContent += button.value;
        firstNum = display.textContent;
        console.log(firstNum);
        console.log(firstNum.length);
  };

  if ((button.value === '+' || 
        button.value === '-' ||
        button.value === '*' ||
        button.value === '/') && 
        typeof firstNum === 'string' &&
        firstNum.length !== 0) {
    operand = button.value;
    console.log(`We've assigned operator as '${button.value}' because there's a First Number now and it's ${firstNum}`);
    console.log(secondNum);
  };


  if (button.value === '0' && typeof firstNum === 'string' && firstNum.length !== 0 && typeof operand === 'string' && operand.length !== 0) {
    console.log(`I'm just checking`)
  }

  if ((typeof operand === 'string' && operand.length !== 0) &&
      ((button.value === '1' ||
        button.value === '2' ||
        button.value === '3' ||
        button.value === '4' ||
        button.value === '5' ||
        button.value === '6' ||
        button.value === '7' ||
        button.value === '8' ||
        button.value === '9' ||
        (button.value === '0' &&  typeof secondNum === 'string' && secondNum.length !== 0)))) {
          console.log(`You clicked '${button.value}'`);
          display.textContent = secondNum;
          display.textContent += button.value;
          secondNum = display.textContent;
  };



//   if ((button.value === '+' || 
//     button.value === '-' ||
//     button.value === '*' ||
//     button.value === '/') && 
//     (typeof firstNum === 'string' &&
//     firstNum.length !== 0) && 
//     (typeof seconNum === 'string' &&
//       secondNum.length !== 0
//     )) {
//   operand = button.value;
//   console.log(`We've assigned operator as '${button.value}' because there's a First Number now and it's ${firstNum}`);
//   console.log(secondNum);
// };

}));













// document.querySelectorAll('#opr').forEach((button) => button.addEventListener('click', () => {
//   if (button.value === '+'){
//     operand = '+';
//     console.log(operand);
//   };
//   display.textContent = secondNum;
//   display.textContent += button.value;
//   secondNum = display.textContent;
//   console.log(`Second number is ${secondNum}`);
//   console.log(typeof secondNum);
// }));



// function variable1 () {
//   if (typeof firstNum === 'string' && firstNum.length === '0'){
//     display.textContent += button.value;
//     firstNum = display.textContent;
//     return firstNum;
//   }
// }



console.log(sum (2, 2)) //should return 4

console.log(subtract (2, 2)) //should return 0

console.log(multiply (2, 2)) //should return 4

console.log(divide (2, 2)) //should return 1

console.log(operate(4, '+', 4)) //should return 8

console.log(operate(20, '-', 6)) //should return 14

console.log(operate(20, '*', 6)) //should return 120

console.log(operate(20, '/', 2)) //should return 10
