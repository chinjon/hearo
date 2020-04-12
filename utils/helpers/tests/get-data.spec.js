require('dotenv').config();
const assert = require('assert');
const getData = require('../get-data.js');
const constants = require('../../../data/constants.js');
const createApiUrl = require('../create-api-url.js');

describe('getData()', () => {
  const API_URL = createApiUrl(
    constants.rootUrl,
    constants.methods.user.getUserInfo,
    process.env.API_KEY,
    '&user=sharonvanetten',
    'json'
  );

  it('should return value of type object', () => {
    getData(API_URL).then((data) => {
      assert.deepStrictEqual(typeof data, 'object');
    });
  });

  it('should return a response of 200', () => {
    getData(API_URL).then((data) => {
      assert.deepStrictEqual(data.status, 200);
    });
  });
});
