import React from 'react';
import Todo from './Todo';

function TodoList(props) {  
    const {todos, editTodo, removeTodo}= props;
    return (
        <ul>
            {todos.map((todo) => (
              <Todo {...todo} 
              todos={todos} 
              key={todo.id} 
              id={todo.id} 
              editTodo={editTodo}
              removeTodo={removeTodo} />
          ))}
        </ul>
    )
}
export default TodoList;