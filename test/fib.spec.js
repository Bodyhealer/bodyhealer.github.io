/* eslint-disable prefer-spread */
/* eslint-disable prefer-template */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-destructuring */

import fib from '../scripts/modules/fib.js';

const chai = require('chai');

// const assert = chai.assert;
const expect = chai.expect;
// const should = chai.should();

describe('fib', function () {
  it('8th Fibonacci number must be 21', function () {
    expect(fib(8)).to.equal(21);
  });
  it('8th Fibonacci number must not be 20', function () {
    expect(fib(8)).to.not.equal(20);
  });
});
