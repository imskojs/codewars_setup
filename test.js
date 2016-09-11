let assert = require('chai').assert;
require('./jaden_casing_strings');
let calculateYears = require('./money,money,money');

describe('Jaden Casing String', () => {
  it('should capitalize every word', () => {
    assert.equal(
      "How can mirrors be real if our eyes aren't real".toJadenCase(),
      "How Can Mirrors Be Real If Our Eyes Aren't Real");
  });
});

describe('Money,Money,Money', () => {
  it('should return correct number of years to achieve desired', () => {
    assert.equal(calculateYears(1000, 0.05, 0.18, 1100), 3);
    assert.equal(calculateYears(1000,0.01625,0.18,1200), 14);
    assert.equal(calculateYears(1000,0.05,0.18,1000), 0);
  });
});

