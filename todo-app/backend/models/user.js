const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const User = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, required: [true, "cant't be blank"] },
    username: { type: String, unique: true, required: [true, "can't be blank"] },
    password: {type: String, required: [true, "can't be blank"]},
    isAdmin: { type: Boolean, default: false }
}, {timestamps: true});

User.plugin(uniqueValidator, {message: 'is already taken.'});

module.exports = mongoose.model('User', User);

