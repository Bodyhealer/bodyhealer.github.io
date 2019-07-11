/* eslint-disable strict */

'use strict';

const fromCharCode = (num1, num2) => {
  let result = '';
  for (let index = num1; index < num2; index += 1) {
    result += String.fromCharCode(index);
    result += ' ';
  }
  return result;
};

export default fromCharCode;
