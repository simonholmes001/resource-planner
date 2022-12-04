const express = require("express");

const router = express.Router();

const createUser = require("../queries/add-user");

router.post("/add-user", createUser.createUser);

module.exports = router;