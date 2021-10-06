const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
// const helper = require('../helpers/github');
// const save = require('../database/index.js')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({ extended: true }))


app.post('/repos', function (req, res) {
  console.log('POST Route Sucessful');
  // console.log(req.body.term);
  // helper.getReposByUsername(req.body.term);
  res.end();
});

app.get('/repos', function (req, res) {
  console.log('GET Route Sucessful');
  // res.send();
  // TODO - your code here!
  // This route should send back the top 25 repos
  // save.getTop25Repos()
  // .then(result => {
  //   res.send(result)
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  res.end();
});

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
})

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

