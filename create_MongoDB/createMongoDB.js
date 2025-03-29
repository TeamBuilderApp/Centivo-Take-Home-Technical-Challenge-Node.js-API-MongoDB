//var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
//Create a database named "usersDB": See README.md for explination of this file, and how to run it.
var url = "mongodb://localhost:27017/usersDB";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Users Mongo Database created!");
  db.close();
});
