require('dotenv').config();
const constants = require('../../data/constants.js');
const createApiUrl = require('../helpers/create-api-url.js');

/**
 * @description Function that creates API url to obtain similar artists
 * @param {String} artist 
 * @returns {String}
 */
const getArtistSimilar = (artist) => {
  const artistInfoQuery = `artist=${artist}`;
  return createApiUrl(constants.rootUrl, constants.methods.artist.getArtistSimilar, process.env.API_KEY, artistInfoQuery);
}

module.exports = getArtistSimilar;