import React from 'react';
import Todo from './Todo';

function TodoList() {
    const todos = [
        {id: 1, task: 'This is the first todo', tags: ['tag1', 'tag2']},
        {id: 2, task: 'This is the second todo', tags: ['tag1', 'tag3']},
        {id: 3, task: 'This is the third todo', tags: [ 'tag2']},
        {id: 4, task: 'This is the fourth todo', tags: ['tag2', 'tag3']}

    ]   
    return (
        <ul>
            {todos.map((todo, i) => (
              <Todo todo={todo}
              />
          ))}
        </ul>
    )
}
export default TodoList;