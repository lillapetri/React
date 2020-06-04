import React, {useState, Component} from 'react';
import TodoList from './TodoList';

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
    }
    editTodo(id, newTask){
        const updatedTasks = this.state.todos.map( todo =>
            todo.id === id ? {...todo, task: newTask} : todo)
        this.setState({todos: updatedTasks})
        console.log(updatedTasks);
    }
    render() {
        return (
            <div>
                <h1>Application lives here</h1>
                <TodoList todos={this.state.todos} editTodo={this.editTodo}/>
            </div>
        )
    }
}
export default TodoApp;