const express = require("express");
const indexRoutes  = express.Router();
const auth = require('../middelware/auth');
const db = require('../config/mongo_keys').mongoURI;
const User = require("../models/user");
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

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
			if(user) return res.status(409).json({ message: 'User already exists. Please log in.'})
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
							jwt.sign(
								{ id: user.id },
								config.get('jwtSecret'),
								{ expiresIn: 3600 },
								(err, token) => {
									if(err) throw err;
									res.json({
										token,
										user: {
											id: user.id,
											username: user.username,
											email: user.email
										}
									})
								}
							)
						})
				})
			})

		})
});

// Login
indexRoutes.route('/login').post((req,res) => {
	const { email, password } = req.body;
	// Validation
	if(!email || !password){
		return res.status(400).json({ message: 'Please enter all fields. '})
	}
	// Search for user
	User.findOne({ email })
		.then(user => {
			if(!user) return res.status(400).json({ message: 'User does not exist. Please sign up.'})
			
			// Validate password
			const isMatch = bcrypt.compare(password, user.password)
			if(!isMatch) return res.status(400).json({ message: 'Invalid password.'})
			jwt.sign(
				{ id: user.id },
				config.get('jwtSecret'),
				{ expiresIn: 3600 },
				(err, token) => {
					if(err) throw err;
					res.json({
						token,
						user: {
							id: user.id,
							username: user.username,
							email: user.email
						}
					})
				}
			)
			
		})
});

// Acces user data
indexRoutes.get('/user', auth, (req, res) => {
	User.findById(req.user.id)
		.select('-password')
		.then(user => res.json(user));
})

// Delete User -- not working yet 
indexRoutes.delete('/username', (req, res) => {
	var query = { username: req.body.username};
	User.remove(query, (err) => {
		if(err) {res.json(err)};
		if(!query) {res.json({message: 'No User found'})};
		res.json({message: 'User deleted succefully.'})		
	})
	.catch(err => res.json(err))
});


 module.exports = indexRoutes;