const assert = require('assert');
const createApiUrl = require('../create-api-url.js');

const constants = {
  rootUrl: 'https://www.example.com/?',
  apiKey: '123456789',
  searchMethod: 'user.getinfo',
  searchQuery: '&user=testusername',
  format: 'json',
};

describe('createApiUrl()', () => {
  const API_URL = createApiUrl(
    constants.rootUrl,
    constants.searchMethod,
    constants.apiKey,
    constants.searchQuery,
    constants.format
  );

  it('should return a value of type string', () => {
    assert.deepStrictEqual(typeof API_URL, 'string');
  });
  
  it('should include base API url', () => {
    assert.match(API_URL, /https\:\/\/www.example.com\/\\?/);
  });

  it('should include api key query parameter', () => {
    assert.match(API_URL, /api_key=123456789/);
  });

  it('should include search query query parameter', () => {
    assert.match(API_URL, /user=testusername/);
  });
  
  it('should include search method query parameter', () => {
    assert.match(API_URL, /method=user.getinfo/);
  });

  it('should include format query parameter', () => {
    assert.match(API_URL, /format=json/);
  });
});
