import React , { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { withStyles } from '@material-ui/styles';
import styles from '../styles/CreateTodoStyles';
import { CardHeader } from '@material-ui/core';

class CreateTodo extends Component {

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
        const {classes} = this.props;
        return (
            <div className={classes.root} style={{marginTop: 20}}>
                <CardHeader className={classes.title} title={'Create new Todo'} />
                <form onSubmit={this.onSubmit}>
                    <div>
                        <TextField
                        label='New todo'
                        value={this.state.task}
                        onChange={this.handleChange}
                        autoFocus          
                        />
                        <IconButton color='primary' type="submit" aria-label="add todo" >
                            <AddCircleIcon />
                        </IconButton>
                        
                    </div>
                </form>
            </div>
        )
    }
}
export default withStyles(styles)(CreateTodo);