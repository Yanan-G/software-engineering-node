"use strict";
// import express from 'express';
// import bodyParser from "body-parser";
exports.__esModule = true;
var express = require("express");
//  import CourseController from "./controllers/CourseController";
var UserController_1 = require("./controllers/UserController");
var TuitController_1 = require("./controllers/TuitController");
var LikeController_1 = require("./controllers/LikeController");
var FollowController_1 = require("./controllers/FollowController");
var MessageController_1 = require("./controllers/MessageController");
var BookmarkController_1 = require("./controllers/BookmarkController");
var mongoose = require('mongoose');
// build the connection string
var PROTOCOL = "mongodb+srv";
var DB_USERNAME = "yanan";
//process.env.DB_USERNAME;
var DB_PASSWORD = "253253";
//process.env.DB_PASSWORD;
var HOST = "cluster0.qnk2y.mongodb.net";
var DB_NAME = "myFirstDatabase";
var DB_QUERY = "retryWrites=true&w=majority";
var connectionString = "".concat(PROTOCOL, "://").concat(DB_USERNAME, ":").concat(DB_PASSWORD, "@").concat(HOST, "/").concat(DB_NAME, "?").concat(DB_QUERY);
// connect to the database
mongoose.connect(connectionString);
var app = express();
app.use(express.json());
app.get('/', function (req, res) {
    return res.send('Welcome!');
});
app.get('/add/:a/:b', function (req, res) {
    return res.send(req.params.a + req.params.b);
});
// create RESTful Web service API
//  const courseController = new CourseController(app);
var userController = UserController_1["default"].getInstance(app);
var tuitController = TuitController_1["default"].getInstance(app);
var likesController = LikeController_1["default"].getInstance(app);
var followController = FollowController_1["default"].getInstance(app);
var messageController = MessageController_1["default"].getInstance(app);
var bookmarkController = BookmarkController_1["default"].getInstance(app);
/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
var PORT = 4000;
app.listen(process.env.PORT || PORT);
