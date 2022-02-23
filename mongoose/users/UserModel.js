"use strict";
exports.__esModule = true;
/**
 * @file Implements mongoose model to CRUD
 * documents in the users collection
 */
var mongoose = require('mongoose');
var UserSchema_1 = require("./UserSchema");
var UserModel = mongoose.model("UserModel", UserSchema_1["default"]);
exports["default"] = UserModel;