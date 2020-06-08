const mongoose = require("mongoose");
const Todo = require("./models/todo");
const User = require("./models/user");

const data = [
    {id: 1, task: 'This is the first todo', completed: true},
    {id: 2, task: 'This is the second todo', completed: false},
    {id: 3, task: 'This is the third todo', completed: false},
    {id: 4, task: 'This is the fourth todo', completed: false}
]

const users = [
    {
        username: 'Lilla',
        password: 'asdfg',
        firstName: 'Lilla',
        lastName: 'Petri',
        email: 'test@email.com',
        resetPasswordToken: '',
        resetPasswordExpires: '',
        isAdmin: false 
    },
    {
        username: 'Lebo',
        password: 'asdfg',
        firstName: 'Lebo',
        lastName: 'Petri',
        email: 'test1@email.com',
        resetPasswordToken: '',
        resetPasswordExpires: '',
        isAdmin: false 
    },
    {
        username: 'Zebo',
        password: 'asdfg',
        firstName: 'Zebo',
        lastName: 'Petri',
        email: 'test2@email.com',
        resetPasswordToken: '',
        resetPasswordExpires: '',
        isAdmin: false 
    },
    {
        username: 'Cica',
        password: 'asdfg',
        firstName: 'Cica',
        lastName: 'Petri',
        email: 'test3@email.com',
        resetPasswordToken: '',
        resetPasswordExpires: '',
        isAdmin: false 
    }
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
                         console.log("Added a todo.");
                     }
                 });
             });
         });
    // Remove users
    User.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed users!");
        users.forEach(function(seed){
            User.create(seed, function(err, todo){
                if(err){
                    console.log(err)
                } else {
                    console.log("Added a user.");
                }
            });
        });
    });
}
  
 module.exports = seedDB;