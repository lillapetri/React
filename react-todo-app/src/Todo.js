import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import EditTodo from './EditTodo';
import useToggleState from './hooks/UseToggleState';

export default function Todo(props) {
    const [isEditing, toggleEdit] = useToggleState();
    const {task, id, completed, editTodo, removeTodo, toggleCompletion} = props;
    return (
        <React.Fragment>
        { isEditing ? <EditTodo task={task} id={id} toggleEdit={toggleEdit} editTodo={editTodo}/> :
        <ListItem style={{height: '64px'}}> 
           <CheckBox checked={completed} onClick={() => toggleCompletion(id, completed)}/>
            <ListItemText style={{textDecoration: completed && 'line-through'}}>{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Edit" onClick={toggleEdit} >
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="Delete" onClick={() => removeTodo(id)} >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>}
        </React.Fragment>
    );
}
