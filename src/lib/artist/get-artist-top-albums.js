require('dotenv').config();
const constants = require('../../data/constants.js');
const createApiUrl = require('../helpers/create-api-url.js');

const getArtistTopAlbums = (artist) => {
  const artistInfoQuery = `artist=${artist}`;
  return createApiUrl(constants.rootUrl, constants.methods.artist.getArtistTopAlbums, process.env.API_KEY, artistInfoQuery);
}

module.exports = getArtistTopAlbums;