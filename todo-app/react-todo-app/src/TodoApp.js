import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';
import * as apiCalls from './APIs/TodoAPI';
import * as tagCalls from './APIs/TagAPI';
import Todo from './Todo';
import CreateTodo from './todoModifiers/CreateTodo';
import { Paper, Grid } from '@material-ui/core';

class TodoApp extends Component {
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
        let todos = this.state.todos.map(t => 
            (t._id === todo._id) ? {...t, completed: !t.completed} : t
          );
        await this.setState({todos: todos});
        const updatedState = this.state.todos;
        let index = updatedState.findIndex( t => t._id===todo._id)
        let todoToUpdate = updatedState[index];
        apiCalls.updateTodo(todoToUpdate);
        //apiCalls.updateTodo(savedTodos);
    }
    /* removeTag(tag){
        let todos = this.state.todos.map(t => 
            (t._id === todo._id) ? {...t, tags: } : t
          );
        await this.setState({todos: todos});
        const updatedState = this.state.todos;
        let index = updatedState.findIndex( t => t._id===todo._id)
        let todoToUpdate = updatedState[index];
        apiCalls.updateTodo(todoToUpdate);
    }; */
    
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
        const todos = this.state.todos.map((todo, i) => (
           
            <Todo
                key={todo._id}
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
        <Paper style={{ margin: '6vh auto', padding: 14, maxWidth: '600px' }}>
            <CreateTodo {...this.state.todos} addTodo={this.addTodo} />
            <Grid xs={12} md={10} item  style={{margin: '0 auto'}}>{todos}</Grid>
        </Paper>
        )
    }
}
export default TodoApp;