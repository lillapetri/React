const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    task: String,
    tags: [
        {
        id: {
        type: Schema.Types.ObjectId,
        ref: 'Tag'},
        text: String     
        },
    ],
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    isPublic: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Todo', Todo);