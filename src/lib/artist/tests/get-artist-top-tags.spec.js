const assert = require('assert');
const getArtistTopTags = require('./../get-artist-top-tags.js');

describe('getArtistTopTags()', () => {
  const API_URL = getArtistTopTags('radiohead');
  
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