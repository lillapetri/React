import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {v4 as uuid} from 'uuid';

import axios from 'axios';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            task: '',
            tags: [],
            completed: false, 
            createdAt: '',
            author: {
                id: '',
                userName: ''
            }
        }
        this.createTodo = this.createTodo.bind(this);
    }

    handleChange = e => {
        this.setState({task: e.target.value});
    }
    
    createTodo(){
        axios.post('http://localhost:4000/add',
        {id: uuid(),
        task: this.state.task,
        tags: this.state.tags,
        completed: false,
        createdAt: new Date(),
        author: this.state.author
        })
        .then( response => console.log(response.data))
        .catch(err => console.log(err.message));
    }
    onSubmit = e =>{          
        this.createTodo();
        console.log('Form submitted:');
        
        // reset input
        this.setState({
            id: '',
            task: '',
            tags: [],
            completed: false, 
            createdAt: '',
            author: '' 
        })
        this.history.push('/todos');
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Description: </label>
                        <TextField
                        value={this.state.task}
                        onChange={this.handleChange}
                        autoFocus          
                        />
                        <IconButton type="submit" aria-label="add todo" >
                            <AddCircleIcon />
                        </IconButton>
                        
                    </div>
                </form>
            </div>
        )
    }
}