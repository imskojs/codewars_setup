let assert = require('chai').assert;
require('../src/jaden_casing_strings');
let calculateYears = require('../src/money,money,money');
let findOutlier = require('../src/find_the_parity_outlier');

describe('Jaden Casing String', () => {
  it('should capitalize every word', () => {
    assert.equal(
      "How can mirrors be real if our eyes aren't real".toJadenCase(),
      "How Can Mirrors Be Real If Our Eyes Aren't Real");
  });
});

describe('Money,Money,Money', () => {
  it('should return correct number of years to achieve desired amount', () => {
    assert.equal(calculateYears(1000, 0.05, 0.18, 1100), 3);
    assert.equal(calculateYears(1000,0.01625,0.18,1200), 14);
    assert.equal(calculateYears(1000,0.05,0.18,1000), 0);
  });
});

describe('what?', function () {
  it('should return N, unique odd or even number(outlier)', function () {
    assert.equal(findOutlier([0, 1, 2]), 1);
    assert.equal(findOutlier([1, 2, 3]), 2);
    assert.equal(findOutlier([2,6,8,10,3]), 3);
    assert.equal(findOutlier([0,0,3,0,0]), 3);
    assert.equal(findOutlier([1,1,0,1,1]), 0);
  });
});