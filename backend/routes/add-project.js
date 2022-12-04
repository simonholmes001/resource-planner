const express = require("express");

const router = express.Router();

const createProject = require("../queries/add-project");

router.post("/add-project", createProject.createProject);

module.exports = router;