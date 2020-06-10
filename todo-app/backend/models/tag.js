const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
let Tag = new Schema({
    text: {type: String, required: true},
    todo: {
        type: Schema.Types.ObjectId,
        ref: 'Todo'
    }
});
 

module.exports = mongoose.model("Tag", Tag);