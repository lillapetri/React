const express = require('express');
const mongoose = require('mongoose');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const seedDB = require("./seedDB");
const testAPIRouter = require('./routes/testAPI');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const cors = require('cors')
const app = express();
//var User = require('./models/user');

const todoRoutes = require("./routes/todos");
const tagRoutes = require("./routes/tags");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Connect routes to server.js
app.use('/', todoRoutes);
app.use('/:id', todoRoutes);
app.use('/testAPI', testAPIRouter);

// Catch 404 error and forward to error handler
app.use(function(req, res, next){
	next(createError(404));
})

// Error handler
app.use(function(err, req, res, next){
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = res.app.get('env') === 'development' ? err: {};

	// render error page
	res.status(err.status || 500);
	res.send(err.message);
});

// Configure MongoDB
const db = 'mongodb://localhost:27017/todo_v1';

// Connect database with Mongoose
mongoose.connect(db,
	{useNewUrlParser: true})
	.then(() => console.log('Mongo connected'))
	.catch( err => console.log(err))
const connection = mongoose.connection;

// Populate database with initial todos
seedDB();


// Run app on configured port
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
