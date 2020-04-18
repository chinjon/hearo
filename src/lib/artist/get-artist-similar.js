require('dotenv').config();
const constants = require('../../data/constants.js');
const createApiUrl = require('../helpers/create-api-url.js');

const getArtistSimilar = (artist) => {
  const artistInfoQuery = `artist=${artist}`;
  return createApiUrl(constants.rootUrl, constants.methods.user.getArtistSimilar, process.env.API_KEY, artistInfoQuery);
}

module.exports = getArtistSimilar;