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
import useInputState from './hooks/UseInputState';
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
    const [tagsArray, setTags, reset] = useInputState(tags);
    
    const removeTag = (t) =>{
        let updatedTags = tags.filter(tag => tag.id === t.id);
        console.log(updatedTags);
    }

    const addTags = (e)=> {
        /* if (e.target.value !== "") {
            setTags({tags: [...tags, e.target.value]});
            //tags([...tags, e.target.value]);
            e.target.value = "";
            e.stopPropagation();
        } */
    };
    
    return (
        <List className={classes.root}>
        { isEditing ? <EditTodo {...todo} task={task} id={_id} tags={tags} completed={completed} addTags={addTags} updateTodo={updateTodo}/> :
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
        {tags.map((tag, id) => <Tags tags={tags} tag={tag} id={id} addTags={addTags} removeTag={() => this.removeTag.bind(this, tag)}/>)}
        </List>
    );
}
