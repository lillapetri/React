var mongoose = require("mongoose");
var Todo = require("./models/todo");

const data = [
    {id: 1, task: 'This is the first todo', tags: [{tag_id: 58, tag_text: 'tag1'}, {tag_id: 2, tag_text: 'tag2'}], completed: true},
    {id: 2, task: 'This is the second todo', tags: [{tag_id: 3, tag_text: 'tag2'}, {tag_id: 4, tag_text: 'tag3'}], completed: false},
    {id: 3, task: 'This is the third todo', tags: [ {tag_id: 5, tag_text: 'tag3'}], completed: true},
    {id: 4, task: 'This is the fourth todo', tags: [{tag_id: 6, tag_text: 'tag5'}, {tag_id: 7, tag_text: 'tag1'}], completed: false}
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