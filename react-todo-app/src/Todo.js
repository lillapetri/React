import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


export default function Todo(props) {
    const {task, completed} = props;
    return (
        <ListItem style={{height: '64px'}}> 
           <CheckBox checked={completed} />
            <ListItemText style={{textDecoration: completed && 'line-through'}}>{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Edit" >
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="Delete" >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}
