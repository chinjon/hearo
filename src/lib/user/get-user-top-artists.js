require('dotenv').config();
const constants = require('../../data/constants.js');
const createApiUrl = require('../helpers/create-api-url.js');

/**
 * @description Abstraction of user.getTopArtists method
 * @param {String} artist 
 * @returns {String} returns API url to search for user top tracks
 */
const getUserTopArtists = (user) => {
  const artistInfoQuery = `user=${user}`;
  return createApiUrl(constants.rootUrl, constants.methods.user.getUserTopArtists, process.env.API_KEY, artistInfoQuery);
}

module.exports = getUserTopArtists;
