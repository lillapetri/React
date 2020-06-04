import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
            {id: 1, task: 'This is the first todo', tags: ['tag1', 'tag2'], completed: true},
            {id: 2, task: 'This is the second todo', tags: ['tag1', 'tag3'], completed: false},
            {id: 3, task: 'This is the third todo', tags: [ 'tag2'], completed: false},
            {id: 4, task: 'This is the fourth todo', tags: ['tag2', 'tag3'], completed: false}
            ]
        } 
        this.editTodo = this.editTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
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
        
    render() {
        return (
            <div>
                <h1>Application lives here</h1>
                <TodoForm todos={this.state.todos} addTodo={this.addTodo}/>
                <TodoList todos={this.state.todos} editTodo={this.editTodo}/>
            </div>
        )
    }
}
export default TodoApp;