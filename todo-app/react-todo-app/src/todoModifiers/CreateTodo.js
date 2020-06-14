import React , { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { withStyles } from '@material-ui/styles';
import styles from '../styles/CreateTodoStyles';
import { CardHeader, FormGroup } from '@material-ui/core';

import * as apiCalls from '../APIs/TodoAPI';

class CreateTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {task: ''}
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value
        });
    }
    onSubmit(e){     
        const obj = Object.assign({}, this.state);
        console.log(obj);
        apiCalls.createTodo(obj);
        console.log('Form submitted.');
        // reset input
        this.setState({task: ''})
    }

    render() {
        const {classes} = this.props;
        return (
            <FormGroup className={classes.root} style={{marginTop: 20}}>
                <CardHeader className={classes.title} title={'Create new Todo'} />
                <form onSubmit={this.onSubmit}>
                    <div>
                        <TextField
                        name='task'
                        label='New todo'
                        value={this.state.task}
                        onChange={this.handleChange}
                        required
                        autoFocus          
                        />
                        <IconButton color='primary' type="submit" aria-label="add todo" >
                            <AddCircleIcon />
                        </IconButton>
                        
                    </div>
                </form>
            </FormGroup>
        )
    }
}
export default withStyles(styles)(CreateTodo);