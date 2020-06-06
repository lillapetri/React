var mongoose = require("mongoose");
var Todo = require("./models/todo");

const data = [
    {id: 1, task: 'This is the first todo', tags: ['tag3', 'tag2'], completed: true},
    {id: 2, task: 'This is the second todo', tags: ['tag1', 'tag3'], completed: false},
    {id: 3, task: 'This is the third todo', tags: [], completed: true},
    {id: 4, task: 'This is the fourth todo', tags: ['tag1', 'tag2', 'tag5'], completed: false}
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