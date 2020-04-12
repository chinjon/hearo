/**
 * @description Helper function that creates a lastfm api url
 * @param {String} rootUrl 
 * @param {String} searchMethod 
 * @param {String} apiKey 
 * @param {String} searchQuery 
 * @param {String} format 
 */
const createApiUrl = (rootUrl, searchMethod, apiKey, searchQuery, format = 'json') => {
  return `${rootUrl}method=${searchMethod}&api_key=${apiKey}&${searchQuery}&format=${format}`;
}

module.exports = createApiUrl;