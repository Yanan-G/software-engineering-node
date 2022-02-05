"use strict";
exports.__esModule = true;
var LocationSchema_1 = require("./LocationSchema");
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: String,
    profilePhoto: String,
    headerImage: String,
    accountType: { type: String, "default": 'PERSONAL', "enum": ['PERSONAL', 'ACADEMIC', 'PROFESSIONAL'] },
    maritalStatus: { type: String, "default": 'SINGLE', "enum": ['MARRIED', 'SINGLE', 'WIDOWED'] },
    biography: String,
    dateOfBirth: Date,
    joined: { type: Date, "default": Date.now },
    location: LocationSchema_1["default"]
}, { collection: 'users' });
exports["default"] = UserSchema;
