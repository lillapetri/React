import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import EditTodo from './todoModifiers/EditTodo';
import DeleteTodo from './todoModifiers/DeleteTodo';
import useToggleState from './hooks/UseToggleState';
import Tags2 from './Tags2';
import { List } from '@material-ui/core';

export default function Todo(props) {
    const [isEditing, toggleEdit] = useToggleState();
    const {task, _id, tags, completed} = props;
    
    return (
        <List>
        { isEditing ? <EditTodo task={task} id={_id} tags={tags} completed={completed} /> :
        <ListItem style={{height: '64px'}}> 
           <CheckBox checked={completed} />
            <ListItemText style={{textDecoration: completed && 'line-through'}}>{task}</ListItemText>
            <Tags2  tags={tags}/>
            <ListItemSecondaryAction>                
                <IconButton aria-label="Edit" onClick={toggleEdit} >
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="Delete" onClick={() => DeleteTodo(_id)} >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>}
        </List>
    );
}
