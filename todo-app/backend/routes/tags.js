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
tagRoutes.route('/:id').post((req,res) => {
	console.log(req.params);
	//lookup todo using ID
	Todo.findById(req.params.id, function(err, todo){
		if(err || !todo){
			console.log(err || 'No todo found.');
		} else {
			Tag.create(req.body, function(err, tag){
				if(err || !tag){
					res.json(err);
				} else {
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
 tagRoutes.delete("/:id", function(req, res){
     //findByIdAndRemove
     Tag.findByIdAndRemove(req.body.id, function(err, tag){
        if(err){
            res.json(err.message);
        } else {
			console.log(req.body);
			Todo.findById(req.body.todoId, (err, todo) =>{
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