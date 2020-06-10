const express = require("express");
const indexRoutes  = express.Router();
const db = require('../config/mongo_keys').mongoURI;
const ObjectId = require('mongodb').ObjectID
const User = require("../models/user");
const bcrypt = require('bcryptjs');

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

// Register
indexRoutes.route('/').post((req,res) => {
	const { firstName, lastName, email, username, password } = req.body;
	// Validation
	if(!firstName || !lastName || !username || !email || !password){
		return res.status(400).json({ message: 'Please enter all fields. '})
	}
	// Search for user
	User.findOne({ email })
		.then(user => {
			if(user) return res.status(400).json({ message: 'User already exists.'})
			const newUser = new User({
				firstName,
				lastName,
				email,
				username,
				password
			});
			// Create salt and hash
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if(err) throw err;
					newUser.password = hash;
					newUser.save(db)
						.then(user => {
							res.json({
								user: {
									id: user.id,
									username: user.username,
									email: user.email
								}
							})
						})
				})
			})

		})
});

/* // Create new User
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
 */
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