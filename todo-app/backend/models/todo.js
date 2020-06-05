const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    id: {
        type: String
    },
    task: {
        type: String
    },
    tags: [
    {
        tag_id: {
            type: Number
            
        },
        tag_text: {
            type: String
        },
    }        
    ],
    completed: {
        type: Boolean
    },
    createdAt: { type: Date, default: Date.now },
    author: {
        id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model('Todo', Todo);