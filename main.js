require('dotenv').config();
const fetch = require('node-fetch');

const getUserInfo = require('./utils/user/get-user-info.js');

fetch(getUserInfo('suckstoyourband')).then((res) => res.json()).then(json => {console.log(json)});
