let assert = require('chai').assert;
require('./jaden_casing_strings');

describe('Jaden Casing String', () => {
  it('should capitalize every word', () => {
    assert("How can mirrors be real if our eyes aren't real".toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
  });
})