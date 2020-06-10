import React , { Component } from 'react';
import { Switch } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import axios from 'axios';

import * as apiCalls from '../APIs/TagAPI';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: '',
            tags: [],
            newTag: '',
            completed: false, 
            createdAt: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/' + this.props.id)
            .then( res => {
                this.setState({
                    task: res.data.task,
                    tags: [...res.data.tags],
                    completed: res.data.completed,
                    createdAt: new Date()
                })
            })
            .catch( err => console.log(err));
    }

    handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value
        });
    }

    handleTagSubmit = (evt) => {
        let tag = {text: this.setState.newTag, todo: this.props.task};
        if(tag) {
            apiCalls.createTag(tag)
        }
    }
    
    onSubmit = (e) => {
        const obj = Object.assign({}, {  
            _id: this.props._id,
            task: this.state.task,
            tags: [...this.state.tags, this.state.newTag],
            completed: this.state.completed,
            createdAt: this.state.createdAt
        });
        this.handleTagSubmit();
        axios.put('http://localhost:4000/todos/' + this.props.id, obj)
            .then( res => console.log(res.data))
            .catch(err => console.log(err.message, this.props.id));
        window.location.reload(); 
    }

    render() {
        const {task, completed, newTag} = this.state;
        return (
                <FormGroup onSubmit={this.onSubmit}>
                        <TextField 
                        fullWidth
                        type="text" 
                        name='task'
                        className="form-control"
                        value={task}
                        onChange={this.handleChange}
                        />
                        <TextField 
                        fullWidth
                        type="text" 
                        name='newTag'
                        label='Add a new tag'
                        value={newTag}
                        onChange={this.handleChange}
                        />
                        <Switch 
                        id="checkbox"
                        type="checkbox"
                        name='completed'
                        onChange={() => this.setState({completed: !completed})}
                        checked={completed}
                        value={completed}
                        />
                        <label htmlFor="checkbox">
                            {completed ? 'Completed' : 'Unfinished'}
                        </label>
                        <IconButton variant="outlined" color='primary' type="submit" onClick={this.onSubmit} > 
                            <CheckCircleIcon />
                        </IconButton>
                </FormGroup>
        )
    }
}