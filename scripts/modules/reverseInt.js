/* eslint-disable strict */

'use strict';

const reverseInt = (num) => {
  const sign = Math.sign(num);
  const absNum = Math.abs(num);
  const str = String(absNum);
  let result = '';
  if (sign === -1) {
    result += '-';
  }
  for (let index = str.length - 1; index >= 0; index -= 1) {
    result += str[index];
  }
  return result;
};

export default reverseInt;
