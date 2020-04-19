require('dotenv').config();
const constants = require('../../data/constants.js');
const createApiUrl = require('../helpers/create-api-url.js');

/**
 * @description Function that creates API url to obtain an artist's top tags
 * @param {String} artist 
 * @returns {String}
 */
const getArtistTopTags = (artist) => {
  const artistInfoQuery = `artist=${artist}`;
  return createApiUrl(constants.rootUrl, constants.methods.artist.getArtistTopTags, process.env.API_KEY, artistInfoQuery);
}

module.exports = getArtistTopTags;