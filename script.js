function add(a, b) {
    return a + b;
  };
  
function subtract(a, b) {
    return a - b;
  };
  
function sum(array) {
    return array.reduce((total, current) => total + current, 0);
  };
  
function multiply(array) {
    return array.length
      ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
  };
  
function power(a, b) {
    return Math.pow(a, b);
  };

  // This is another implementation of Factorial that uses recursion
  // THANKS to @ThirtyThreeB!
function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * recursiveFactorial(n - 1);
  };

  