require('dotenv').config();
const fetch = require('node-fetch');

console.log(process.env.API_KEY)

const ROOT_URL = 'http://ws.audioscrobbler.com/2.0/';
const cher = `?method=album.getinfo&api_key=${process.env.API_KEY}&artist=Cher&album=Believe&format=json`;
const user = `?method=user.getinfo&user=suckstoyourband&api_key=${process.env.API_KEY}&format=json`;



fetch(`${ROOT_URL}${user}`).then((res) => res.json()).then(json => {console.log(json)});
// fetch(`${ROOT_URL}${cher}`).then((res) => {console.log(res.json())})
