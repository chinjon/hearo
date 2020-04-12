const assert = require('assert');
const Hearo = require('../main.js');

const hearo = new Hearo();

describe('Hearo', () => {
  it('should be of type object', () => {
    assert.deepStrictEqual(typeof hearo, 'object');
  });
});