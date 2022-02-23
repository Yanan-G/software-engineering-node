"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
var LikeSchema = new mongoose.Schema({
    tuit: { type: mongoose_1.Schema.Types.ObjectId, ref: "TuitModel" },
    likedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "UserModel" }
}, { collection: "likes" });
exports["default"] = LikeSchema;
