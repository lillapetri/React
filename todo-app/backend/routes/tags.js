var express = require("express");
const db = require('../config/mongo_keys').mongoURI;
const ObjectId = require('mongodb').ObjectID
var tagRoutes  = express.Router({mergeParams: true});
var Todo = require("../models/todo");
var Tag = require("../models/tag");

// All tags
tagRoutes.route('/').get( (req,res) => {
    Tag.find({}, (err, alltags) => {
		if(err){
			console.log(err);
		} else {
            res.json(alltags);
		}
	});
});

// Create new tag
tagRoutes.route('/:todoId').post((req,res) => {
	//lookup todo using ID
	Todo.findById(req.params.id, function(err, todo){
		if(err || !todo){
			console.log(err || 'No todo found.');
		} else {
			Tag.create(req.body, function(err, tag){
				if(err || !tag){
					res.json(err);
				} else {
					//add username and id to tag
					tag.todo = req.params.id;
					tag.text = req.body.text;
					//save tag
					tag.save()
					todo.tags.push(tag);
					todo.save();
					res.json(`${tag} for ${tag.todo} created successfully.`);
				}
			})
		}
	})
});


 // tag DESTROY ROUTE
 tagRoutes.delete("/:tagId", function(req, res){
     //findByIdAndRemove
     Tag.findByIdAndRemove(req.params.id, function(err, tag){
        if(err){
            res.json(err.message);
        } else {
			Todo.findById(tag.todo, (err, todo) =>{
				if(err){res.json(err)};
				if(!todo){res.json('No todo found. Couldn\'t remove tag from todos.')};
				todo.tags.splice(todo.tags.indexOf(tag));
				todo.save();
				res.json(tag + ' deleted succesfully.');
			})
        }
     });
 });
 
 module.exports = tagRoutes;