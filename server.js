"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var TuitController_1 = require("./controllers/TuitController");
var UserController_1 = require("./controllers/UserController");
var TuitDao_1 = require("./daos/TuitDao");
var UserDao_1 = require("./daos/UserDao");
var dotenv = require('dotenv');
var connectDB = require('./config/db');
// load env vars
dotenv.config({ path: './config/config.env' });
// Connect to database
connectDB();
var app = (0, express_1["default"])();
// Body parser
app.use(body_parser_1["default"].json());
var userController = new UserController_1["default"](app, new UserDao_1["default"]());
var tuitController = new TuitController_1["default"](app, new TuitDao_1["default"]());
//const PORT = 4000;
app.listen(process.env.PORT);
// app.listen(PORT, () =>
//   console.log(`Server running on port ${PORT}`)
// );
