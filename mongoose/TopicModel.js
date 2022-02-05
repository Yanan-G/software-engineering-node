"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var TopicSchema_1 = require("./TopicSchema");
var TopicModel = mongoose.model('TopicModel', TopicSchema_1["default"]);
exports["default"] = TopicModel;
