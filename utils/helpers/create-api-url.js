/**
 * @description Helper function that creates a lastfm api url
 * @param {String} rootUrl Base API url
 * @param {String} searchMethod Native search methods from LastFM API
 * @param {String} apiKey Unique API key
 * @param {String} searchQuery Query parameters for search query
 * @param {String} format Format of output: either JSON or XML
 * @returns {String} Returns LastFM API URL to execute API call
 */
const createApiUrl = (rootUrl, searchMethod, apiKey, searchQuery, format = 'json') => {
  return `${rootUrl}method=${searchMethod}&api_key=${apiKey}&${searchQuery}&format=${format}`;
}

module.exports = createApiUrl;