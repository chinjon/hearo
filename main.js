require("dotenv").config();
const fetch = require("node-fetch");

const getUserInfo = require("./utils/user/get-user-info.js");

class Hearo {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }

  userInfo(userName) {
    fetch(getUserInfo(userName))
      .then((res) => res.json())
      .then((json) => json);
  }
}

module.exports = Hearo;
