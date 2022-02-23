"use strict";
exports.__esModule = true;
/**
 * @file Implements mongoose model to CRUD
 * documents in the tuits collection
 */
var mongoose = require('mongoose');
var TuitSchema_1 = require("./TuitSchema");
var TuitModel = mongoose.model("TuitModel", TuitSchema_1["default"]);
exports["default"] = TuitModel;
