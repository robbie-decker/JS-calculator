const numbers = document.querySelectorAll('.numbers');
const clearButton = document.getElementById("clear");
const display = document.getElementById('display');

let displayNumber;

// we use the .forEach method to iterate through each number
numbers.forEach((number) => {
  // and for each one we add a 'click' listener
  number.addEventListener('click', () => {
  display.textContent = display.textContent + number.textContent;
  displayNumber = +display.textContent
  console.log(displayNumber);
  });
});

clearButton.addEventListener('click', () => {
  display.textContent = "";
  displayNumber = 0;
});


function add(a, b) {
    return a + b;
}
  
function subtract(a, b) {
    return a - b;
}
  
function sum(array) {
    return array.reduce((total, current) => total + current, 0);
}
  
function multiply(array) {
   return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
  switch(operator){
    case "+":
      add(a,b)
      break;
    case "-":
      subtract(a,b);
      break;
    case "*":
      multiply(a,b)
      break;
    case "/":
      divide(a,b)
      break;
  }
}

// 