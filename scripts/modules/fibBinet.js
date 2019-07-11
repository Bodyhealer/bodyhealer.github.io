/* eslint-disable strict */

'use strict';

const fibBinet = (num) => {
  const phi = (1 + Math.sqrt(5)) / 2;
  const result = Math.round((phi ** num) / Math.sqrt(5));
  return result;
};

export default fibBinet;
