const express = require('express');
const mongoose = require('mongoose');
const seedDB = require("./seedDB");
const path = require('path');
const createError = require('http-errors');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;

const todoRoutes = require("./routes/todos");
const indexRoutes = require("./routes/index");
const tagRoutes = require('./routes/tags');
const testAPIRoute = require('./routes/testAPI');

// const tagRoutes = require("./routes/tags");

// Run app on configured port
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Connect routes to server.js
app.use('/', testAPIRoute);
app.use('/users', indexRoutes);
app.use('/todos', todoRoutes);
app.use('/tags', tagRoutes);

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
const db = require('./config/mongo_keys').mongoURI;

// Connect database with Mongoose
mongoose.connect(db,{
	useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
	})
	.then(() => console.log('Mongo connected'))
	.catch( err => console.log(err))

// Populate database with initial data
seedDB();

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('react-todo-app/build'));
  
	app.get('*', (req, res) => {
	  res.sendFile(path.resolve(__dirname, 'react-todo-app', 'build', 'index.html'));
	});
}

