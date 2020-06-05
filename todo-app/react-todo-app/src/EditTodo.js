import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';

import UseInputState from  './hooks/UseInputState';

function EditTodo({todos, id, task, toggleEdit, editTodo}) {
    const [value, updateValue, reset] = UseInputState(task);
    return (
        <form
        id={id}
        onSubmit={(e) => {
            e.preventDefault();
            toggleEdit();
            editTodo(id, value);
            reset();
        }}
        >
            <TextField
            value={value}
            onChange={updateValue} 
            onSubmit={console.log(todos)}
            autoFocus          
             />
             <IconButton type="submit" aria-label="save" >
                <CheckIcon />
            </IconButton>
        </form>
    )
}
export default EditTodo;