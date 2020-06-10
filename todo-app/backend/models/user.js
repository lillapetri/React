const mongoose = require("mongoose");

const User = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: {type: String, required: true},
    register_date: { type: Date, default: Date.now },
    isAdmin: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', User);

