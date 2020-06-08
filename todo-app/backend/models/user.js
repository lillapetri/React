const mongoose = require("mongoose");

const User = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, required: true },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    isAdmin: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', User);

