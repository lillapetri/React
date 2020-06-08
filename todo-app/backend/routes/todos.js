const express = require("express");
const todoRoutes  = express.Router();
const Todo = require("../models/todo");
const db = 'mongodb://localhost:27017/todo_v1';
var ObjectId = require('mongodb').ObjectID


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
		if(err){res.send(err.message)}
		if(!todo){console.log('There is no todo with the given id.')}
		res.send(todo);
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
		res.send(err.message);
	});
});

// Edit todo
/* todoRoutes.route('/update/:id').post((req,res) => {
	var id = ObjectId(req.params.id);
	Todo.findByIdAndUpdate(id)
	.then(todo => {
		todo.task = req.body.task;
		todo.tags = req.body.tags;
		todo.completed = req.body.completed;
		todo.createdAt = req.body.createdAt;

		todo.save()
		.then(() => res.send('Todo updated!'))
		.catch(err => res.send(err.message));
	})
	.catch(err => res.send(err.message));
    
}) */;
todoRoutes.route('/:id').put((req,res) => {
	var id = ObjectId(req.params.id);
	const obj = Object.assign({}, req.body);
	Todo.findByIdAndUpdate(id, obj)
	.then((response) => {
		res.send(response)
	})
	.catch( err => {
		res.send(err.message);
	});
});

// Delete todo
todoRoutes.delete("/:id", (req, res) => {
	var query = { _id: req.params.id};
	Todo.remove(query, (err) => {
		if(err) {res.send(err.message)};
		if(!query) {res.send('No todo found')};
		res.send('Todo deleted succefully.')		
	})
	.catch(err => res.send(err.message))
});

module.exports = todoRoutes;