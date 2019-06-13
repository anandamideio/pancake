'use strict';

const fibonacci = function(n) {
  if (n < 1) { return 0; }
  if (n <= 2) { return 1; }
  return fibonacci(n - 1) + fibonacci(n - 2); // Purposeful recursion, stops when done calculating
};
module.exports.fibonacci = fibonacci;

const fibonacciIterative = function(n) {
  if (n < 1) { return 0; }
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) {
    fibN = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }
  return fibN;
};
module.exports.fibonacciIterative = fibonacciIterative;


const fibonacciMemoization = function(n) {
  if (n < 1) { return 0; }
  const memo = [0, 1];
  const fibonacciMem = num => {
    if (memo[num] != null) { return memo[num]; }
    return (memo[num] = fibonacciMem(num - 1) + fibonacciMem(num - 2));
  };
  return fibonacciMem(n);
};
module.exports.fibonacciMemoization = fibonacciMemoization;
