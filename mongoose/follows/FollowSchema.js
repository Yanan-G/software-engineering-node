"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
var FollowSchema = new mongoose.Schema({
    userFollowed: { type: mongoose_1.Schema.Types.ObjectId, ref: "UserModel" },
    userFollowing: { type: mongoose_1.Schema.Types.ObjectId, ref: "UserModel" }
}, { collection: "follows" });
exports["default"] = FollowSchema;
