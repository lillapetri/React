import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import {TodosContext} from './contexts/todos.context';


function EditTodoForm({id, task, toggle}) {
    const [value, handleChange, reset] = useInputState(task);
    const { dispatch } = useContext(TodosContext);
    return (
        <form 
        onSubmit={(e) => {
            e.preventDefault();
            dispatch({type: "EDIT", id: id, newTask: value});
            reset();
            toggle();
        }}
        style={{marginLeft: '1rem', width: '80%'}}>
        <TextField 
        margin='normal' 
        value={value} 
        onChange={handleChange} 
        variant='outlined'
        color='secondary'
        fullWidth 
        autoFocus
        />
        </form>
    )
}
export default EditTodoForm;