const Project = require("../mongodbClasses/project");

exports.createProject = (req, res, next) => {
  const title = req.query.title;
  const scope = req.query.scope;
  const startingMonth = req.query.startingMonth;
  const startingYear = req.query.startingYear;
  const endingMonth = req.query.endingMonth;
  const endingYear = req.query.endingYear;
  const phase = req.query.phase;

  const project = new Project(
    title,
    scope,
    startingMonth,
    startingYear,
    endingMonth,
    endingYear,
    phase
  );
  project
    .save()
    .then((result) => {
      console.log("Created project");
      res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
