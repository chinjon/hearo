const assert = require('assert');
const getArtistTopAlbums = require('./../get-artist-top-albums.js');

describe('getArtistTopAlbums()', () => {
  const API_URL = getArtistTopAlbums('radiohead');
  
  it('should return a value of type string', () => {
    assert.deepStrictEqual(typeof API_URL, 'string');
  });

  it('should include the correct search query', () => {
    assert.match(API_URL, /&artist=radiohead/);
  });
});