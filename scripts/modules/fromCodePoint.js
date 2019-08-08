/* eslint-disable strict */

'use strict';

/**
 * Symbols by its code points.
 *
 * @param {*} num1 from.
 * @param {*} num2 to.
 * @returns string of symbols.
 */
const fromCodePoint = (num1, num2) => {
  let result = '';
  for (let index = num1; index < num2; index += 1) {
    result += String.fromCodePoint(index);
    result += ' ';
  }
  return result;
};

export default fromCodePoint;
