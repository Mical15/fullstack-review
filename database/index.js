const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');
// const db = mongoose.connection;
const db = mongoose.createConnection('mongodb://localhost/fetcher');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/fetcher';

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('we\'re connected to MongoDB!');
});

let repoSchema = new mongoose.Schema({
  'userName': String, //owner.login
  'repoId': String, //id
  'repopName': String, //name
  'repoUrl': String, //html_url
  'likes': Number, //stargazers_count
  'repoDescription': String //description

});

let Repo = mongoose.model('Repo', repoSchema);

let save = function (owner_login, id, name, html_url, stargazers_count, description) {
  // MongoClient.connect(url, function (err, db) {
  //   var cursor = db.collection('repos').find();
  //   cursor.each(function (err, doc) {
  //     console.log(doc);
  //   });
  // });
  MongoClient.connect(url, function (err, db) {
    // var cursor = db.collection('repos').find()
    if (!(db.collection('repos').find({ repoId: id }))) {
      var repos = new Repo({
        'userName': owner_login,
        'repoId': id,
        'repopName': name,
        'repoUrl': html_url,
        'likes': stargazers_count,
        'repoDescription': description,
      }).save((err, data) => {
        if (err) {
          return console.error(err)
        } else {
          console.log('data saved sucessfully');
        }
      })
    } else {
      return console.log('Repo(s) is in the datasbase arealdy');
    }
  });
}
// async function
 let getTop25Repos = () => {
  // let tempArray = [];
  // var cursor = db.collection('repos').find();
  // let result = await cursor.toArray();
  // if (result.length > 0) { .find().sort().limit(25)
  //   result.forEach((result, i) => {
  //     tempArray.push(result)
  //   });
  // } else {
  //   console.log(`No customers found`);
  // }
  // let tempArray2 = tempArray.sort((a, b) => (a.likes > b.likes) ? -1 : 1).slice(0, 25);
  // console.log(tempArray2);
  // return tempArray2;
  // MongoClient.connect(url, function (err, db) {
   return db.collection('repos').find().sort({likes: -1}).limit(25)
  // .catch(function (error) {
  //   console.log(error);
  // });
  // });
  // .catch(err) => {
  //   return err;
  // }

}


module.exports.getTop25Repos = getTop25Repos;
module.exports.save = save;