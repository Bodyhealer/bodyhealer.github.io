/* eslint-disable strict */

'use strict';

/**
 * Prime numbers using Eratosthenes Sieve.
 *
 * @param {*} num before that number.
 * @returns array of prime numbers.
 */
const eratosthenesSieve = (num) => {
  let resultString = '';
  let arrNumbers = [];
  let newArrNumbers = [];
  // take only Odd numbers
  for (let index = 3; index < num + 1; index += 2) {
    arrNumbers.push(index);
  }
  while (arrNumbers.length > 0) {
    resultString += arrNumbers[0];
    if (arrNumbers.length > 1) {
      resultString += ', ';
    }
    for (let index = 1; index < arrNumbers.length; index += 1) {
      const element = arrNumbers[index];
      if (element % arrNumbers[0] !== 0) {
        newArrNumbers.push(element);
      }
    }
    arrNumbers = newArrNumbers;
    newArrNumbers = [];
  }
  return resultString;
};

export default eratosthenesSieve;
