/**
 * @description Helper function that creates a lastfm api url
 * @param {*} rootUrl 
 * @param {*} method 
 * @param {*} apiKey 
 * @param {*} searchQuery 
 * @param {*} format 
 */
const createApiUrl = (rootUrl, method, apiKey, searchQuery, format = 'json') => {
  return `${rootUrl}method=${method}&api_key=${apiKey}&${searchQuery}&format=${format}`;
}

module.exports = createApiUrl;