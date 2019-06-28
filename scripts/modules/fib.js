/* eslint-disable strict */

'use strict';

const fib = (num) => {  
  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 1;
  }
  let prev1 = 1;
  let prev2 = 1;
  let result = 0;
  for (let index = 2; index < num; index += 1) {
    result = prev1 + prev2;
    prev1 = prev2;
    prev2 = result;
  }
  return result;
};

export default fib;
