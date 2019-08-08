/* eslint-disable strict */

'use strict';

/* const factorialRecur = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

const factorialWhile = (n) => {
  let counter = 1;
  let result = 1;

  while (counter <= n) {
    result *= counter;
    counter++;
  }

  return result;
}; */

/**
 * Calculate factorial with 'for'.
 *
 * @param {*} n number.
 * @returns
 */
const factorialFor = (n) => {
  let result = 1;

  for (let i = 1; i <= n; i += 1) {
    result *= i;
  }

  return result;
};

export default factorialFor;
