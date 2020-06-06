const express = require('express');
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
const passport = require("passport");
const LocalStrategy = require("passport-local");
const seedDB = require("./seedDB");
const todoRoutes = express.Router();
const testAPIRouter = require('./routes/testAPI');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const cors = require('cors')
const app = express();
var Todo = require('./models/todo');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', todoRoutes);
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

todoRoutes.route('/').get( (req,res) => {
    Todo.find({}, (err, allTodos) => {
		if(err){
			console.log(err);
		} else {
            res.json(allTodos);
		}
	});
});

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

todoRoutes.route('/add').post((req,res) => {
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

todoRoutes.route('/update/:id').post((req,res) => {
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
    
});
/* todoRoutes.delete("/:id", (req, res) => {
	var id = ObjectId(req.params.id);
	Todo.findByIdAndRemove(id, (err, todo, res => {
		console.log(todo);
		if(err) {res.send(err.message)};
		if(!todo) {res.send('No todo found')};
		res.send('Todo deleted succefully.')		
	})
	.catch(err => res.send(err.message))
	)
}); */
todoRoutes.delete("/:id", (req, res) => {
	var query = { _id: req.params.id};
	Todo.remove(query, (err) => {
		if(err) {res.send(err.message)};
		if(!query) {res.send('No todo found')};
		res.send('Todo deleted succefully.')		
	})
	.catch(err => res.send(err.message))
});


// Run app on configured port
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
