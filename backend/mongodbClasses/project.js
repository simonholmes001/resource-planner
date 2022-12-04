const getDb = require("../util/mongodb").getDb;

class Projects {
  constructor(title, scope, startingMonth, startingYear, endingMonth, endingYear, phase) {
    this.title = title;
    this.scope = scope;
    this.startingMonth = startingMonth;
    this.startingYear = startingYear;
    this.endingMonth = endingMonth;
    this.endingYear = endingYear;
    this.phase = phase;
  }

  save() {
    const db = getDb();
    return db.collection("projects")
      .insertOne(this)
      .then((result) => {
          console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Projects;