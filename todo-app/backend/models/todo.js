const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    task: {
        type: String
    },
    tags: [
        {
        id: {
        type: Schema.Types.ObjectId,
        ref: 'Tag'},
        text: String     
        },
    ],
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