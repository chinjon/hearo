const fetch = require("node-fetch");

/**
 * @description Abstraction of fetch module for project
 * @param {String} url 
 * @returns {Object}
 */
const getData = async (url) => {
  const response = await fetch(url)
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
  
    return await response;
}

module.exports = getData;