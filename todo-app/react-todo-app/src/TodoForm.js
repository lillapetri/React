import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import UseInputState from  './hooks/UseInputState';

function TodoForm({todos, addTodo}) {
    const [value, updateValue, reset] = UseInputState('');
    return (
        <form
        onSubmit={(e) => {
            e.preventDefault();
            addTodo(todos, value);
            reset();
        }}
        >
            <TextField
            value={value}
            onChange={updateValue}
            autoFocus          
             />
             <IconButton type="submit" aria-label="add todo" >
                <AddCircleIcon />
            </IconButton>
        </form>
    )
}
export default TodoForm;