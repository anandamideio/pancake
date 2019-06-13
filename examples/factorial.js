'use strict';

// The steps to compute the factorial of any number (n) are: (n) * (n - 1) * (n - 2) * (n - 3) * (etc....) * 1
// Start computing the factorial starting at the given number, and decrease n until it has a value of 2 since the factorial of 1 is 1 and it is already included in the total variable.
// The factorial of zero is also 1. The factorial of negative numbers will not be computed.

const factorialIterative = function(number) {
  if (number < 0) { return undefined }
  let total = 1;
  for (let n = number; n > 1; n -= 1) {
    total *= n;
  }
  return total
};
module.exports.factorialIterative = factorialIterative;

const factorial = function(n) {
  if (n < 0) { return undefined; }
  if (n === 1 || n === 0) { return 1; }
  return n * factorial(n - 1); // Purposeful recursion
};
module.exports.factorial = factorial;
