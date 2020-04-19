require('dotenv').config();
const constants = require('../../data/constants.js');
const createApiUrl = require('../helpers/create-api-url.js');

/**
 * @description Function that generates API url for getting a user's recent tracks
 * @param {String} user - valid LastFM user name
 * @returns {String}
 */
const getUserRecentTracks = (user) => {
  const userInfoQuery = `user=${user}`;
  return createApiUrl(constants.rootUrl, constants.methods.user.getUserRecentTracks, process.env.API_KEY, userInfoQuery);
}

module.exports = getUserRecentTracks;