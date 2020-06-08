import React , { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {v4 as uuid} from 'uuid';

import * as apiCalls from '../API';
import axios from 'axios';

import Tags from '../Tags';
import { Switch } from '@material-ui/core';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: '',
            tags: [],
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

    onChangeTask= (e) => {
        this.setState({
            task: e.target.value
        });
    }
        
    onChangeTags = (e, i) => {
        const newTag = e.target.value;
        const updatedTags = this.state.tags.map((tag, i) => i === this.props.id ? {...tag, tag: newTag} : tag)
        this.setState({tags: updatedTags})
        e.stopPropagation();
    }

    onChangeCompleted = () => {
        this.setState({
            completed: !this.state.completed
        });
    }

    onSubmit = (e) => {
        const obj = Object.assign({}, {  
            _id: this.props._id,
            task: this.state.task,
            tags: this.state.tags,
            completed: this.state.completed,
            createdAt: this.state.createdAt
        });
        axios.put('http://localhost:4000/todos/' + this.props.id, obj)
            .then( res => console.log(res.data))
            .catch(err => console.log(err.message, this.props.id));
        window.location.reload(); 
    }

    render() {
        return (
            <div>
                <FormGroup onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <TextField 
                        fullWidth
                        label=''
                        type="text" 
                        className="form-control"
                        value={this.state.task}
                        onChange={this.onChangeTask}
                        />
                    </div>
                    <div>
                        <TextField 
                        fullWidth
                        type="text" 
                        label='Add tags'
                        //value={this.state.tags.map(tag => tag.tag_text)}
                        onChange={(e) => this.onChangeTags(e.target.value.id, e.target.value)}
                        />
                    </div>
                    {this.state.tags.length !==0 && <Tags tags={this.state.tags} id={this.props.id}/>}
                        <Switch 
                        id="checkbox"
                        type="checkbox"
                        onChange={this.onChangeCompleted}
                        checked={this.state.completed}
                        value={this.state.completed}
                        />
                        <label htmlFor="checkbox">
                            {this.state.completed ? 'Completed' : 'Unfinished'}
                        </label>
                        <IconButton variant="outlined" color='primary' type="submit" onClick={this.onSubmit} > 
                            <CheckCircleIcon />
                        </IconButton>
                </FormGroup>
            </div>
        )
    }
}