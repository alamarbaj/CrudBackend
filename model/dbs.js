var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  if (err) throw err;
  var db = client.db('NewCrudeDB');
  global.db = db
})