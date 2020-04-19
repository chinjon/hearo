require('dotenv').config();
const constants = require('../../data/constants.js');
const createApiUrl = require('../helpers/create-api-url.js');

/**
 * @description Function that creates API url to obtain artist's top albums
 * @param {String} artist 
 * @returns {String}
 */
const getArtistTopAlbums = (artist) => {
  const artistInfoQuery = `artist=${artist}`;
  return createApiUrl(constants.rootUrl, constants.methods.artist.getArtistTopAlbums, process.env.API_KEY, artistInfoQuery);
}

module.exports = getArtistTopAlbums;