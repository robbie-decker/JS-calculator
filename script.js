const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.operation')
const clearButton = document.getElementById("clear");
const currentDisplay = document.getElementById('currentOperation');
const prevDisplay = document.getElementById('prevOperation');
const equalsButton = document.getElementById('equals');

let displayNumber;
let previousNumber;
let currentOperation = null;
let shouldEvaluate = true;

// we use the .forEach method to iterate through each number
numbers.forEach((number) => {
  // and for each one we add a 'click' listener
  number.addEventListener('click', () => {
    // User has now inputted a new number. WE CAN EVALUATE
    if(shouldEvaluate === false){
      currentDisplay.textContent = "";
      shouldEvaluate = true;
    }
    currentDisplay.textContent += number.textContent;
    displayNumber = +currentDisplay.textContent;
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", () => {
    if(previousNumber === undefined){
      previousNumber = displayNumber;
    }
    if(currentOperation !== null){
      evaluate();
    }
    currentOperation = operation.textContent;
    previousNumber = displayNumber;
    // User has not input a new number yet
    shouldEvaluate = false;
  });
});

equalsButton.addEventListener('click', evaluate);

clearButton.addEventListener('click', () => {
  currentDisplay.textContent = "";
  currentOperation = null;
  displayNumber = undefined;
  previousNumber = undefined;
});


function evaluate(){
  // Want to only evaluate if a new number is pressed. Wait until then
  if(currentOperation === null || shouldEvaluate === false) return;

  console.log(`currentDisplay: ${displayNumber}   prev: ${previousNumber}  currentOP: ${currentOperation}`);
  displayNumber = operate(currentOperation, displayNumber, previousNumber);
  currentDisplay.textContent = displayNumber;
  previousNumber = displayNumber; 
  currentOperation = null;
}

function add(a, b) {
    return a + b;
}
  
function subtract(a, b) {
    return b - a;
}
  
function multiply(a, b) {
  let myNum = a * b;
  return Math.round((myNum + Number.EPSILON) * 1000) / 1000
}

function divide(a, b){
    let myNum = b / a;
    return Math.round((myNum + Number.EPSILON) * 1000) / 1000
}

function operate(operator, a, b){
  switch(operator){
    case "+":
      return add(a,b);
    case "-":
      return subtract(a,b);
    case "*":
      return multiply(a,b)
    case "/":
      return divide(a,b)
  }
}