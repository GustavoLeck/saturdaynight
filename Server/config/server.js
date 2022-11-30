const express = require("express")
const consign = require("consign")
//const bodyParser = require("body-parser")
const expressValidator = require("express-validator")

const app = express()
app.use(express.json());
app.use(expressValidator())

consign()
    .include("app/routes")
    .then("config/dbConnection.js")
    .then("app/models")
    .then("app/controllers")
    .into(app)

module.exports = app;