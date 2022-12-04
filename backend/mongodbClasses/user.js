const getDb = require("../util/mongodb").getDb;

class Users {
  constructor(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db.collection("users")
      .insertOne(this)
      .then((result) => {
          console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Users;