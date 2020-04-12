require('dotenv').config();
const assert = require('assert');
const getData = require('../get-data.js');
const constants = require('../../../data/constants.js');
const createApiUrl = require('../create-api-url.js');

describe('getData()', () => {
  const TEST_CONSTANTS = {
    SUCCESS: createApiUrl(
      constants.rootUrl,
      constants.methods.user.getUserInfo,
      process.env.API_KEY,
      '&user=sharonvanetten',
      'json'
    ),
    FAIL: createApiUrl(
      constants.rootUrl,
      constants.methods.user.getUserInfo,
      12345,
      '&user=sharonvanetten',
      'json'
    )
  }

  it('should return value of type object', () => {
    getData(TEST_CONSTANTS.SUCCESS).then((data) => {
      assert.deepStrictEqual(typeof data, 'object');
    });
  });

  it('should return a response of 200 with valid API key', () => {
    getData(TEST_CONSTANTS.SUCCESS).then((data) => {
      assert.deepStrictEqual(data.status, 200);
    });
  });

  it('should return a response of 400 with invalid API key', () => {
    getData(TEST_CONSTANTS.FAIL).then((data) => {
      assert.deepStrictEqual(data.status >= 400, true);
    });
  });
});
