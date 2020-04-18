require('dotenv').config();
const constants = require('../../data/constants.js');
const createApiUrl = require('../helpers/create-api-url.js');

const getArtistTopTracks = (artist) => {
  const artistInfoQuery = `artist=${artist}`;
  return createApiUrl(constants.rootUrl, constants.methods.user.getArtistTopTracks, process.env.API_KEY, artistInfoQuery);
}

module.exports = getArtistTopTracks;