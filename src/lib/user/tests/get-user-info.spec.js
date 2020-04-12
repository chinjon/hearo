const assert = require('assert');
const getUserInfo = require('../get-user-info.js');

const TEST_USER_NAME = 'testusername';

describe('getUserInfo()', () => {
  const API_URL = getUserInfo(TEST_USER_NAME);

  it('should return value of type string', () => {
    assert.deepStrictEqual(typeof API_URL, 'string');
  });

  it('should include the correct search query', () => {
    assert.match(API_URL, /&user=testusername/);
  });
});