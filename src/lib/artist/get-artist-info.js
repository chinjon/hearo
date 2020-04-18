require('dotenv').config();
const constants = require('../../data/constants.js');
const createApiUrl = require('../helpers/create-api-url.js');

/**
 * @description Abstraction of artist.getArtistInfo method
 * @param {String} artist 
 * @returns {String} returns API url to search for artist data
 */
const getArtistInfo = (artist) => {
  const artistInfoQuery = `artist=${artist}`;
  return createApiUrl(constants.rootUrl, constants.methods.user.getArtistInfo, process.env.API_KEY, artistInfoQuery);
}

module.exports = getArtistInfo;
