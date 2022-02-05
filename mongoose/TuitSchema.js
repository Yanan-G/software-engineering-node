"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var TagSchema_1 = require("./TagSchema");
var TopicSchema_1 = require("./TopicSchema");
var UserSchema_1 = require("./UserSchema");
var TuitSchema = new mongoose.Schema({
    tuit: String,
    postedOn: Date,
    postedBy: UserSchema_1["default"],
    tag: TagSchema_1["default"],
    topic: TopicSchema_1["default"]
}, { collection: 'tuits' });
exports["default"] = TuitSchema;
