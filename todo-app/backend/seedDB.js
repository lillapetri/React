const Todo = require("./models/todo");
const User = require("./models/user");
const Tag = require("./models/tag");

const data = [
    {task: 'This is the first todo', completed: true},
    {task: 'This is the second todo',  completed: false},
    {task: 'This is the third todo', completed: false},
    {task: 'This is the fourth todo', completed: false}
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
                         console.log(err.message)
                     } else {
                         console.log("Added a todo.");
                     }
                 });
                 
             });
         });
  
    Tag.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed tags!");
        Tag.create({
            text: "Tag from seedDB"}, function(err, tag){
            if(err){
                console.log(err);
            } else {
                Todo.findOne({task: "This is the first todo"}, function(err, todo){
                    if(err){
                        console.log(err);
                    } else {
                        todo.tags.push(tag);
                        todo.save();
                        console.log("Created new tag");
                    }
                })
            }
        });
        Tag.create({
            text: "Another tag from seedDB"}, function(err, tag){
            if(err){
                console.log(err);
            } else {
                Todo.findOne({task: "This is the third todo"}, function(err, todo){
                    if(err){
                        console.log(err);
                    } else {
                        todo.tags.push(tag);
                        todo.save();
                        console.log("Created new tag");
                    }
                })
            }
        })
    })
}

module.exports = seedDB;