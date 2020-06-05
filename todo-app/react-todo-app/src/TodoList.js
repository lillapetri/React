import React from 'react';
import Todo from './Todo';

function TodoList(props) {  
    const {todos}= props;
    return (
        <ul>
            {todos.map((todo) => (
              <Todo {...todo} key={todo._id} />
          ))}
        </ul>
    )
}
export default TodoList;