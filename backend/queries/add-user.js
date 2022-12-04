const User = require("../mongodbClasses/user");

exports.createUser = (req, res, next) => {
  const name = req.query.name;
  const imageUrl = req.query.imageUrl;

  const user = new User(
    name,
    imageUrl,
  );
  user
    .save()
    .then((result) => {
      console.log("Created user");
      res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
