const assert = require('assert');
const getArtistInfo = require('./../get-artist-info.js');

describe('getArtistInfo()', () => {
  const API_URL = getArtistInfo('radiohead');
  
  it('should return a value of type string', () => {
    assert.deepStrictEqual(typeof API_URL, 'string');
  });
  
  it('should include the correct method in API url', () => {
    assert.doesNotMatch(API_URL, /&method=undefined/);
  });

  it('should include the correct search query', () => {
    assert.match(API_URL, /&artist=radiohead/);
  });

  it('should include "&artist=undefined" in search query', () => {
    assert.doesNotMatch(API_URL, /&artist=undefined/);
  });
});