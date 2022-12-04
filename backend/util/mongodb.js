const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const { userName, mongodbConnect } = require("../config");

const mongoDBConnectionString = `mongodb+srv://${userName}:${mongodbConnect}@cluster0.ys0vk3e.mongodb.net/?retryWrites=true&w=majority`

const mongoDBConnect = (callback) => {
  MongoClient.connect(mongoDBConnectionString)
    .then((client) => {
      console.log("Connected to mongoDB");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoDBConnect = mongoDBConnect;
exports.getDb = getDb;