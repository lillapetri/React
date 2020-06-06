import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import Todo from './Todo';
import CreateTodo from './todoModifiers/CreateTodo';


class TodoAppTest extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos: [],
            tags: ['tag1', 'tag2', 'tag3']
        }
    }
    
    callAPI = () => {
    axios.get('http://localhost:4000/')
        .then((response) => {
        const data = response.data;
        this.setState({ todos: data});
        console.log('Data recieved from database.');
        })
        .catch(() => {
        alert('Error retrieving data.');
        });
    }
    componentDidMount() {
        this.callAPI();
    }
    componentDidUpdate() {
        this.syncLocalStorage();
    }
    syncLocalStorage = () =>{
        window.localStorage.setItem(
            'todos', 
            JSON.stringify(this.state.todos)
        );
    }
    handleChange = (e) => {
        let date = new Date();
        this.setState({id: uuid(), task: e.target.value, createdAt: date})
        this.syncLocalStorage();
    };


    displayTodos = (todos) => {
        console.log(todos);
    if (!todos.length) return null;
    this.syncLocalStorage();
    return todos.map((todo) => <Todo key={uuid()} {...todo} tags={this.state.tags}/> );
    };
    
    render() {
        
        return(
        <React.Fragment>
            <CreateTodo {...this.state.todos} />
            {this.displayTodos(this.state.todos)}
        </React.Fragment>
        )
    }
}
export default TodoAppTest;