const express = require("express");
const todoRoutes  = express.Router();
const auth = require('../middelware/auth');
const Todo = require("../models/todo");
const db = require('../config/mongo_keys').mongoURI;
const ObjectId = require('mongodb').ObjectID;

// All todos
todoRoutes.get('/', (req,res) => {
    Todo.find({}, (err, allTodos) => {
		if(err){
			console.log(err);
		} else {
            res.json(allTodos);
		}
	});
});

// Show infos about one todo
todoRoutes.get('/:id', (req,res) => {
	Todo.findById(req.params.id, (err, todo) => {
		if(err){res.json(err)};
		if(!todo){res.json('No todo found with id: ' + req.params.id)};
		res.json(todo);
	});
});

// Create new todo
todoRoutes.post('/', async (req,res) => {
	const newTodo = new Todo(req.body);
	try {
		const todo = await newTodo.save();
		if (!todo) throw Error('Something went wrong while saving new todo.');
		res.status(200).json(todo);
	  } catch (e) {
		res.status(400).json({ message: e.message });
	  }
});

// Update todo
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
todoRoutes.delete('/:id', (req, res) => {
	const query = { _id: req.params.id};
	Todo.remove(query, (err) => {
		if(err) {res.json(err.message)};
		if(!query) {res.json('No todo found')};
		res.json('Todo deleted succefully.')		
	})
	.catch(err => res.json(err.message))
});

module.exports = todoRoutes;