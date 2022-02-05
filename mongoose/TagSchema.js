"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var TagSchema = new mongoose.Schema({
    tag: String,
    tuits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TuitModel' }]
}, { collection: 'tags' });
exports["default"] = TagSchema;
