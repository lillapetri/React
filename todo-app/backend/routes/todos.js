const express = require("express");
const todoRoutes  = express.Router();
const Todo = require("../models/todo");
const db = 'mongodb://localhost:27017/todo_v1';
const ObjectId = require('mongodb').ObjectID


// All todos
todoRoutes.route('/').get( (req,res) => {
    Todo.find({}, (err, allTodos) => {
		if(err){
			console.log(err);
		} else {
            res.json(allTodos);
		}
	});
});

// Show infos about one todo
todoRoutes.route('/:id').get((req,res) => {
	var id = ObjectId(req.params.id);
	console.log(req.params);
    Todo.findById(id, (err, todo) =>{
		if(err){res.json(err.message)}
		if(!todo){console.log('There is no todo with the given id.')}
		res.json(todo);
		console.log(todo);
	});
});

// Create new todo
todoRoutes.route('/').post((req,res) => {
	const todo = new Todo(req.body);
	console.log(todo);
	todo.save(db)
	.then(() => {
		res.json('Todo saved.')
	})	
	.catch( err => {
		res.json(err.message);
	});
});

todoRoutes.route('/:id').put((req,res) => {
	var id = ObjectId(req.params.id);
	const obj = Object.assign({}, req.body);
	Todo.findByIdAndUpdate(id, obj)
	.then((response) => {
		res.json(response)
	})
	.catch( err => {
		res.json(err.message);
	});
});

// Delete todo
todoRoutes.delete("/:id", (req, res) => {
	var query = { _id: req.params.id};
	Todo.remove(query, (err) => {
		if(err) {res.json(err.message)};
		if(!query) {res.json('No todo found')};
		res.json('Todo deleted succefully.')		
	})
	.catch(err => res.json(err.message))
});

module.exports = todoRoutes;