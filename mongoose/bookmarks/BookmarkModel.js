"use strict";
exports.__esModule = true;
/**
 * @file Implements mongoose model to CRUD
 * documents in the bookmarks collection
 */
var mongoose = require('mongoose');
var BookmarkSchema_1 = require("./BookmarkSchema");
var BookmarkModel = mongoose.model("BookmarkModel", BookmarkSchema_1["default"]);
exports["default"] = BookmarkModel;
