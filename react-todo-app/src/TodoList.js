import React from 'react';
import Todo from './Todo';

function TodoList(props) {  
    const {todos, editTodo}= props;
    return (
        <ul>
            {todos.map((todo) => (
              <Todo {...todo} todos={todos} key={todo.id} id={todo.id} editTodo={editTodo} />
          ))}
        </ul>
    )
}
export default TodoList;