/* eslint-disable strict */

'use strict';

/**
 * Calculate Ackermann number.
 *
 * @param {*} num1 First number.
 * @param {*} num2 Second number.
 * @returns
 */
const ackermann = (num1, num2) => {
  if (num1 === 0) {
    return num2 + 1;
  }
  if (num2 === 0) {
    return ackermann(num1 - 1, 1);
  }
  return ackermann(num1 - 1, ackermann(num1, num2 - 1));
};

export default ackermann;
