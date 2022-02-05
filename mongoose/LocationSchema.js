"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var LocationSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number
}, { collection: 'locations' });
exports["default"] = LocationSchema;
