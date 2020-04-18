const assert = require('assert');
const getArtistSimilar = require('./../get-artist-similar.js');

describe('getArtistSimilar()', () => {
  const API_URL = getArtistSimilar('radiohead');

  it('should return a value of type string', () => {
    assert.deepStrictEqual(typeof API_URL, 'string');
  });

  it('should include the correct search query', () => {
    assert.match(API_URL, /&artist=radiohead/);
  });
});