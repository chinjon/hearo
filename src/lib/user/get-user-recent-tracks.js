require('dotenv').config();
const constants = require('../../data/constants.js');
const createApiUrl = require('../helpers/create-api-url.js');

const getUserRecentTracks = (user) => {
  const userInfoQuery = `user=${user}`;
  return createApiUrl(constants.rootUrl, constants.methods.user.getUserRecentTracks, process.env.API_KEY, userInfoQuery);
}

module.exports = getUserRecentTracks;