import React, {useContext} from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {DispatchContext} from './contexts/todos.context';


export default function Todo({id, task, completed}) {
    const dispatch = useContext(DispatchContext)
    const[isEditing, toggle] = useToggleState();
    return (
        <ListItem style={{height: '64px'}}> 
            {isEditing ? <EditTodoForm  id={id} task={task} toggle={toggle}/> : 
            <>
            <CheckBox tabIndex={-1} checked={completed} onClick={() => dispatch({type: "TOGGLE", id: id})}/>
            <ListItemText style={{textDecoration: completed && 'line-through'}}>{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Edit" onClick={toggle}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="Delete" onClick={() => dispatch({type: "REMOVE", id: id})}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
            </>
        }
        </ListItem>
    );
}
