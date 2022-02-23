"use strict";
exports.__esModule = true;
/**
 * @file Implements mongoose model to CRUD
 * documents in the likes collection
 */
var mongoose = require('mongoose');
var LikeSchema_1 = require("./LikeSchema");
var LikeModel = mongoose.model("LikeModel", LikeSchema_1["default"]);
exports["default"] = LikeModel;
