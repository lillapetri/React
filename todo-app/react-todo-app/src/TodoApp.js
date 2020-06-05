import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
            {id: 1, task: 'This is the first todo', tags: [{id: uuid(), text: 'tag1'}, {id: uuid(), text: 'tag2'}], completed: true},
            {id: 2, task: 'This is the second todo', tags: [{id: uuid(), text: 'tag2'}, {id: uuid(), text: 'tag3'}], completed: false},
            {id: 3, task: 'This is the third todo', tags: [ {id: uuid(), text: 'tag3'}], completed: false},
            {id: 4, task: 'This is the fourth todo', tags: [{id: uuid(), text: 'tag5'}, {id: uuid(), text: 'tag1'}], completed: false}
            ]
        } 
        this.editTodo = this.editTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
        this.deleteTag = this.deleteTag.bind(this);
    }
    
    editTodo(id, newTask){
        const updatedTasks = this.state.todos.map( todo =>
            todo.id === id ? {...todo, task: newTask} : todo)
        this.setState({todos: updatedTasks})
    }
    addTodo(currentState, newTask){
        const newTodo = {id: uuid(), task: newTask, tags: [], completed: false};
        this.setState({...currentState.push(newTodo)})
    }
    removeTodo(id){
        const updatedTodos = this.state.todos.filter(todo => id !== todo.id)
        this.setState({todos: updatedTodos})
    }   
    toggleCompletion(id, toggleComplete){
        const updatedTodos = this.state.todos.map( todo =>
            todo.id === id ? {...todo, completed: !toggleComplete} : todo)
        this.setState({todos: updatedTodos})
    } 
    deleteTag(id){
        const updatedTags = 
        this.state.todos.map(
            todo => todo.tags
            .flat()
            .filter(tag => tag.id !== id)
            .splice(0))
        console.log(updatedTags);
       
        
        }
        //todos.tags=updatedTags;
        // szaaaaar this.setState(prevstate => ({todos: {...prevstate, todos: {tags: updatedTags}}}))
        
    
    render() {
        return (
            <div>
                <h1>Application lives here</h1>
                <TodoForm 
                todos={this.state.todos} 
                addTodo={this.addTodo}/>
                <TodoList 
                todos={this.state.todos} 
                editTodo={this.editTodo} 
                removeTodo={this.removeTodo}
                toggleCompletion={this.toggleCompletion}
                deleteTag={this.deleteTag}
                />
            </div>
        )
    }
}
export default TodoApp;