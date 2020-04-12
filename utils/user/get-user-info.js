require('dotenv').config();
const constants = require('./../../data/constants.js');
const createApiUrl = require('./../helpers/create-api-url.js');

const getUserInfo = (userName) => {
  const userInfoQuery = `user=${userName}`;
  return createApiUrl(constants.rootUrl, constants.methods.user.getUserInfo, process.env.API_KEY, userInfoQuery);
}

module.exports = getUserInfo;