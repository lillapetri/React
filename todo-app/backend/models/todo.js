const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    id: {
        type: String
    },
    task: {
        type: String
    },
    tags: { 
        type: Array,
        ref: 'Tag'       
    },
    completed: {
        type: Boolean
    },
    createdAt: { type: Date, default: Date.now },
    author: {
        id: {
        type: String
        },
        username: String
    }
});

module.exports = mongoose.model('Todo', Todo);