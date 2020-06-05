import React, {Component} from 'react';
import { normalize, schema } from 'normalizr';
import {v4 as uuid} from 'uuid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


class TodoAppTest extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos: "",
        }
    }
    
    callAPI() {
        fetch("http://localhost:4000/")
            .then(res => res.json())
            .then(res => this.setState({ todos: [...res]}))
            .then()
            .catch(err => console.log(err));
    }
    
    componentDidMount() {
        this.callAPI();
    }

    render() {
        const todos = this.state.todos;
        const tasks = [];
        const tags = [];
        for( var i of todos ){
            tasks.push(i);
            tags.push(i.tags);
            };
        console.log(tags);
        return(
           <TodoList 
               todos={tasks}
               key={tasks._id}
               completed={tasks.completed}
               tags={[...tags]}
           />
           )
    }
}
export default TodoAppTest;