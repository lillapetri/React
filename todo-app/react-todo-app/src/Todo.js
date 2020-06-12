import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditTodo from './todoModifiers/EditTodo';
import useToggleState from './hooks/UseToggleState';
import Tags from './Tags';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      margin: '0 auto',
      maxWidth: '500px',
      backgroundColor: theme.palette.background.paper,
    },
    buttons: {
        padding: '0 10px',
    }
  }));
  

export default function Todo(props) {
    const {todo, task, _id, tags, completed, deleteTodo, updateTodo, toggleCompletion} = props;
    const classes = useStyles();
    const [isEditing, toggleEdit] = useToggleState();
    
    return (
        <List className={classes.root}>
        { isEditing ? <EditTodo {...todo} task={task} id={_id} tags={tags} completed={completed} updateTodo={updateTodo}/> :
        <ListItem style={{height: '64px'}}> 
           <CheckBox checked={completed} onClick={toggleCompletion} />
            <ListItemText style={{textDecoration: completed && 'line-through'}}>{task}</ListItemText>
            <ListItemSecondaryAction>                
                <IconButton className={classes.buttons} color='primary' aria-label="Edit" onClick={toggleEdit} >
                    <EditIcon />
                </IconButton>
                <IconButton className={classes.buttons} color='secondary' aria-label="Delete" onClick={deleteTodo}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>}
        {tags.length !== 0 && tags.map((tag, i) => 
            <Tags tags={tags} tag={tag.text} id={tag._id} todoId={_id} />
        )}
        </List>
    );
}
