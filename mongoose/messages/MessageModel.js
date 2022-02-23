"use strict";
exports.__esModule = true;
/**
 * @file Implements mongoose model to CRUD
 * documents in the messages collection
 */
var mongoose = require('mongoose');
var MessageSchema_1 = require("./MessageSchema");
var MessageModel = mongoose.model("MessageModel", MessageSchema_1["default"]);
exports["default"] = MessageModel;
