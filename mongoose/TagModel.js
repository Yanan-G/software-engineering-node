"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var TagSchema_1 = require("./TagSchema");
var TagModel = mongoose.model('TagModel', TagSchema_1["default"]);
exports["default"] = TagModel;
