import React from 'react';
import Todo from './Todo';

function TodoList(props) {  
    const {todos, editTodo, removeTodo, toggleCompletion, deleteTag}= props;
    return (
        <ul>
            {todos.map((todo) => (
              <Todo {...todo} 
              todos={todos} 
              tags={todo.tags}
              key={todo.id} 
              id={todo.id} 
              editTodo={editTodo}
              removeTodo={removeTodo}
              toggleCompletion={toggleCompletion}
              deleteTag={deleteTag} />
          ))}
        </ul>
    )
}
export default TodoList;