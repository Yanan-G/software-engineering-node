"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
var BookmarkSchema = new mongoose.Schema({
    bookmarkedTuit: { type: mongoose_1.Schema.Types.ObjectId, ref: "TuitModel" },
    bookmarkedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "UserModel" }
}, { collection: "bookmarks" });
exports["default"] = BookmarkSchema;
