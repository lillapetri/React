const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
let Tag = new Schema({
    text: String,
    todo: {
    	id: {
            type: String,
            required: false,
    		ref: "Todo"
    	},
    	task: String
    }
});
 

module.exports = mongoose.model("Tag", Tag);