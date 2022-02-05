"use strict";
exports.__esModule = true;
var LocationSchema_1 = require("./LocationSchema");
var mongoose = require('mongoose');
var LocationModel = mongoose.model('LocationModel', LocationSchema_1["default"]);
exports["default"] = LocationModel;
