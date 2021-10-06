const axios = require('axios');
const config = require('../config.js');
const save = require('../database/index.js')

let getReposByUsername = (username) => {
  let options = {
    url: 'https://api.github.com/users/' + username +'/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get( options.url, options.headers )
  .then(function (response) {
    let tempArray = [];
    for (var i = 0; i < response.data.length; i++) {
      tempArray.push({
        'userName': response.data[i].owner.login,
        'repoName': response.data[i].name,
        'id': response.data[i].id,
        'likes': response.data[i].stargazers_count,
        'url': response.data[i].html_url,
        'description': response.data[i].description
      })
    }
    // let tempArray2 = tempArray.sort((a,b) => (a.likes > b.likes) ? -1 : 1).slice(0, 25);
    // console.log(tempArray2);
    for (var i = 0; i < tempArray.length; i++) {
      save.save(tempArray[i].userName, tempArray[i].id, tempArray[i].repoName, tempArray[i].url, tempArray[i].likes, tempArray[i].description);
    }
    // console.log(tempArray2[0].id)
    tempArray = [];
    // tempArray2 = [];
    // console.log(tempArray2.length);
  })
  // Logic to get other info that I need
  .catch(function (error) {
    console.log(error);
  });
}


module.exports.getReposByUsername = getReposByUsername;