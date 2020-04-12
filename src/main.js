require("dotenv").config();

const getData = require('./lib/helpers/get-data.js');
const getUserInfo = require("./lib/user/get-user-info.js");

class Hearo {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }

  userInfo(userName) {
    getData(getUserInfo(userName))
      .then((res) => res.json())
      .then((json) => json);
  }
}

module.exports = Hearo;
