/* eslint-disable strict */

'use strict';

/**
 * Fizz Buzz.
 *
 * @param {*} begin from that number.
 * @param {*} end to that number.
 * @returns string with fizzes and buzzes.
 */
const fizzBuzz = (begin, end) => {
  if (begin > end) {
    return '';
  }
  let result = '';
  for (let i = begin; i <= end; i += 1) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        result += 'FizzBuzz<br>';
      }
      result += 'Fizz';
      if (i !== end) {
        result += ', ';
      }
    } else if (i % 5 === 0) {
      result += 'Buzz';
      if (i !== end) {
        result += ', ';
      }
    } else {
      result += `${i}`;
      if (i !== end) {
        result += ', ';
      }
    }
  }
  return result;
};

export default fizzBuzz;
