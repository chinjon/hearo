require('dotenv').config();
const constants = require('../../data/constants.js');
const createApiUrl = require('../helpers/create-api-url.js');

/**
 * @description Function that creates API url to obtain an artist's top tracks
 * @param {String} artist 
 * @returns {String}
 */
const getArtistTopTracks = (artist) => {
  const artistInfoQuery = `artist=${artist}`;
  return createApiUrl(constants.rootUrl, constants.methods.user.getArtistTopTracks, process.env.API_KEY, artistInfoQuery);
}

module.exports = getArtistTopTracks;