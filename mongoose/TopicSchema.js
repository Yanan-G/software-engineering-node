"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var TopicSchema = new mongoose.Schema({
    topic: String,
    tuits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TuitModel' }]
}, { collection: 'topics' });
exports["default"] = TopicSchema;
