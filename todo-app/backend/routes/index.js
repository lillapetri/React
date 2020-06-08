const express = require("express");
const indexRoutes  = express.Router();
const db = 'mongodb://localhost:27017/todo_v1';
const ObjectId = require('mongodb').ObjectID
const User = require("../models/user");

// show register form
indexRoutes.post('/register', (req, res) => {
    res.send('register');
});

// Create new User
indexRoutes.route('/').post((req,res) => {
	let User = new User(req.body);
	console.log(User);
	User.save(db)
	.then(() => {
		res.json('User saved.')
	})	
	.catch( err => {
		res.send(err.message);
	});
});

indexRoutes.route('/:id').put((req,res) => {
	var id = ObjectId(req.params.id);
	const obj = Object.assign({}, req.body);
	User.findByIdAndUpdate(id, obj)
	.then((response) => {
		res.send(response)
	})
	.catch( err => {
		res.send(err.message);
	});
});

// Delete User
indexRoutes.delete("/:id", (req, res) => {
	var query = { _id: req.params.id};
	User.remove(query, (err) => {
		if(err) {res.send(err.message)};
		if(!query) {res.send('No User found')};
		res.send('User deleted succefully.')		
	})
	.catch(err => res.send(err.message))
});


 module.exports = indexRoutes;