"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
var TuitSchema = new mongoose.Schema({
    tuit: { type: String, required: true },
    postedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "UserModel" },
    postedOn: { type: Date, "default": Date.now }
}, { collection: "tuits" });
exports["default"] = TuitSchema;
