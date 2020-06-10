const express = require("express");
const indexRoutes  = express.Router();
const db = require('../config/mongo_keys').mongoURI;
const ObjectId = require('mongodb').ObjectID
const User = require("../models/user");

// Show all users
indexRoutes.route('/').get( (req,res) => {
    User.find({}, (err, allUsers) => {
		if(err){
			console.log(err);
		} else {
            res.json(allUsers);
		}
	});
});

// Log in
indexRoutes.route('/:id').get((req,res) => {
	var id = ObjectId(req.params.id);
	console.log(req.params);
	Todo.findById(id, (err, user) => {
		if(err || !user){
			console.log('no user found');
		}
		console.log(user);
		res.json(user);
	})
});

// Create new User
indexRoutes.route('/').post((req,res) => {
	let user = new User(req.body);
	user.save(db)
	.then(() => {
		res.json('User saved.')
	})	
	.catch( err => {
		res.send(err.message);
	});
});

// Edit user data
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