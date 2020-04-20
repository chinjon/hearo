const assert = require('assert');
const getUserTopArtists = require('../get-user-top-artists.js');

describe('getUserTopArtists()', () => {
  const API_URL = getUserTopArtists('testusername');

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