import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import Todo from './Todo';
import Tags from './Tags';
import CreateTodo from './todoModifiers/CreateTodo';
import TodoForm from './TodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class TodoAppTest extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos: []
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

    handleChange = (e) => {
        let date = new Date();
        this.setState({id: uuid(), task: e.target.value, createdAt: date})
    };


    displayTodos = (todos) => {
    if (!todos.length) return null;
    return todos.map((todo) => <Todo key={uuid()} {...todo} /> );
    };
    render() {
        return(
        <React.Fragment>
            <CreateTodo {...this.state.todos} />
            <div>
                {this.displayTodos(this.state.todos)}
            </div>
        </React.Fragment>
        )
    }
}
export default TodoAppTest;