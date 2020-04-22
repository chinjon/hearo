require("dotenv").config();

const getData = require('./lib/helpers/get-data.js');
const getUserInfo = require("./lib/user/get-user-info.js");
const getUserTopArtists = require("./lib/user/get-user-top-artists.js");

class Hearo {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }

  userInfo(userName) {
    getData(getUserInfo(userName))
      .then((res) => res.json())
      .then((json) => json)
      .catch((error) => {
        throw new Error(error);
      });
  }

  userTopArtists(userName) {
    getData(getUserTopArtists(userName))
      .then((res) => res.json())
      .thne((json) => json)
      .catch((error) => {
        throw new Error(error);
      });
  }
}

module.exports = Hearo;
