const assert = require('assert');
const getUserRecentTracks = require('../get-user-recent-tracks.js');

const TEST_USER_NAME = 'testusername';

describe('getUserRecentTracks()', () => {
  const API_URL = getUserRecentTracks(TEST_USER_NAME);

  it('should return value of type string', () => {
    assert.deepStrictEqual(typeof API_URL, 'string');
  });

  it('should include the correct search query', () => {
    assert.match(API_URL, /&user=testusername/);
  });
});