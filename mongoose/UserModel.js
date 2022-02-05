"use strict";
exports.__esModule = true;
var UserSchema_1 = require("./UserSchema");
var mongoose = require('mongoose');
var UserModel = mongoose.model('UserModel', UserSchema_1["default"]);
exports["default"] = UserModel;
