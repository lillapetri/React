import React from 'react';
import Todo from './Todo';

function TodoList(props) {  
    const {todos}= props;
    return (
        <div>
            {todos.map((todo) => (
              <Todo {...todo} key={todo._id} />
          ))}
        </div>
    )
}
export default TodoList;