const express = require("express");
const todoRoutes  = express.Router();
const auth = require('../middelware/auth');
const Todo = require("../models/todo");
const User = require("../models/user");
const db = require('../config/mongo_keys').mongoURI;
const ObjectId = require('mongodb').ObjectID;

// All public todos
todoRoutes.get('/', (req,res) => {
    Todo.find({isPublic: true}, (err, allTodos) => {
		if(err){
			console.log(err);
		} else {
            res.status(200).json(allTodos);
		}
	});
});

// All private todos
todoRoutes.get('/mytodos/:username', auth, (req,res) => {
	const {username} = req.params;
    Todo.find({user: {username: username}, isPublic: false}, (err, allTodos) => {
		if(err){
			console.log(err);
		} else {
            res.status(200).json(allTodos);
		}
	});
});

// Show infos about one public todo
todoRoutes.get('/:id', (req,res) => {
	Todo.findById(req.params.id, (err, todo) => {
		if(err){res.json(err)};
		if(!todo){res.status(404).json('No todo found with id: ' + req.params.id)};
		console.log(todo);
		res.status(200).json(todo);
	});
});

// Show infos about one private todo
todoRoutes.get('/mytodos/:username/:id', (req,res) => {
	User.find({username: req.params.username}, (err, user) => {
		try {
			Todo.findById(req.params.id, (err, todo) => {
			if(err){res.json(err)};
			if(!todo){res.status(404).json('No todo found with id: ' + req.params.id)};
			console.log(todo);
			res.status(200).json(todo);
		});
		}
		catch(err) {console.log(err)}
	})
	
});

// Create new public todo
todoRoutes.post('/', async (req,res) => {
	const {task, tags} = req.body;
	const username = req.params.username;
	const newTodo = new Todo({
		task, 
		tags,
		user: {username: username}, 
		isPublic: true
	})
	try {
		const todo = await newTodo.save();
		if (!todo) throw Error('Something went wrong while saving new todo.');
		res.status(200).json(todo);
	  } catch (err) {
		res.status(400).json({ message: err.message });
	  }
});

// Create new private todo
todoRoutes.post('/mytodos/:username', auth, async (req,res) => {
	const {task}= req.body;
	const {username} = req.params;
	const newTodo = new Todo({
		task,
		user: {username: username}, 
		isPublic: false
	})
	User.findOne({ username })
		.then(async user => {
			if(!user) {return res.status(400).json({ message: 'You have to be logged in to save private todos. Please log in or sign up.'})}
			else {
				const todo = await newTodo.save();
				user.todos.push(todo);
				user.save();
				if (!todo) throw Error('Something went wrong while saving new todo.');
				res.status(200).json(todo);
			}
		})
		.catch(err =>
			res.status(400).json({ message: err.message })
			)
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
	Todo.deleteOne(query, (err) => {
		if(err) {res.json(err.message)};
		if(!query) {res.status(404).json('No todo found')};
		res.status(200).json('Todo deleted succefully.')		
	})
	.catch(err => res.json(err.message))
});

module.exports = todoRoutes;