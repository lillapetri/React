const express = require('express');
const mongoose = require('mongoose');
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
let Todo = require('./models/todo');

app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

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
const db = 'mongodb://localhost:27017/Todo';

// Connect database with Mongoose
mongoose.connect(db,
	{useNewUrlParser: true,
	 useUnifiedTopology: true }
	 )
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

// Run app on configured port
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
