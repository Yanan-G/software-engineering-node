"use strict";
exports.__esModule = true;
/**
 * @file Implements mongoose model to CRUD
 * documents in the follows collection
 */
var mongoose = require('mongoose');
var FollowSchema_1 = require("./FollowSchema");
var FollowModel = mongoose.model("FollowModel", FollowSchema_1["default"]);
exports["default"] = FollowModel;
