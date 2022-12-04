const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    port: process.env.PORT,
    userName: process.env.mongoDB_USER,
    mongodbConnect: process.env.mongoDB_PASSWORD,
};