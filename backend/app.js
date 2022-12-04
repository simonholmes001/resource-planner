const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoConnect = require("./util/mongodb").mongoDBConnect;

const addUser = require("./routes/add-user");
const addProduct = require("./routes/add-project");
const { port } = require("./config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(addUser);
app.use(addProduct);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

mongoConnect(() => {
  app.listen(port, () => {
    console.log(`Backend is listening on port: ${port}`);
  });
});
