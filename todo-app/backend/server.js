const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    seedDB = require("./seedDB");
const todoRoutes = express.Router();
const PORT = 4000;
let Todo = require('./models/todo');

const app = express();
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost:27017/Todo', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
//app.use(express.static(__dirname + "/public"));
//app.use(flash()); 
seedDB();

// Once the connection is established, callback
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

todoRoutes.route('/').get( (req,res) => {
    Todo.find({}, (err, allTodos) => {
		if(err){
			console.log(err);
		} else {
            res.json(allTodos);
            console.log(allTodos);
		}
	});
});

todoRoutes.route('/:id').get((req,res) => {
    const id = req.params.id;
    Todo.findById(id).populate("todos").exec((err, foundTodo) => {
		if(err){
			console.log(err);
		} else {
			console.log(foundTodo);
		}
	});
});

todoRoutes.route('/add').post((req,res) => {
    const todo = new Todo(req.body);
    todo.save()
        .then( todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch( err => {
            res.status(400).send('adding new todo failed');
        });
});

todoRoutes.route('/update/:id').post((req,res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if(!todo)
            res.status(404).send('Data is not found');
        else {
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;
            todo.save().then( todo => {
                res.json('Todo updated');
            })
            .catch( err => {
                res.status(400).send("Update not possible");
            });
        }
    });
});

app.use('/', todoRoutes);

app.listen( PORT, () => {
    console.log("Server is running on port " + PORT);
});