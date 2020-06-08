const mongoose = require("mongoose");
const Todo = require("./models/todo");

const data = [
    {id: 1, task: 'This is the first todo', completed: true},
    {id: 2, task: 'This is the second todo', completed: false},
    {id: 3, task: 'This is the third todo', completed: false},
    {id: 4, task: 'This is the fourth todo', completed: false}
]

function seedDB(){
    //Remove all todos
    Todo.remove({}, function(err){
         if(err){
             console.log(err);
         }
         console.log("removed todos!");
             data.forEach(function(seed){
                 Todo.create(seed, function(err, todo){
                     if(err){
                         console.log(err)
                     } else {
                         console.log("added a todo");
                     }
                 });
             });
         });
        }
  
 module.exports = seedDB;