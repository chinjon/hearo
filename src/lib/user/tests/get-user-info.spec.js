const assert = require('assert');
const getUserInfo = require('../get-user-info.js');

describe('getUserInfo()', () => {
  const API_URL = getUserInfo('testusername');

  it('should return value of type string', () => {
    assert.deepStrictEqual(typeof API_URL, 'string');
  });

  it('should include the correct method in API url', () => {
    assert.doesNotMatch(API_URL, /&method=undefined/);
  });

  it('should include the correct search query', () => {
    assert.match(API_URL, /&user=testusername/);
  });
});