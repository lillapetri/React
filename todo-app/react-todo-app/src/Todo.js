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
import {v4 as uuid} from 'uuid';
import { List } from '@material-ui/core';
import { updateTodo } from './API';

export default function Todo(props) {
    const [isEditing, toggleEdit] = useToggleState();
    const {todo, task, _id, tags, completed, deleteTodo, updateTodo, addTodo, toggleCompletion} = props;
    const removeTags = (id) => {
        /* if (!e) var e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
        const updatedTags = [...tags.filter((_, index) => index !== (id))]
        setTags([...tags.filter((_, index) => index !== id)]); */
    };
    const addTags = (e)=> {
        /* if (e.target.value !== "") {
            setTags({tags: [...tags, e.target.value]});
            //tags([...tags, e.target.value]);
            e.target.value = "";
            e.stopPropagation();
        } */
    };
    
    return (
        <List>
        { isEditing ? <EditTodo todo={todo} task={task} id={_id} tags={tags} completed={completed} addTags={addTags} removeTags={removeTags} updateTodo={updateTodo}/> :
        <ListItem style={{height: '64px'}}> 
           <CheckBox checked={completed} onClick={toggleCompletion} />
            <ListItemText style={{textDecoration: completed && 'line-through'}}>{task}</ListItemText>
            {tags.map(tag => <Tags tags={tags} id={tag.id} tag={tag.text} addTags={addTags} removeTags={removeTags}/>)}
            <input
                type="text"
                onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                placeholder="Press enter to add tags"
            />
            <ListItemSecondaryAction>                
                <IconButton aria-label="Edit" onClick={toggleEdit} >
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="Delete" onClick={deleteTodo}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>}
        </List>
    );
}
