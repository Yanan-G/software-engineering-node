"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
var MessageSchema = new mongoose.Schema({
    message: String,
    to: { type: mongoose_1.Schema.Types.ObjectId, ref: "UserModel" },
    from: { type: mongoose_1.Schema.Types.ObjectId, ref: "UserModel" },
    sentOn: Date
}, { collection: "messages" });
exports["default"] = MessageSchema;
