import React , { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({task: e.target.value});
    }
    
    onSubmit(e){       
        const obj = Object.assign({}, this.state);
        this.props.addTodo(obj);
        console.log('Form submitted.');
        
        // reset input
        this.setState({
            id: '',
            task: '',
            tags: [],
            completed: false, 
            createdAt: '',
            author: '' 
        })
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