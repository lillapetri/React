import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import * as apiCalls from './API';
import Todo from './Todo';
import CreateTodo from './todoModifiers/CreateTodo';


class TodoAppTest extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos: [],
            tags: []
        }
    } 
    componentWillMount(){ // could the data fetch simply be put in the constructor instead?
        this.loadTodos();
    }

    async loadTodos(){
        let todos = await apiCalls.getTodos();
        this.setState({todos: todos});
    }
    async addTodo(val){
        await apiCalls.createTodo(val);
        //this.setState({todos: [this.state.todos, val]});
    }
    async toggleCompletion(todo){
        let updatedTodo = await apiCalls.updateTodo(todo);
        let todos = this.state.todos.map(todo => 
          (todo._id === updatedTodo._id) ? {...todo, completed: !todo.completed} : todo
        );
        console.log(todos)
        this.setState({todos: todos});
    }
    
    deleteTodo(id){
        apiCalls.removeTodo(id);
        let filteredTodos = this.state.todos.filter(todo => todo._id !== id);
        this.setState({todos: filteredTodos});
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
    
    render() {
        const todos = this.state.todos.map((todo) => (
            <Todo
                key={uuid()}
                id={todo._id}
                {...todo}
                task={todo.task} 
                completed={todo.completed} 
                tags={todo.tags}
                deleteTodo={this.deleteTodo.bind(this, todo._id)} // can't bind the method in the constructor, because it also needs unique data from each todo item (in this case the id)
                toggleCompletion={this.toggleCompletion.bind(this, todo)}
              />
          ));
        
        return(
        <React.Fragment>
            <CreateTodo {...this.state.todos} addTodo={this.addTodo} />
            {todos}
        </React.Fragment>
        )
    }
}
export default TodoAppTest;